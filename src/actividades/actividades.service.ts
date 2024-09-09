/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividade } from './entities/actividade.entity';
import { DataSource, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class ActividadesService {
  constructor(
    @InjectRepository(Actividade)
    private actividadesRepository: Repository<Actividade>,
    private dataSource: DataSource,
  ) {}

  async maquinaDisponible(maquinaId: number, nuevoInicio: Date, nuevoFin: Date): Promise<boolean> {
    const actividadesEnConflicto = await this.actividadesRepository
      .createQueryBuilder('actividad')
      .where('actividad.maquinaId = :maquinaId', { maquinaId })
      .andWhere(':nuevoInicio BETWEEN actividad.fechaInicio AND actividad.fechaFin', { nuevoInicio })
      .orWhere(':nuevoInicio OR :nuevoFin BETWEEN actividad.fechaInicio AND actividad.fechaFin', { nuevoInicio, nuevoFin })
      .orWhere('actividad.fechaInicio <= :nuevoInicio AND actividad.fechaFin >= :nuevoFin', { nuevoInicio, nuevoFin })
      .orWhere(':nuevoInicio BETWEEN actividad.fechaInicio AND actividad.fechaFin', { nuevoInicio })
      .orWhere(':nuevoFin BETWEEN actividad.fechaInicio AND actividad.fechaFin', { nuevoFin })
      .getMany();

      // .andWhere('actividad.fechaInicio >= :nuevoInicio AND actividad.fechaFin <= :nuevoFin', { nuevoInicio, nuevoFin })
    console.log(actividadesEnConflicto, nuevoInicio, nuevoFin);
    return actividadesEnConflicto.length === 0;
  }

  async create(actividad: CreateActividadeDto) {

    const maquinaId: any = actividad.maquina;
    const fechaInicio = new Date(actividad.fechaInicio);
    const fechaFin = new Date(actividad.fechaFin);

    const maquinaDisponible = await this.actividadesRepository.findOne({
      where: {
        maquina: maquinaId,
        fechaInicio: LessThanOrEqual(fechaFin),
        fechaFin: MoreThanOrEqual(fechaInicio),
      }
    });

    if(maquinaDisponible) {
      throw new BadRequestException('La maquina ya tiene una actividad en ese horario');
    }
    
    const newActividad = this.actividadesRepository.create(actividad);
    return await this.actividadesRepository.save(newActividad);
  }

  

  async findAll() {
    return await this.actividadesRepository.find({
      relations: ['maquina', 'usuario'],
    });
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
