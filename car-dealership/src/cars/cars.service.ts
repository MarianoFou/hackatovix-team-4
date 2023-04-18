import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto } from './dto/create.cat.dto';
import { UpdateCarDto } from './dto/upodate.cat.dto';

@Injectable()
export class CarsService {

private cars : Car []= [
    // {
    //     id: uuid(),
    //     brand : 'Toyoya',
    //     model:'Corolla'
    // },
]

    findAll(){
        return this.cars
    }
    findById( id: string ){
        const selectedCar = this.cars.find(car => car.id === id)

        if(!selectedCar){
            throw new NotFoundException(`El car con id ${id} no existe`)
        }
        return selectedCar
    }

    createCar ( crearCarDto : CreateCarDto){

        let newCar : Car  =  {
            id: uuid(),
            ...crearCarDto
        }

        this.cars.push(newCar)

        return newCar
    }

    update(id : string, updateCarDto : UpdateCarDto){

        let carUpdated = this.findById(id)

         this.cars = this.cars.map(car => {
            if (car.id === id) {
                carUpdated = {
                    ... car,
                    ... updateCarDto,
                    id
                } 
                return carUpdated
            }  
            return car
        })

        return carUpdated
    }

    delete(id : string){

        this.findById(id)
        this.cars = this.cars.filter(car=> car.id !=id)
        return  `el auto ${id} fue eliminado exitosamente` 
    }

    fillCarsWithSeedData ( cars : Car[]){
        this.cars = cars
    }
}
