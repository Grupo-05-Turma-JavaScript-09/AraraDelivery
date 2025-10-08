import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

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
      entities: [],
      synchronize: true,
      // logging: true, //opcional
    }),
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
