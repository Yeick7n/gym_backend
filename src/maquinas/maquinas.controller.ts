/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MaquinasService } from './maquinas.service';
import { CreateMaquinaDto } from './dto/create-maquina.dto';
import { UpdateMaquinaDto } from './dto/update-maquina.dto';

@Controller('maquinas')
export class MaquinasController {
  constructor(private readonly maquinasService: MaquinasService) {}

  @Post('crear')
  create(@Body() createMaquinaDto: CreateMaquinaDto) {
    return this.maquinasService.create(createMaquinaDto);
  }

  @Get('obtenerTodos')
  findAll() {
    return this.maquinasService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.maquinasService.findOne(id);
  }

  @Put('actualizar/:id')
  update(@Param('id') id: number, @Body() updateMaquinaDto: UpdateMaquinaDto) {
    return this.maquinasService.update(id, updateMaquinaDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: number) {
    return this.maquinasService.remove(id);
  }
}
