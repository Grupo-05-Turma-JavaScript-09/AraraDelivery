import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { AuthModule } from './auth/auth.module';

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
      entities: [Usuario],
      synchronize: true,
      // logging: true, //opcional
    }),
    UsuarioModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
