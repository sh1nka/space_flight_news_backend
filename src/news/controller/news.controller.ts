import { Controller, Get } from '@nestjs/common';

@Controller('')
export class ControllerNews {
  @Get('/')
  indexMessage(): string {
    return 'Fullstack Challenge 2021 🏅 - Space Flight News';
  }
}
