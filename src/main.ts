import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'express-handlebars';
import { printName } from './hbs/helpers';

async function bootstrap() {

const app = await NestFactory.create<NestExpressApplication>(
AppModule,
);

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));



    app.engine(
        'hbs',
        hbs({
          extname: 'hbs',
          defaultLayout: 'layout_main',
          layoutsDir: join(__dirname, '..', 'views', 'layouts'),
          partialsDir: join(__dirname, '..', 'views', 'partials'),
          helpers: { printName },
        }),
      );


      
    app.setViewEngine('hbs');

await app.listen(3000);
}
bootstrap();
