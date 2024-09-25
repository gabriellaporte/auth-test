import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth_user')
export class AuthUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'datetime', nullable: true })
  last_login: Date | null;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  is_superuser: boolean;

  @Column({ type: 'varchar', length: 150, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 30 })
  first_name: string;

  @Column({ type: 'varchar', length: 30 })
  last_name: string;

  @Column({ type: 'varchar', length: 254, unique: true })
  email: string;

  @Column({ type: 'tinyint', width: 1, default: 0 })
  is_staff: boolean;

  @Column({ type: 'tinyint', width: 1, default: 1 })
  is_active: boolean;

  @Column({ type: 'datetime' })
  date_joined: Date;
}
