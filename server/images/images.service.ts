import {Injectable} from '@nestjs/common';
import {ConfigService} from '../config/config.service';
import * as GoogleImages from 'google-search-results-nodejs';

@Injectable()
export class ImagesService {

  private readonly client;
  private readonly configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;
    this.client = new GoogleImages.GoogleSearchResults(this.configService.getGoogleApiKey());
  }

  public async getImagesFromGoogleSearch(query: string) {
      this.client.json({
        q: query,
      }, (result) => {
        console.log(result);
      });
  }

}
