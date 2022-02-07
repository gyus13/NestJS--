import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    hiCatservice() {
        return "Hi Cats!";
    }
}
