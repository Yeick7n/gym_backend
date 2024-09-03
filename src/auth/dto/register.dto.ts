/* eslint-disable prettier/prettier */
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RegisterDto {
    @Transform(({ value }) => value.trim())
    @IsNotEmpty()
    usuario: string;

    @Transform(({ value }) => value.trim())
    @IsNotEmpty()
    contrasena: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    edad: number;

    @IsNotEmpty()
    @IsNumber()
    peso: number;

    @IsNumber()
    @IsNotEmpty()
    altura: number;
}