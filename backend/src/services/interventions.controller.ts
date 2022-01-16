import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Routes } from '../config';
import { InterventionsService } from './Interventions.service';
import { CreateInterventionDto } from './dto/create-Intervention.dto';
import { UpdateInterventionDto } from './dto/update-Intervention.dto';

@Controller(Routes.Interventions)
export class InterventionsController {
  constructor(private readonly InterventionsService: InterventionsService) {}

  @Post()
  create(@Body() createInterventionDto: CreateInterventionDto) {
    return this.InterventionsService.create(createInterventionDto);
  }

  @Get()
  findAll() {
    return this.InterventionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.InterventionsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInterventionDto: UpdateInterventionDto,
  ) {
    return this.InterventionsService.update(+id, updateInterventionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.InterventionsService.remove(+id);
  }
}
