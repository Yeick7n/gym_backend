/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TipoMaquinaService } from './tipo-maquina.service';
import { TipoMaquinaController } from './tipo-maquina.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMaquina } from './entities/tipo-maquina.entity';

@Module({
  exports: [TypeOrmModule.forFeature([TipoMaquina])],
  controllers: [TipoMaquinaController],
  providers: [TipoMaquinaService],
})
export class TipoMaquinaModule {}
