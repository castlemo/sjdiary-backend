import { EntityRepository, Repository } from 'typeorm';

import { TodoEntity } from '../entities';

@EntityRepository(TodoEntity)
export class TodoRepository extends Repository<TodoEntity> {}
