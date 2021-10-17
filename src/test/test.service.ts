import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../user/user.entity';

@Injectable()
export class TestService {
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;

  async testRawQuery() {
    const result = await this.userRepo.query(`SELECT * from migrations`, []);
    console.log(result);

    console.log(result[0].id);
    console.log(result[0].timestamp);
    console.log(result[0].name);
    return true;
  }
}
