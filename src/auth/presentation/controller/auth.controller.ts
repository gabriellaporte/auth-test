import { Controller, Get, UseGuards } from '@nestjs/common';
import {
  User,
  UserDecorator,
} from '../../../shared/decorators/infra/user/user.decorator';
import { JwtGuard } from '../../infra/guard/jwt.guard';

@UseGuards(JwtGuard)
@Controller('auth')
export class AuthController {
  @Get('')
  index(@User() user: UserDecorator.Result) {
    return { message: 'Teste', data: user };
  }
}
