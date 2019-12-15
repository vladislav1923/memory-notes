import {Controller, Get} from '@nestjs/common';

@Controller()
export class ServerController {

  @Get()
  public getWeb(): string {
    return 'Hello w...lad!';
  }
}
