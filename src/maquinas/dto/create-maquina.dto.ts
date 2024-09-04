/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";
import { TipoMaquina } from "src/tipo-maquina/entities/tipo-maquina.entity";

export class CreateMaquinaDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    estado: string;

    @IsNotEmpty()
    tipoMaquina: TipoMaquina;
}
