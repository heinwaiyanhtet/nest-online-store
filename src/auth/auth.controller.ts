import { Body, Controller, Get, Post, Redirect, Render, Req, Res } from "@nestjs/common";
import { response } from "express";
import { request } from "http";
import { User } from "src/models/user.entity";
import { UsersService } from "src/models/users.service";


@Controller('/auth')
export class AuthController{
    constructor(private readonly userService : UsersService) {}

    @Get('/login')
    @Render('auth/login')
    login(){
        const viewData = [];
        viewData['title'] = 'User Login - Online Store';
        viewData['subtitle'] = 'User Login';
        return{
            viewData : viewData,
        }
    }

    // @Post('/connect')
    // async connect(@Body() body,@Req() request,@Res() response){

    //     const email = body.email;
    //     const pass = body.password;



    // }


    @Get('/register')
    @Render('auth/register')
    register(){
        const viewData = [];
        viewData['title'] = 'User Register - Online Store';
        viewData['subtitle'] = 'User Register';
        return {
            viewData : viewData,
        };
    }

    @Post('/store')
    @Redirect('/')
    async store(@Body() body) {
        const newUser = new User();
        newUser.setName(body.name);
        newUser.setPassword(body.password);
        newUser.setEmail(body.email);
        newUser.setRole('client');
        newUser.setBalance(1000);
        await this.userService.createOrUpdate(newUser);
    }

}