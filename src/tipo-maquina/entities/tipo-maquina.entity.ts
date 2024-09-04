/* eslint-disable prettier/prettier */
import { Maquina } from 'src/maquinas/entities/maquina.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoMaquina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Maquina, (maquina) => maquina.tipoMaquina)
  maquinas: Maquina[];
}
