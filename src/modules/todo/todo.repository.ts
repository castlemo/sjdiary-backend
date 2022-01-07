import { EntityRepository, Repository } from 'typeorm';

import { TodoEntity } from 'src/entities';

@EntityRepository(TodoEntity)
export class TodoRepository extends Repository<TodoEntity> {}
