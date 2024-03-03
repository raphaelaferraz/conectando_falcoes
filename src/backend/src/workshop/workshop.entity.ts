// Importa a entidade de turma e de categoria
import { ClassroomEntity } from "src/classroom/classroom.entity";
import { CategoryEntity } from "src/category/category.entity";

// Entidade de Oficina no banco de dados
export class WorkshopEntity {
  id: number;
  idOng: number;
  nameOng: string;
  name: string;
  category: CategoryEntity[];
  classroom: ClassroomEntity[];
}