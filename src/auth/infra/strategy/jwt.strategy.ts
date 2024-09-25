import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { FindAuthUserUseCase } from '../../application/usecase';
import { TokenPayload } from '../../domain/value-object/token-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    readonly configService: ConfigService,
    @Inject(FindAuthUserUseCase)
    private findAuthUser: FindAuthUserUseCase,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    const payloadData = TokenPayload.fromObject(payload);
    const currentUser = await this.findAuthUser.execute(
      payloadData.getUserId(),
    );

    if (!currentUser) {
      throw new UnauthorizedException();
    }

    return currentUser;
  }
}
