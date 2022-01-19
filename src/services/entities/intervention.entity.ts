import { Customer } from 'src/customers/entities/customer.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Intervention {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  date: Date;

  @Column()
  details: string;

  @Column()
  assignee: string;

  @Column()
  amount: number;

  @Column({ default: false })
  billed: boolean;

  @ManyToOne((type) => Customer, (customer) => customer.interventions)
  customer: Customer;
}
