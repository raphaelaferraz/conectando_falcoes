// Módulo de categorias

import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
    providers: [CategoryService],
    exports: [CategoryService],
    controllers: [CategoryController]
})
export class CategoryModule {}
