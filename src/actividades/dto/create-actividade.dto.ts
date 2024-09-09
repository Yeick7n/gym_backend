/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { Maquina } from "src/maquinas/entities/maquina.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

export class CreateActividadeDto {

    @IsNotEmpty()
    repeticiones: number;

    @IsNotEmpty()
    peso: number;

    @IsNotEmpty()
    fechaInicio: Date;

    @IsNotEmpty()
    fechaFin: Date;

    @IsNotEmpty()
    usuario: Usuario;

    @IsNotEmpty()
    maquina: Maquina;

}
