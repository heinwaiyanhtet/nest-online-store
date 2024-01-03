import { Body, Controller, Get, Param, Post, Redirect, Render, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Product } from "src/models/product.entity";
import { ProductsService } from "src/models/product.service";

@Controller('/admin/products')
export class AdminProductsController{

    constructor(private readonly productService: ProductsService)
    {

    }

    @Get('/')
    @Render('admin/products/index')
    async index(){
        const viewData = [];
        viewData['title'] = 'Admin Page - Admin - Online Store';
        viewData['products'] = await this.productService.findAll();
        return {
            viewData : viewData
        }
    }



    @Post('/store')
    @UseInterceptors(FileInterceptor('image',{dest:"./public/uploads"}))
    @Redirect('/admin/products')
    async store(@Body() body,@UploadedFile() file:Express.Multer.File){
        const newProduct = new Product();
        newProduct.setName(body.name);
        newProduct.setDescription(body.description);
        newProduct.setPrice(body.price);
        newProduct.setImage(file.filename);
        await this.productService.createOrUpdate(newProduct);
    }

    @Post('/:id')
    @Redirect('/admin/products')
    remove(@Param('id') id: string) {
    return this.productService.remove(id);
    }
    

}