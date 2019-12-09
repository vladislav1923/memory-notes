import {Module} from '@nestjs/common';
import {ImagesController} from './images.controller';
import {ImagesService} from './images.service';
import {ConfigModule} from '../config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
