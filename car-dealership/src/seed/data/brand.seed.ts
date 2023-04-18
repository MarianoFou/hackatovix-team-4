import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid'

export const BRAND_SEED : Brand[] = [
    
    {
      id : uuid(),
      name : "Toyota",
      createdAt : new Date().getTime()
    },
    {
      id : uuid(),
      name : "Volkswagens",
      createdAt : new Date().getTime()
    },
    {
      id : uuid(),
      name : "Audi",
      createdAt : new Date().getTime()
    }
] 