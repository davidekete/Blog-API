import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [BlogsModule, MongooseModule.forRoot(process.env.COMPASS_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
