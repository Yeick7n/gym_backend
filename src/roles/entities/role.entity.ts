/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rol: string;

    @OneToMany((eager: true) => Usuario, (usuario) => usuario.rol)
    usuarios: Usuario[];
}
