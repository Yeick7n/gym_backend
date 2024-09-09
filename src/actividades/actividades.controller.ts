/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActividadesService } from './actividades.service';
import { CreateActividadeDto } from './dto/create-actividade.dto';
import { UpdateActividadeDto } from './dto/update-actividade.dto';

@Controller('actividades')
export class ActividadesController {
  constructor(private readonly actividadesService: ActividadesService) {}

  @Post('crear')
  create(@Body() createActividadeDto: CreateActividadeDto) {
    return this.actividadesService.create(createActividadeDto);
  }

  @Get('obtenerTodos')
  findAll() {
    return this.actividadesService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.actividadesService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: number, @Body() updateActividadeDto: UpdateActividadeDto) {
    return this.actividadesService.update(id, updateActividadeDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: number) {
    return this.actividadesService.remove(id);
  }
}
