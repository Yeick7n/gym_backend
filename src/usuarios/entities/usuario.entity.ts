/* eslint-disable prettier/prettier */
import { Actividade } from 'src/actividades/entities/actividade.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  usuario: string;

  @Column()
  contrasena: string;

  @Column()
  email: string;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column()
  peso: number;

  @Column()
  altura: number;

  @ManyToOne(() => Role, (rol) => rol.usuarios)
  rol: Role

  @OneToMany(() => Actividade, (actividad) => actividad.usuario)
  actividades: Actividade[]
}
