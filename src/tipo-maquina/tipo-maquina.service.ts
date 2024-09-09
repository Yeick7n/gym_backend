/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTipoMaquinaDto } from './dto/create-tipo-maquina.dto';
import { UpdateTipoMaquinaDto } from './dto/update-tipo-maquina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoMaquina } from './entities/tipo-maquina.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoMaquinaService {
  constructor(
    @InjectRepository(TipoMaquina) private tipoMaquinaRepository: Repository<TipoMaquina>,
  ){}
  async create(createTipoMaquinaDto: CreateTipoMaquinaDto) {
    const newTipoMaquina = this.tipoMaquinaRepository.create(createTipoMaquinaDto);
    return await this.tipoMaquinaRepository.save(newTipoMaquina);
  }

  async findAll() {
    return await this.tipoMaquinaRepository.find();
  }

  async findOne(id: number) {
    const tipomaquinaFound = await this.tipoMaquinaRepository.findOne({
      where: {
        id,
      }
    });

    if(!tipomaquinaFound) {
      throw new Error('La maquina no existe');
    }

    return tipomaquinaFound;

  }

  async update(id: number, updateTipoMaquinaDto: UpdateTipoMaquinaDto) {
    const tipomaquinaFound = await this.tipoMaquinaRepository.findOne({
      where: {
        id,
      }
    });

    if(!tipomaquinaFound) {
      throw new Error('La maquina no existe');
    }

    return await this.tipoMaquinaRepository.update(id, updateTipoMaquinaDto);
  }

  async remove(id: number) {
    const tipomaquinaFound = await this.tipoMaquinaRepository.findOne({
      where: {
        id,
      }
    });

    if(!tipomaquinaFound) {
      throw new Error('La maquina no existe');
    }

    return await this.tipoMaquinaRepository.delete(id);
  }
}
