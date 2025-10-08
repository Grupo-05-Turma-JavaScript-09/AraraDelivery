import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './produto/produto.module';
import { Produto } from './produto/entities/produto.entity';

// conexao com o banco de dados atraves de TypeORM
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_arara_delivery',
      entities: [Produto],
      synchronize: true,
      // logging: true, //opcional
    }),
    ProdutoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
