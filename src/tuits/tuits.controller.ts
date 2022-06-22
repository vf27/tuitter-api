import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly TuitService: TuitsService) {
    //con el private me aseguro de que el servicio sea consumido dentro de la clase
    //con el readonly me aseguro q el contenido con la dependencia no sea modificado
  }
  @Get()
  getTuits(@Query() filterQuery): string {
    const { searchTerm, orderBy } = filterQuery;
    return `All ${searchTerm} tuits ordered by ${orderBy}`;
  }
  @Get(':id') // tuits/1
  getTuit(@Param() id: string): string {
    // simula la busqueda de un tuit dado el id
    return `Your tuit id is: ${id}`;
  }
  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message: string) {
    return `Your tuit was: ${message}`;
  }
  @Patch(':id')
  updateTuit(@Param(':id') id: string, @Body() tuit): string {
    return `El ${id} del tuit fue actualizado`;
  }
  @Delete(':id')
  deleteTuit(@Param(':id') id: string): string {
    return `El tuit con id ${id} fue eliminado`;
  }
}
