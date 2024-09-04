/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMaquinaDto } from './dto/create-maquina.dto';
import { UpdateMaquinaDto } from './dto/update-maquina.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Maquina } from './entities/maquina.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaquinasService {

  constructor(
    @InjectRepository(Maquina) private maquinaRepository: Repository<Maquina>
  ){}
  async create(createMaquinaDto: CreateMaquinaDto) {
    const newMaquina = await this.maquinaRepository.create(createMaquinaDto);
    return await this.maquinaRepository.save(newMaquina);
  }

  async findAll() {
    return await this.maquinaRepository.find();
  }

  async findOne(id: number) {
    const maquinaFound = await this.maquinaRepository.findOne({
      where: {
        id,
      }
    });

    if (!maquinaFound) {
      throw new Error('La maquina no existe');
    }

    return maquinaFound;
  }

  async update(id: number, updateMaquinaDto: UpdateMaquinaDto) {
    const maquinaFound = await this.maquinaRepository.findOne({
      where: {
        id,
      }
    });

    if (!maquinaFound) {
      throw new Error('La maquina no existe');
    }

    return await this.maquinaRepository.update(id, updateMaquinaDto);
  }

  async remove(id: number) {
    const maquinaFound = await this.maquinaRepository.findOne({
      where: {
        id,
      }
    });

    if (!maquinaFound) {
      throw new Error('La maquina no existe');
    }

    return await this.maquinaRepository.delete(id);
  }
}
