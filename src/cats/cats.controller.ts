import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { query } from 'express';
import { Catsdto } from './cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')



export class CatsController {
    constructor(private catsService: CatsService){} 
    @Get()
    public getCats(){
        return this.catsService.getCats();
    }
    @Post()
    public async postCats(@Body() cats: Catsdto)
    {
return this.catsService.postCats(cats);
    }
    @Get(':id')
    public async getCatsById(@Param ('id') id:number)
    {
        return this.catsService.getCatsById(id);

    }
    @Delete(':id')
    public  async deleteCatsById(@Param ('id')id:number)
    {
this.catsService.deleteCatsById(id);
    }
    @Put(':id')
    public async putCatsById(@Param('id') id:number, @Query() query)
    {
        const propertyName= query.propertyName;
        const propertyValue= query.propertyValue;
return this.catsService.putCatsById(id, propertyName, propertyValue);
    }
}
