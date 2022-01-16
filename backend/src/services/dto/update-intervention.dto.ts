import { PartialType } from '@nestjs/mapped-types';
import { CreateInterventionDto } from './create-Intervention.dto';

export class UpdateInterventionDto extends PartialType(CreateInterventionDto) {}
