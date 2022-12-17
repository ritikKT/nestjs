import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { ArticlesService } from './articles/articles.service';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [FaqModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService, ArticlesService],
})
export class AppModule {}
