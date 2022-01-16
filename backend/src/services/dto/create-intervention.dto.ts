export class CreateInterventionDto {
  id: number;
  customerId: number;
  date: Date;
  details: string;
  assignee: string;
  amount: number;
  billed: boolean;
}
