import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as expressHanlder from 'express-handlebars';
import { printName } from './hbs/helpers';
import * as hbsUtils from 'hbs-utils';
import * as hbs from 'hbs';
import session from 'express-session';


async function bootstrap() {

const app = await NestFactory.create<NestExpressApplication>(
AppModule,
);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));

  app.setViewEngine('hbs');

  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
    })
  )

  app.use(function (req, res, next) {
      res.locals.session = req.session;
      next();
  });


  await app.listen(3000);
}
bootstrap();
