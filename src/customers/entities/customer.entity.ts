import { Intervention } from 'src/services/entities/Intervention.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fiscalId: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  contactPerson: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany((type) => Intervention, (intervention) => intervention.customerId)
  interventions: Intervention[];
}
