// Módulo de turma

import { Module } from '@nestjs/common';
import { ClassroomService } from './classroom.service';

@Module({
  providers: [ClassroomService]
})
export class ClassroomModule {}
