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

    @OneToMany(() => Actividade, (actividad) => actividad.maquina)
    actividades: Actividade[];

    @ManyToOne(() => TipoMaquina, (tipoMaquina) => tipoMaquina.maquinas)
    tipoMaquina: TipoMaquina;
}
