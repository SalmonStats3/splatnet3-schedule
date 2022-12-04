import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';
import { mkdir, writeFileSync } from 'fs';
import { exec } from 'child_process';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

async function bootstrap() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  // dayjs.tz.setDefault('Asia/Tokyo');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        // ignoreDecorators: true,
        excludeExtraneousValues: true,
        // exposeDefaultValues: true,
      },
    }),
  );

  const build = path.resolve(process.cwd(), 'docs');
  const options = new DocumentBuilder().setTitle('SplatNet3').build();
  const documents = SwaggerModule.createDocument(app, options);
  const output = path.resolve(build, 'index');
  mkdir(build, { recursive: true }, (_) => {});
  writeFileSync(`${output}.json`, JSON.stringify(documents), {
    encoding: 'utf8',
  });
  exec(`npx redoc-cli build ${output}.json -o ${output}.html`);
  if (process.env.NODE_ENV == 'production') {
    return;
  }
  SwaggerModule.setup('documents', app, documents);
  await app.listen(3000);
}
bootstrap();
