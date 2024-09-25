import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthUser } from '../../../database/infra/entities';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext): UserDecorator.Result => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export namespace UserDecorator {
  export type Result = AuthUser | null;
}
