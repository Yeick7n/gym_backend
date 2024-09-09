/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async registro(registro: RegisterDto) {
    const usuarioFound = await this.usuarioService.findByUsuario(registro.usuario);

    if (usuarioFound) {
      throw new Error('El usuario ya existe');
    }

    const emailFound = await this.usuarioService.findByEmail(registro.email);

    if (emailFound) {
      throw new Error('El email ya existe');
    }

    return await this.usuarioService.create({
    ...registro,
    contrasena: await bcryptjs.hash(registro.contrasena, 10),
    });
  }

  async login({ usuario, contrasena }: LoginDto) {
    const usuarioFound = await this.usuarioService.findByUsuario(usuario);

    if (!usuarioFound) {
      throw new UnauthorizedException('El usuario no existe');
    }

    const passwordValid = await bcryptjs.compare(
      contrasena,
      usuarioFound.contrasena,
    );

    if (!passwordValid) {
      {
        throw new UnauthorizedException('credenciales incorrectas');
      }
    }

    const payload = {
      usuario: usuarioFound.usuario,
    }

    const token = this.jwtService.sign(payload);

    delete usuarioFound.contrasena;
    
    return{
      token,
      ...usuarioFound,
    }
  }
}
