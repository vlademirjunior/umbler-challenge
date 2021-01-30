import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm';

@Entity('domains')
export default class Domain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ip_address: string;

  @Column()
  whois: string;

  @Column()
  web_hosting: string;

  @Column()
  time_to_live: number;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
}