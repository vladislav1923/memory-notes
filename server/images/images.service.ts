import {Injectable} from '@nestjs/common';
import {ConfigService} from '../config/config.service';
import * as GoogleImages from 'image-search-google';

@Injectable()
export class ImagesService {

  private readonly client;
  private readonly configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
    this.client = new GoogleImages(this.configService.getGoogleCseId(), this.configService.getGoogleApiKey());
  }

  public async getImagesFromGoogleSearch(query: string) {
      this.client.search(query, {page: 1, safe: 'off'})
        .then((response) => {
        console.log(response);
      }).catch((e) => {
        console.log(e);
      });
  }

}
