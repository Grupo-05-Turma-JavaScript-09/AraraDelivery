import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  public id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  public nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false, unique: true })
  @ApiProperty({ example: 'email@email.com.br' })
  public usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  public senha: string;

  @Column({ length: 5000, nullable: true })
  @ApiProperty({ example: 'https://meusite.com/imagens/foto.jpg' })
  public foto?: string;

  @OneToMany(() => Produto, (produto) => produto.usuario)
  produtos: Produto[];
}
