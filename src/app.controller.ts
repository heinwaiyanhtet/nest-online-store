import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { title } from 'process';

@Controller()
export class AppController {

  @Get()
  root(@Res() res: Response) {
    return res.render('index', { message: 'Hello world!!' });
  }

  @Get("/about")
  @Render("about")
  about(){

      let viewData = [];
      viewData["description"] = "This is about page ...";
      viewData["author"] = "Developed By Hein Wai Yan Htet";
      let data1 = "About us - Online Store";

      return{
        title : data1,
        subtitle : "About us",
        viewData : viewData
      };


  }



 
}
