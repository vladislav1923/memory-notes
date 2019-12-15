import {NestFactory} from '@nestjs/core';
import {ExpressAdapter} from '@nestjs/platform-express';
import {ServerModule} from './server.module';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';
import * as http from 'http';
import * as https from 'https';

async function bootstrap() {
  const env = process.env.NODE_ENV || 'dev';
  let httpsOptions = {};

  if (env === 'production') {
    httpsOptions = {
      key: fs.readFileSync('./secrets/private-key.pem'),
      cert: fs.readFileSync('./secrets/public-certificate.pem'),
    };
  }
  
  const server = express();
  const app = await NestFactory.create(
    ServerModule,
    new ExpressAdapter(server),
  );
  app.use(express.static(path.join(__dirname,  'public')));
  app.use(express.static(__dirname, { dotfiles: 'allow' } ));
  await app.init();
  
  http.createServer(server).listen(3000);
  https.createServer(httpsOptions, server).listen(443);
}
bootstrap();
