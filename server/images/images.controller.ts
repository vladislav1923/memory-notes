import {Controller, Get, HttpException, HttpStatus, Query} from '@nestjs/common';
import {ImagesService} from './images.service';

@Controller('images')
export class ImagesController {

  private readonly imagesService: ImagesService;

  constructor(imagesService: ImagesService) {
    this.imagesService = imagesService;
  }

  @Get()
  public search(@Query('query') query: string): string | void {
    if (!query) {
      throw new HttpException('Query param not found', HttpStatus.BAD_REQUEST);
    }

    this.imagesService.getImagesFromGoogleSearch(query);
  }
}
