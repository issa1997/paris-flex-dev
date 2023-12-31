import { PassengerExtrasEntity } from 'src/passenger-extras/entities/passenger-extra.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity('passengers')
export class PassengersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  passengerCount: number;

  @Column()
  travelNumber: string;

  @Column()
  travelFrom: string;

  @Column()
  isDelete: boolean;
}
