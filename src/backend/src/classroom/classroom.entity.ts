// Importa a entidade de estudante
import { StudentEntity } from "src/student/student.entity";

// Entidade de Turma no banco de dados
export class ClassroomEntity {
  idClass: number;
  name: string;
  day: number;
  startTime: string;
  endTime: string;
  professor: string;
  student: StudentEntity[];
}
