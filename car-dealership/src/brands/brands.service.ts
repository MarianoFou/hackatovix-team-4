import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands : Brand[] = [
    // {
    //   id : uuid(),
    //   name : "Toyota",
    //   createdAt : new Date().getTime()
    // }
  ]
  create(createBrandDto: CreateBrandDto) {

    const brand : Brand = {
      name: createBrandDto.name,
      id: uuid(),
      createdAt: new Date().getTime()
    }
    this.brands.push(brand)
    return brand
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {

    const brand = this.brands.find(brand => brand.id === id)
    if (!brand)
      throw new NotFoundException(`Brand with id ${id} not found`)
    return brand
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandUpdated = this.findOne(id)

    this.brands = this.brands.map(brand => {
       if (brand.id === id) {
        brandUpdated .createdAt = new Date().getTime()
           brandUpdated = {
               ... brand,
               ... updateBrandDto,
               id
           } 
           return brandUpdated
       }  
       return brand
   })

   return brandUpdated  }

  remove(id: string) {
    this.findOne(id)
    this.brands = this.brands.filter(brand =>{brand.id != id})
    return  `La brand ${id} fue eliminado exitosamente`   }

  fillBrandssWithSeedData ( brands : Brand[]){
    this.brands =  brands
  }
}
