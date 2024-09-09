/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Maquina } from "src/maquinas/entities/maquina.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actividade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    repeticiones: number;
                                 
    @Column()
    peso: number;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFin: Date;

    @ManyToOne((eager:true,) => Usuario, (usuario) => usuario.actividades)
    usuario: Usuario;

    @ManyToOne((eager:true) => Maquina, (maquina) => maquina.actividades)
    maquina: Maquina;
}
