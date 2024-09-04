/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MaquinasService } from './maquinas.service';
import { MaquinasController } from './maquinas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maquina } from './entities/maquina.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Maquina])],
  controllers: [MaquinasController],
  providers: [MaquinasService],
})
export class MaquinasModule {}
