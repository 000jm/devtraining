
import { Module } from '@nestjs/common'
import { createObserveModule } from '@nestjs/observe'
import { AppController } from './app.controller.js'
import { AppService } from './app.service.js'
import { CoursesController } from './courses/courses.controller.js';
import { CoursesService } from './courses/courses.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule()

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService],
})
export class AppModule {}
