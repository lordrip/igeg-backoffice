import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../customers/entities/customer.entity';
import { Intervention } from './entities/Intervention.entity';
import { InterventionsController } from './Interventions.controller';
import { InterventionsService } from './Interventions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Intervention])],
  controllers: [InterventionsController],
  providers: [InterventionsService],
})
export class InterventionsModule {}
