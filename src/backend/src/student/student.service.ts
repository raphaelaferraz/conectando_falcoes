import { Injectable } from "@nestjs/common";
import { StudentEntity } from "./student.entity";
import { StudentDTO } from "./student.dto";

@Injectable()
export class StudentService {

  // Array de estudantes pré-existentes
  private students: StudentEntity[] = [
    {
      id: 1,
      name: 'João',
      idWorkshop: null,
      idClass: null,
      dateOfBirth: '03-10-2011',
      gender: 'Masculino',
      rg: '123456789',
      cpf: '123456789',
      maritalStatus: 'Solteiro',
      raceEthnicity: 'Pardo',
      address: 'Rua 1, nº 1, Bairro 1',
      state: 'SP',
      city: 'São Paulo',
      phoneNumber: '123456789',
      landlineNumber: '123456789',
      email: 'joao@example.com'
    },
    {
      id: 2,
      name: 'Roberta',
      idWorkshop: null,
      idClass: null,
      dateOfBirth: '13-01-2004',
      gender: 'Feminino',
      rg: '123456789',
      cpf: '123456789',
      maritalStatus: 'Solteiro',
      raceEthnicity: 'Negro',
      address: 'Rua 5, nº 2, Bairro 2',
      state: 'SP',
      city: 'São Paulo',
      phoneNumber: '123456789',
      landlineNumber: '123456789',
      email: 'maria@example.com'
    }
  ];

  /**
   * Registra um novo estudante com base nos dados fornecidos. Este método aceita um objeto `StudentDTO`
   * que contém todas as informações necessárias para o cadastro de um estudante, incluindo nome, data de nascimento,
   * gênero, documentos pessoais (RG, CPF), estado civil, etnia, endereço, contato (telefone, email) e outras informações
   * relevantes. Um novo `id` é gerado automaticamente para o estudante com base no número de estudantes já registrados.
   * 
   * Após a criação, o estudante é adicionado a um array interno que simula um banco de dados de estudantes. O método
   * então retorna o objeto `StudentEntity` do estudante recém-registrado, incluindo seu `id` gerado.
   * 
   * @param {StudentDTO} dataStudent - O objeto contendo os dados do estudante a ser registrado.
   * 
   * @returns {Promise<StudentEntity>} Uma promessa que resolve para a entidade `StudentEntity` do estudante
   * recém-registrado, incluindo seu identificador único e todas as informações fornecidas.
  */
  async register(dataStudent: StudentDTO): Promise<StudentEntity> {
    const newStudent: StudentEntity = { id: this.students.length + 1, ...dataStudent };
    this.students.push(newStudent);
    return newStudent;
  }
}
