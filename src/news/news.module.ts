import { Module } from '@nestjs/common';
import { ControllerNews } from './controller/news.controller';

@Module({
  imports: [],
  controllers: [ControllerNews],
  providers: [],
})
export class NewsModule {}
