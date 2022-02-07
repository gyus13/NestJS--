import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {CatsService} from "./cats/cats.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly catsService: CatsService,) {}

  @Get()
  getHello(@Param() param): string {
    console.log(param);
    return this.catsService.hiCatservice();
  }
}
