/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';


@Injectable()

export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findByUsuario(usuario: string){
    return await this.usuarioRepository.findOne({
      where: {
        usuario,
      },

      relations: ['rol'],
    })
  }

  async findByEmail(email: string){
    return await this.usuarioRepository.findOneBy({
      email
    })

  }
  async create(newUser: CreateUsuarioDto) {
    return await this.usuarioRepository.save(newUser);
  }


  async findAll() {
    return this.usuarioRepository.find({
      relations: ['rol'],
    });
  }

  async findOne(id: number) {
    const userFound = this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      throw new Error('El usuario no existe');
    }

    return userFound;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const userFound = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      throw new Error('El usuario no existe');
    }

    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number) {
    const userFound = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!userFound) {
      throw new Error('El usuario no existe');
    }

    return this.usuarioRepository.delete(id);
  }
}
