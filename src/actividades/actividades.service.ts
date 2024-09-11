/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Actividade } from './entities/actividade.entity';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Injectable()
export class ActividadesService {
  constructor(
    @InjectRepository(Actividade)
    private actividadesRepository: Repository<Actividade>,
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  // Vanessa
  async rankingPorCantidadDeActividades() {
    return this.actividadesRepository.createQueryBuilder('actividade')
      .select('usuario.id', 'usuarioId')
      .addSelect('usuario.nombre', 'usuarioNombre') 
      .addSelect('SUM(actividade.peso)', 'pesoTotal')
      .leftJoin('actividade.usuario', 'usuario')
      .groupBy('usuario.id')
      .orderBy('cantidadActividades', 'DESC')
      .getRawMany();
  }

  async rankingPorPesoPorRepeticiones() {
    return this.actividadesRepository.createQueryBuilder('actividade')
      .select('usuario.id', 'usuarioId')
      .addSelect('usuario.nombre', 'usuarioNombre')
      .addSelect('SUM(actividade.peso * actividade.repeticiones)', 'pesoRepeticiones') 
      .leftJoin('actividade.usuario', 'usuario')
      .groupBy('usuario.id')
      .orderBy('pesoRepeticiones', 'DESC')
      .getRawMany();
  }

  async rankingPorPesoTotal() {
    return this.actividadesRepository.createQueryBuilder('actividade')
      .select('usuario.id', 'usuarioId')
      .addSelect('SUM(actividade.peso)', 'pesoTotal') 
      .leftJoin('actividade.usuario', 'usuario')
      .groupBy('usuario.id')
      .orderBy('pesoTotal', 'DESC')
      .getRawMany();
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

  // Yeickon

  async findActividadesByUsuarioId(id: number) {
      const consulta = await this.actividadesRepository.findOne({
        where: {
          usuario: {
            id,
          }
        }
      });
  
      return consulta
    }

//   async rankingPorCantidadDeActividades(intervaloInicio: Date, intervaloFin: Date) {
//     const actividades = await this.actividadesRepository.createQueryBuilder('actividad')
//       .select('actividad.usuarioId, COUNT(actividad.id) AS cantidadActividades')
//       .where('actividad.fechaInicio BETWEEN :intervaloInicio AND :intervaloFin', { intervaloInicio, intervaloFin })
//       .groupBy('actividad.usuarioId')
//       .orderBy('cantidadActividades', 'DESC')
//       .getRawMany();

//     return actividades;
//   }

//   async rankingPorPesoPorRepeticiones(intervaloInicio: Date, intervaloFin: Date) {
//     const actividades = await this.actividadesRepository.createQueryBuilder('actividad')
//       .select('actividad.usuarioId, SUM(actividad.peso * actividad.repeticiones) AS pesoTotal')
//       .where('actividad.fechaInicio BETWEEN :intervaloInicio AND :intervaloFin', { intervaloInicio, intervaloFin })
//       .groupBy('actividad.usuarioId')
//       .orderBy('pesoTotal', 'DESC')
//       .getRawMany();

//     return actividades;
//   }

//   async rankingPorPesoTotal(intervaloInicio: Date, intervaloFin: Date) {
//     const actividades = await this.actividadesRepository.createQueryBuilder('actividad')
//       .select('actividad.usuarioId, SUM(actividad.peso) AS pesoTotal')
//       .where('actividad.fechaInicio BETWEEN :intervaloInicio AND :intervaloFin', { intervaloInicio, intervaloFin })
//       .groupBy('actividad.usuarioId')
//       .orderBy('pesoTotal', 'DESC')
//       .getRawMany();

//     return actividades;
//   }

}


