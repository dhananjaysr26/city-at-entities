import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_favorite_characters')
export class UserFavoriteCharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  character_id: number;

  @Column({ type: 'int' })
  userId: number;

  @Column('jsonb', { nullable: true })
  info: Record<string, any>;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'eventSlug', referencedColumnName: 'id' })
  user: User;
}
