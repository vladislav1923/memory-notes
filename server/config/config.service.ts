import * as fs from 'fs';

export class ConfigService {

  private readonly configPath: string = './config.json';
  private readonly config: any;

  constructor() {
    this.config = this.setConfig(this.configPath);
  }

  public getGoogleApiKey(): string {
    return this.config.customSearchApi.apiKey;
  }

  public getGoogleCseId(): string {
    return this.config.customSearchApi.cseId;
  }

  private setConfig(configPath: string): any {
    const fileAsBuffer = fs.readFileSync(configPath);
    const fileAsString = Buffer.from(fileAsBuffer).toString();

    return JSON.parse(fileAsString);
  }
}
