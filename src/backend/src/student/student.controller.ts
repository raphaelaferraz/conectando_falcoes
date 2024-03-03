// Importe de decoradores, entidade de estudante e DTO de estudante
import { Controller, Post, Body } from "@nestjs/common";
import { StudentService } from "./student.service";
import { StudentDTO } from "./student.dto";

@Controller('/students')
export class StudentController {

  constructor(private studentService: StudentService){}

  /**
   * Registra um novo aluno com os dados fornecidos. Este método recebe os dados de um aluno
   * através do corpo da requisição e utiliza o `StudentService` para registrar o aluno no sistema.
   * Os dados do aluno são fornecidos como um objeto `StudentDTO`, que inclui todas as informações
   * necessárias para o cadastro de um novo aluno.
   * 
   * Este endpoint é acessado através de uma solicitação POST para '/students', e o corpo da requisição
   * deve conter os dados do aluno conforme definido pelo `StudentDTO`.
   * 
   * @param {StudentDTO} dataStudent - O objeto contendo os dados do novo aluno a ser registrado.
   * 
   * @returns {Promise<StudentEntity>} Uma promessa que resolve para a entidade `StudentEntity` do aluno
   * recém-registrado. Esta entidade inclui todos os dados do aluno, incluindo um identificador único gerado
   * pelo sistema.
  */
  @Post()
  async registerStudent(@Body() dataStudent: StudentDTO) {
    const registeredStudent = await this.studentService.register(dataStudent);
    return registeredStudent;
  }
}

