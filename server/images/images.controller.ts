import {Controller, Get, HttpException, HttpStatus, Query} from '@nestjs/common';
import {ImagesService} from './images.service';

@Controller('images')
export class ImagesController {

  private readonly imagesService: ImagesService;

  constructor(imagesService: ImagesService) {
    this.imagesService = imagesService;
  }

  @Get()
  public async search(@Query('query') query: string): Promise<string | void> {
    console.log(query);

    if (!query) {
      throw new HttpException('Query param not found', HttpStatus.BAD_REQUEST);
    }

    return await this.imagesService.getImagesFromGoogleSearch(query);
  }
}
