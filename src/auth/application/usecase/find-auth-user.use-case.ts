import {
  AUTH_USER_REPOSITORY_INTERFACE,
  AuthUserRepositoryInterface,
} from '../../domain/repository';
import { AuthUser } from '../../../shared/database/infra/entities';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAuthUserUseCase {
  constructor(
    @Inject(AUTH_USER_REPOSITORY_INTERFACE)
    private readonly authUserRepository: AuthUserRepositoryInterface,
  ) {}

  async execute(id: number): Promise<FindAuthUserUseCase.Result> {
    return await this.authUserRepository.findById(id);
  }
}

export namespace FindAuthUserUseCase {
  export type Result = AuthUser | null;
}
