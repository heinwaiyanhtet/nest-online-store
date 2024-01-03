import { Controller, Get, Render } from "@nestjs/common";
import { ProductsService } from "src/models/product.service";


@Controller('admin')
export class AdminController{
    
    constructor(private readonly productService: ProductsService)
    {

    }

    @Get('/')
    @Render('admin/index')
    async index(){
        const viewData = [];
        viewData['title'] = 'Admin Page - Admin - Online Store';
        return{
            viewData: viewData
        }
    }



}