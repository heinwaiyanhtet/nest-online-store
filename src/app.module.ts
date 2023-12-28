import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import path from 'path';

@Module({
  imports: [
  ],
  controllers: [AppController],
})
export class AppModule {}
