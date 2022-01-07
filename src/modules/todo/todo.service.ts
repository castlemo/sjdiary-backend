import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  @InjectRepository(TodoRepository)
  private readonly todoRepository: TodoRepository;
}
