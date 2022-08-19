import { Injectable, HttpException} from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CATS } from './cats.mock';

@Injectable()
export class CatsService {
    private cats= CATS;
    public getCats()
    {
        return this.cats;
    }
    public  postCats(cats)
    { 
        return this.cats.push(cats);

    }
    public  getCatsById(id): Promise<any>{
        //const catsId = Number(id);
        return new Promise((resolve) =>{
    
        const cats= this.cats.find((cats) => cats.id);
        if(!cats)
        {
            throw new HttpException('not found', 404);
         }
        return resolve(this.cats);
        });
    }
    public  deleteCatsById(id): Promise<any>{
       // const catsId = Number(id);
        cats:Number;
        return new Promise((resolve) =>
    {
        const index = this.cats.findIndex((cats) => cats.id);
        if(index== -1)
        {
            throw new Error('not NotFoundError');
            
        }
        this.cats.splice(index, 1);
        return resolve(this.cats);
    });
        
    }
    public  putCatsById(id, propertyName:string, propertyValue:string): Promise<any>{
       // const catsId = Number(id);
        return new Promise((resolve) =>
    {
        const index = this.cats.findIndex((cats) => cats.id)
        if(index== -1)
        {
            throw new Error('not NotFoundError');
            
        }
        this.cats[index][propertyName] = propertyValue;
        return resolve(this.cats);
    });
    }
}

