/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService) 
  {}

  @Post('registro')
  register(@Body() registro: RegisterDto) {
    return this.authService.registro(registro)
  }

  @Post('login')
  login(@Body() login: LoginDto){
    return this.authService.login(login)
  }
  
}
