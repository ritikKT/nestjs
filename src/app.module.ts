import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { ArticlesService } from './articles/articles.service';
import { LoggerMiddleware } from './logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [ ArticlesModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, ArticlesService,
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  }]
})
export class AppModule {
configure(consumer: MiddlewareConsumer) {
    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes('articles');
  }
}
