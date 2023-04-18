import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid'

export const CAR_SEED : Car[] = [
    {
        id: uuid(),
        brand : 'Toyoya',
        model:'Corolla'
    },
    {
        id: uuid(),
        brand : 'Volkswagen',
        model:'Gol'
    },
    {
        id: uuid(),
        brand : 'Audi',
        model:'A4'
    }
]