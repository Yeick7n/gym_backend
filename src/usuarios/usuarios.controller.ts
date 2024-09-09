/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // UseGuards,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
// import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('usuarios')
// @UseGuards(AuthGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('/crear')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Get('obtenerTodos')
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get('obtener/:id')
  findOne(@Param('id') id: number) {
    return this.usuariosService.findOne(id);
  }

  @Patch('actualizar/:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete('eliminar/:id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(id);
  }
}
