/* eslint-disable prettier/prettier */
import { Maquina } from "src/maquinas/entities/maquina.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Actividade {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    repeticiones: number;

    @Column()
    peso: number;

    @Column()
    series: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.actividades)
    usuario: Usuario;

    @ManyToOne(() => Maquina, (maquina) => maquina.actividades)
    maquina: Maquina;
}
