// Importa o decorador do pacote @nestjs/common, entidade de professor e DTO de professor
import { Injectable } from "@nestjs/common";
import { TeacherEntity } from "./teacher.entity";
import { TeacherDTO } from "./teacher.dto";

@Injectable()
export class TeacherService {

  // Array de professores pré-existentes
  private teachers: TeacherEntity[] = [
    {
      id: 1,
      name: "Matheus Rocha",
      workshops: [],
      ongs: [],
      dateOfBirth: "1990-05-15",
      gender: "Masculino",
      address: "rua maça verde, 00",
      state: "São Paulo",
      city: "São Paulo",
      email: "matheusrocha@example.com",
      phoneNumber: "911111111",
      rg: "123456770",
      cpf: "12345678901"
    },
    {
      id: 2,
      name: "Julia Silva",
      workshops: [],
      ongs: [],
      dateOfBirth: "1985-08-20",
      gender: "Feminino",
      address: "rua banana, 99",
      state: "São Paulo",
      city: "São Paulo",
      email: "juliasilva@example.com",
      phoneNumber: "966666666",
      rg: "765432184",
      cpf: "98765432101"
    }
  ];

  /**
   * Lista todos os professores cadastrados. Este método não recebe parâmetros e retorna uma lista de todos os professores
   * atualmente registrados no sistema. A lista inclui todas as informações de cada professor, como identificador, nome,
   * qualificações e outras informações relevantes.
   * 
   * @returns {Promise<TeacherEntity[]>} Uma promessa que resolve para um array de entidades `TeacherEntity`,
   * representando todos os professores cadastrados.
  */
  async listAll(): Promise<TeacherEntity[]> {
    return this.teachers;
  }

  /**
   * Encontra um professor específico pelo seu ID. Este método aceita um identificador numérico como parâmetro e
   * realiza uma busca no conjunto de professores cadastrados para encontrar um professor que corresponda ao ID fornecido.
   * 
   * @param {number} id - O ID do professor a ser encontrado.
   * 
   * @returns {Promise<TeacherEntity | undefined>} Uma promessa que resolve para a entidade `TeacherEntity` do professor
   * encontrado. Se nenhum professor com o ID especificado for encontrado, a promessa resolve para `undefined`.
  */
  async findById(id: number): Promise<TeacherEntity | undefined> {
    return this.teachers.find(teacher => teacher.id === id);
  }

  /**
   * Registra um novo professor com base nos dados fornecidos. Este método aceita um objeto `TeacherDTO` contendo
   * as informações necessárias para o cadastro de um professor, incluindo nome, qualificações, áreas de especialização,
   * entre outros. Um novo `id` é gerado automaticamente para o professor com base no número de professores já registrados.
   * 
   * Após a criação, o professor é adicionado a um array interno que simula um banco de dados de professores. O método
   * então retorna o objeto `TeacherEntity` do professor recém-registrado, incluindo seu `id` gerado.
   * 
   * @param {TeacherDTO} dataTeacher - O objeto contendo os dados do professor a ser registrado.
   * 
   * @returns {Promise<TeacherEntity>} Uma promessa que resolve para a entidade `TeacherEntity` do professor
   * recém-registrado, incluindo seu identificador único e todas as informações fornecidas durante o registro.
  */
  async registerTeacher(dataTeacher: TeacherDTO): Promise<TeacherEntity> {
    const newTeacher: TeacherEntity = { id: this.teachers.length + 1, ...dataTeacher };
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}
