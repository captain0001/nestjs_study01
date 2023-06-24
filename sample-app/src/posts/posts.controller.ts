import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostType } from './posts.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }
}
