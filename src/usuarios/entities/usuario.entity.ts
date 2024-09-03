/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

    //   id_ol: rol
}
