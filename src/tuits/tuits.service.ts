import { Injectable } from '@nestjs/common';
import { Tuit } from './tuit.entity';

//encargado de manejar la informacion y aplicar la logica de los tuits y proveedor principal del tuit controller

//el constructor va a recibir el tuit service como proovedor
@Injectable()
export class TuitsService {
  private tuits: Tuit[] = [
    {
      id: '1',
      message: 'Hello world from Nest.js',
    },
  ];
}
