import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';
import { CreateInterventionDto } from './dto/create-Intervention.dto';
import { UpdateInterventionDto } from './dto/update-Intervention.dto';
import { Intervention } from './entities/Intervention.entity';

@Injectable()
export class InterventionsService {
  constructor(
    @InjectRepository(Intervention)
    private readonly interventionsRepository: Repository<Intervention>,
  ) {}

  create(createInterventionDto: CreateInterventionDto): Promise<InsertResult> {
    return this.interventionsRepository.insert(createInterventionDto);
  }

  async findAll(): Promise<Intervention[]> {
    return this.interventionsRepository.find({ relations: ['customer'] });
  }

  async findOne(id: number): Promise<Intervention> {
    return this.interventionsRepository.findOne(id, {
      relations: ['customer'],
    });
  }

  async update(
    id: number,
    updateInterventionDto: UpdateInterventionDto,
  ): Promise<Intervention> {
    const Intervention = await this.interventionsRepository.findOneOrFail(id);
    Object.assign(Intervention, updateInterventionDto);

    return this.interventionsRepository.save(Intervention);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.interventionsRepository.delete(id);
  }
}
