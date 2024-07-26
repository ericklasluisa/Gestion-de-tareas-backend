import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'G7Evaluacion',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  providers: [UsuarioService, JwtStrategy],
  controllers: [UsuarioController],
  exports: [JwtStrategy, PassportModule],
})
export class UsuarioModule {}
