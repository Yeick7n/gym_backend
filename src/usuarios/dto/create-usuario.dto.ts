/* eslint-disable prettier/prettier */
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Role } from "src/roles/entities/role.entity";


export class CreateUsuarioDto {
    
    @IsNotEmpty()
    @MinLength(2)
    usuario: string;

    @Transform(({ value }) => value.trim())
    @IsNotEmpty()
    @MinLength(2)
    contrasena: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(2)
    nombre: string;

    @IsNotEmpty()
    edad: number;

    @IsNotEmpty()
    peso: number;

    @IsNotEmpty()
    altura: number;

    @IsNotEmpty()
    rol: Role;
}
