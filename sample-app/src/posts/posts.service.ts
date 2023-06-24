import { Injectable } from '@nestjs/common';
import { PostType } from './posts.interface';

@Injectable()
export class PostsService {
  posts: PostType[] = [];

  findAll(): PostType[] {
    return this.posts;
  }

  create(post: PostType) {
    this.posts.push(post);
  }
}
