import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CAR_SEED } from './data/car.seed';
import { BRAND_SEED } from './data/brand.seed';


@Injectable()
export class SeedService {
  
  constructor(
     private carService   : CarsService,
     private brandService : BrandsService
  ){}

  populateDB(){
    this.carService.fillCarsWithSeedData(CAR_SEED)
    this.brandService.fillBrandssWithSeedData(BRAND_SEED)
    return 'Seed runned succesfully'
  }

}
