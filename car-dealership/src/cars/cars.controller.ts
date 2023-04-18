import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create.cat.dto';
import { UpdateCarDto } from './dto/upodate.cat.dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly carService : CarsService){
    }

    @Get()
    getCars (){
        return this.carService.findAll()
    }  
    
    @Get(':id')
    getCarById(@Param('id',ParseUUIDPipe) id : string){

        const selectedCar = this.carService.findById(id)
        return selectedCar
    } 

    @Post()
    //@UsePipes(ValidationPipe)
    createCar(@Body() createCarDto : CreateCarDto) {

        return this.carService.createCar(createCarDto)
    }

    @Patch(':id')
    updateCar(@Body() updateCarDto : UpdateCarDto, @Param('id',ParseUUIDPipe) id:string) {
        return this.carService.update(id,updateCarDto)
    }

    @Delete(':id')
    deleteCar( @Param('id',ParseUUIDPipe) id:string) {
        return this.carService.delete(id)
    }
 
}
