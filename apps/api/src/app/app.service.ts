import { Injectable } from '@nestjs/common';
import { Message } from '@get-things-done/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
