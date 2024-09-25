import { AuthUser } from '../../../shared/database/infra/entities';

export interface AuthUserRepositoryInterface {
  findById(id: number): Promise<AuthUser | null>;
}

export const AUTH_USER_REPOSITORY_INTERFACE = Symbol(
  'AuthUserRepositoryInterface',
);
