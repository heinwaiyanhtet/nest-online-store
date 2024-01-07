import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { title } from 'process';

@Controller()

export class AppController {

  @Get("/")
  @Render('index')
  index(){
    return {
        title : "Home Page - Online Store"
    }
  }
  

  @Get("/about")
  @Render("about")
  about(){
      let viewData = [];
      viewData['title'] = "About us - Online Store";
      viewData["subtitle"] = "About us";
      viewData["description"] = "This is about page ...";
      viewData["author"] = "Developed By Hein Wai Yan Htet";

      return{
        viewData : viewData
      };
  }


 
}
