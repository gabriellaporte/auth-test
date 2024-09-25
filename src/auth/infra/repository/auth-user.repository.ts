import { AuthUser } from 'src/shared/database/infra/entities';
import { AuthUserRepositoryInterface } from '../../domain/repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class AuthUserRepository implements AuthUserRepositoryInterface {
  constructor(
    @InjectRepository(AuthUser)
    private readonly repository: Repository<AuthUser>,
  ) {}

  async findById(id: number): Promise<AuthUser | null> {
    return await this.repository.findOneBy({ id });
  }
}
