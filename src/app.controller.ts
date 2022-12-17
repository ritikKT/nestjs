import { Controller, Get, HostParam, Ip, Req } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(@Req() Ip): string {
  //   console.log(Ip)
  //   return this.appService.getHello();
  // }
  @Get()
  findAll(): Observable<any[]> {
    return of([]);
  }
}
