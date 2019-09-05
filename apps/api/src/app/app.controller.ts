import { Controller, Get, Header } from '@nestjs/common';

import { Message } from '@get-things-done/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('message')
  @Header('Access-Control-Allow-Origin', '*')
  getData(): Message {
    return this.appService.getData();
  }
}
