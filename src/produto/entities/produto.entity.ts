import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_produtos"})
export class Produto {
  
  @PrimaryGeneratedColumn()
  id: number;

  
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  preco: number;


  @Column({ length: 300, nullable: false })
  descricao: string;

  @Column({ type: 'text', nullable: true })
  foto: string;

  



 
  

  
}

}