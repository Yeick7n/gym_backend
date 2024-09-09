/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Maquina } from 'src/maquinas/entities/maquina.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoMaquina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany((eager: true) => Maquina, (maquina) => maquina.tipoMaquina)
  maquinas: Maquina[];
}
