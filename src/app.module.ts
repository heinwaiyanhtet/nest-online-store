import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import path from 'path';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: 
  [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "test",
      "password": "password",
      "database": "test",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
  ],
  controllers: [AppController,ProductsController],
})
export class AppModule {}
