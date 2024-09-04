import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoMaquinaDto } from './create-tipo-maquina.dto';

export class UpdateTipoMaquinaDto extends PartialType(CreateTipoMaquinaDto) {}
