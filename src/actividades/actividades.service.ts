/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividade } from './entities/actividade.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActividadesService {
  constructor(
    @InjectRepository(Actividade)
    private actividadesRepository: Repository<Actividade>,
  ) {}
  async create(actividad: CreateActividadeDto) {
    const newActividad = this.actividadesRepository.create(actividad);
    return this.actividadesRepository.save(newActividad);
  }

  async findAll() {
    return await this.actividadesRepository.find();
  }

  async findOne(id: number) {
    const actividadFound = await this.actividadesRepository.findOne({
      where: {
        id,
      },
    });

    if (!actividadFound) {
      throw new Error('La actividad no existe');
    }

    return actividadFound;
  }

  async update(id: number, updateActividadeDto: UpdateActividadeDto) {
    const actividadFound = await this.actividadesRepository.findOne({
      where: {
        id,
      },
    });

    if (!actividadFound) {
      throw new Error('La actividad no existe');
    }

    return this.actividadesRepository.update(id, updateActividadeDto);
  }

  async remove(id: number) {
    const actividadFound = await this.actividadesRepository.findOne({
      where: {
        id,
      },
    });

    if (!actividadFound) {
      throw new Error('La actividad no existe');
    }

    return this.actividadesRepository.delete(id);
  }
}
