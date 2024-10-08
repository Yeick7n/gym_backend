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

  // METHODS HECHOS POR VANESSA
  @Get('ranking/cantidad-actividades')
  async rankingPorCantidadDeActividades() {
    return this.actividadesService.rankingPorCantidadDeActividades();
  }

  @Get('ranking/peso-repeticiones')
  async rankingPorPesoPorRepeticiones() {
    return this.actividadesService.rankingPorPesoPorRepeticiones();
  }

  @Get('ranking/peso-total')
  async rankingPorPesoTotal() {
    return this.actividadesService.rankingPorPesoTotal();
  }

  // METODOS HECHOS POR YEICKON, ESTOS SON SI SE NECESITAN LOS RANKINGS POR FECHA 

  @Get('usuario/:id')
  findActividadesByUsuarioId(@Param('id') id: number){
    return this.actividadesService.findActividadesByUsuarioId(id);
  }

  // @Get('ranking/cantidad-actividades')
  // async rankingPorCantidadDeActividades(@Query('inicio') inicio: string, @Query('fin') fin: string) {
  //   const intervaloInicio = new Date(inicio);
  //   const intervaloFin = new Date(fin);
  //   return this.actividadesService.rankingPorCantidadDeActividades(intervaloInicio, intervaloFin);
  // }

  // @Get('ranking/peso-repeticiones')
  // async rankingPorPesoPorRepeticiones(@Query('inicio') inicio: string, @Query('fin') fin: string) {
  //   const intervaloInicio = new Date(inicio);
  //   const intervaloFin = new Date(fin);
  //   return this.actividadesService.rankingPorPesoPorRepeticiones(intervaloInicio, intervaloFin);
  // }

  // @Get('ranking/peso-total')
  // async rankingPorPesoTotal(@Query('inicio') inicio: string, @Query('fin') fin: string) {
  //   const intervaloInicio = new Date(inicio);
  //   const intervaloFin = new Date(fin);
  //   return this.actividadesService.rankingPorPesoTotal(intervaloInicio, intervaloFin);
  // }
}
