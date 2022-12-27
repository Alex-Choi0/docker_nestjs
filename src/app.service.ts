// src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
   // 수정된 응답값
   return 'I Like docker';
   // 기존 응답값
   // return 'Hello World!';
  }
}
