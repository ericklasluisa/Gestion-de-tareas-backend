import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.usuarioService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  async signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ token: string; user: { id: number; username: string } }> {
    return this.usuarioService.signIn(authCredentialsDto);
  }
}
