import {Module} from '@nestjs/common';
import {ServerController} from './server.controller';
import {ImagesModule} from './images/images.module';

@Module({
  imports: [
    ImagesModule
  ],
  controllers: [
    ServerController
  ]
})
export class ServerModule {}
