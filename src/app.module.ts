import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import path from 'path';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from './models/product.entity';
import { ProductsService } from './models/product.service';
import { DataSource } from 'typeorm';

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
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [AppController,ProductsController],
  providers:[ProductsService]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
