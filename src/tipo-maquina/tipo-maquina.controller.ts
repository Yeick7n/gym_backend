/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoMaquinaService } from './tipo-maquina.service';
import { CreateTipoMaquinaDto } from './dto/create-tipo-maquina.dto';
import { UpdateTipoMaquinaDto } from './dto/update-tipo-maquina.dto';

@Controller('tipo-maquina')
export class TipoMaquinaController {
  constructor(private readonly tipoMaquinaService: TipoMaquinaService) {}

  @Post('crear')
  create(@Body() createTipoMaquinaDto: CreateTipoMaquinaDto) {
    return this.tipoMaquinaService.create(createTipoMaquinaDto);
  }

  @Get('obtenerTodos')
  findAll() {
    return this.tipoMaquinaService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.tipoMaquinaService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: number, @Body() updateTipoMaquinaDto: UpdateTipoMaquinaDto) {
    return this.tipoMaquinaService.update(id, updateTipoMaquinaDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: number) {
    return this.tipoMaquinaService.remove(id);
  }
}
