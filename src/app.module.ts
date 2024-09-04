/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { ActividadesModule } from './actividades/actividades.module';
import { MaquinasModule } from './maquinas/maquinas.module';
import { TipoMaquinaModule } from './tipo-maquina/tipo-maquina.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1234567890',
      database: 'gym',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
    RolesModule,
    ActividadesModule,
    MaquinasModule,
    TipoMaquinaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
