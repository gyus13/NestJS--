import {Controller, Get, HttpException, Param, UseFilters} from '@nestjs/common';
import { AppService } from './app.service';
import {CatsService} from "./cats/cats.service";
import {HttpExceptionFilter} from "./http-exception.filter";

@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly catsService: CatsService,) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getHello(): string {
    throw new HttpException('api broken', 401)
    return this.catsService.hiCatservice();
  }
}
