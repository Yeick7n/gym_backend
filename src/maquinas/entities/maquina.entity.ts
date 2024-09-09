/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Actividade } from "src/actividades/entities/actividade.entity";
import { TipoMaquina } from "src/tipo-maquina/entities/tipo-maquina.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Maquina {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    estado: string;

    @OneToMany((eager:true,) => Actividade, (actividad) => actividad.maquina)
    actividades: Actividade[];

    @ManyToOne((eager:true,) => TipoMaquina, (tipoMaquina) => tipoMaquina.maquinas)
    tipoMaquina: TipoMaquina;
}
