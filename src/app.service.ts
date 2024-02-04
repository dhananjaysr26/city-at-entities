import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '[City At Entities]: I am Running!';
  }
}
