import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Index()
	@Column()
	account: string;
	
	@Column()
	userName: string;
	  
	@Column()
	password: string;

	@Column()
	role: string;

	@Column({ default: true })
	isActive: boolean;
}
