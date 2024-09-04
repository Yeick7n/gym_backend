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
    @InjectRepository(TipoMaquina) private maquinaRepository: Repository<TipoMaquina>,
  ){}
  async create(createTipoMaquinaDto: CreateTipoMaquinaDto) {
    const newTipoMaquina = this.maquinaRepository.create(createTipoMaquinaDto);
    return await this.maquinaRepository.save(newTipoMaquina);
  }

  async findAll() {
    return await this.maquinaRepository.find();
  }

  async findOne(id: number) {
    const tipomaquinaFound = await this.maquinaRepository.findOne({
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
    const tipomaquinaFound = await this.maquinaRepository.findOne({
      where: {
        id,
      }
    });

    if(!tipomaquinaFound) {
      throw new Error('La maquina no existe');
    }

    return await this.maquinaRepository.update(id, updateTipoMaquinaDto);
  }

  async remove(id: number) {
    const tipomaquinaFound = await this.maquinaRepository.findOne({
      where: {
        id,
      }
    });

    if(!tipomaquinaFound) {
      throw new Error('La maquina no existe');
    }

    return await this.maquinaRepository.delete(id);
  }
}
