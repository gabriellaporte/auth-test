import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthUser } from '../shared/database/infra/entities';
import { AuthUserRepository } from './infra/repository';
import { FindAuthUserUseCase } from './application/usecase';
import { AUTH_USER_REPOSITORY_INTERFACE } from './domain/repository';
import { AuthController } from './presentation/controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './infra/strategy/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthUser]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [
    {
      provide: AUTH_USER_REPOSITORY_INTERFACE,
      useClass: AuthUserRepository,
    },
    FindAuthUserUseCase,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [FindAuthUserUseCase],
})
export class AuthModule {}
