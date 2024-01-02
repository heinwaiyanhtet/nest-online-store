import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { ProductsService } from './models/product.service';
import { response } from 'express';

@Controller('/products')
export class ProductsController
{

    constructor(private readonly productService : ProductsService) {}

    @Get('/')
    @Render('products/index')
    async index(){        
        const viewData = [];
        viewData['title'] = 'Products - Online Store';
        viewData['subtitle'] = 'List of products';
        viewData['products'] = await this.productService.findAll();
        return {
            viewData : viewData,
        }
    }


    @Get('/:id')
    async show(@Param() params, @Res() response) {

        const product = await this.productService.findOne(params.id);

        if (product === undefined) {
        return response.redirect('/products');
        }
        const viewData = [];
        viewData['title'] = product.getName() + ' - Online Store';
        viewData['subtitle'] = product.getName() + ' - Product Information';
        viewData['product'] = product;
        return response.render('products/show', { viewData: viewData });
    }

}