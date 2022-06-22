import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsController } from './tuits/tuits.controller';
import { Service } from './.service';
import { TuitsService } from './tuits/tuits.service';

@Module({
  imports: [],
  controllers: [AppController, TuitsController],
  providers: [AppService, Service, TuitsService],
})
export class AppModule {}
