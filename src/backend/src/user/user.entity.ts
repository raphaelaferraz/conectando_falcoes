// Importa decoradores do typeorm
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Entidade de usuário do banco de dados
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 300})
    role: string

    @Column('int')
    roleID: number

    @Column()
    email: string

    @Column()
    password: string

}