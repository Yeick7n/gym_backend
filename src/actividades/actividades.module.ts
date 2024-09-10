/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { ActividadesController } from './actividades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividade } from './entities/actividade.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Actividade]), UsuariosModule],
  controllers: [ActividadesController],
  providers: [ActividadesService],
})
export class ActividadesModule {}
