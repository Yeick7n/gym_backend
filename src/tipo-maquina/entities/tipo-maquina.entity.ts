/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoMaquina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
}
