import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from './schemas/blogs.schema';
import { BlogsInterface } from './blogs.interface';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name)
    private blogModel: Model<BlogDocument>,
  ) {}

  async createBlog(blog: BlogsInterface): Promise<Blog> {
    return await new this.blogModel({
      ...blog,
      dateCreated: new Date(),
    }).save();
  }

  async getAllBlogs(): Promise<Blog[]> {
    return await this.blogModel.find().exec();
  }

  async getBlog(id: string): Promise<Blog> {
    return await this.blogModel.findById(id);
  }

  async updateBlog(id: string, body: BlogsInterface): Promise<Blog> {
    return await this.blogModel.findByIdAndUpdate(id, body);
  }

  async deleteBlog(id: string): Promise<void> {
    return await this.blogModel.findByIdAndDelete(id);
  }
}
