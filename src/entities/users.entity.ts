import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  name: string;

  @Column({ length: 50, unique: true, nullable: false })
  email: string;

  @Column({ length: 50, nullable: false })
  password: string;

  @Column({ length: 10, nullable: false })
  phoneCountryCode: string;

  @Column({ length: 25, unique: true, nullable: false })
  phoneNumber: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
}
