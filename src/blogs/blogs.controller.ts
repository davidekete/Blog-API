import {
  Controller,
  Body,
  Delete,
  Get,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { BlogsInterface } from './blogs.interface';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly service: BlogsService) {}

  @Post()
  async createBlog(
    @Body()
    blog: BlogsInterface,
  ) {
    return await this.service.createBlog(blog);
  }

  @Get()
  async getAllBlogs() {
    return await this.service.getAllBlogs();
  }

  @Get(':id')
  async getBlog(@Param('id') id: string) {
    return await this.service.getBlog(id);
  }
}
