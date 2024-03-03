import { Injectable } from "@nestjs/common";
import { WorkshopEntity } from "./workshop.entity";

@Injectable()
export class WorkshopService {

  // Simulação de uma entidade "Workshop" no banco de dados
  private workshops: WorkshopEntity[] = [
    {
      id: 1,
      idOng: 1,
      nameOng: "ONG 1",
      name: "Futebol",
      category:
        [
          {
            id: 1,
            category: 1,
            name: 'Esportes',
            color: '#F5821E'
          }
        ],
      classroom:
        [
          {
            idClass: 1,
            name: "Turma 1",
            day: 1,
            startTime: "08:00",
            endTime: "10:00",
            professor: "João",
            student:
              [
                {
                  id: 1,
                  name: 'João',
                  idWorkshop: 1,
                  idClass: 1,
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
                  email: 'joao@email.com'
                },
                {
                  id: 2,
                  name: 'Maria',
                  idWorkshop: 1,
                  idClass: 1,
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
                  email: 'maria@email.com'
                }
              ]
          },
          {
            idClass: 2,
            name: "Turma 2",
            day: 1,
            startTime: "10:00",
            endTime: "12:00",
            professor: "Marcos",
            student:
              [
                {
                  id: 1,
                  name: 'João',
                  idWorkshop: 1,
                  idClass: 2,
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
                  email: 'joao@email.com'
                },
                {
                  id: 2,
                  name: 'Maria',
                  idWorkshop: 1,
                  idClass: 2,
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
                  email: 'maria@email.com'
                }
              ]
          }
        ]
    },
    {
      id: 2,
      idOng: 1,
      nameOng: "ONG 1",
      name: "Pintura",
      category:
        [
          {
            id: 2,
            category: 2,
            name: 'Arte',
            color: '#F5C630'
          }
        ],
      classroom:
        [
          {
            idClass: 3,
            name: "Turma 1",
            day: 2,
            startTime: "10:00",
            endTime: "12:00",
            professor: "Ana",
            student:
              [
                {
                  id: 1,
                  name: 'Carlos',
                  idWorkshop: 2,
                  idClass: 3,
                  dateOfBirth: '05-05-2000',
                  gender: 'Masculino',
                  rg: '123456789',
                  cpf: '123456789',
                  maritalStatus: 'Solteiro',
                  raceEthnicity: 'Branco',
                  address: 'Rua 2, nº 3, Bairro 3',
                  state: 'SP',
                  city: 'São Paulo',
                  phoneNumber: '123456789',
                  landlineNumber: '123456789',
                  email: 'carlos@email.com'
                }
              ]
          }
        ]
    },
    {
      id: 3,
      idOng: 1,
      nameOng: "ONG 1",
      name: "Administração Financeira",
      category:
        [
          {
            id: 3,
            category: 3,
            name: 'Administração',
            color: '#2F3192'
          }
        ],
      classroom:
        [
          {
            idClass: 4,
            name: "Turma 1",
            day: 3,
            startTime: "14:00",
            endTime: "16:00",
            professor: "Lucas",
            student:
              [
                {
                  id: 1,
                  name: 'Ana',
                  idWorkshop: 3,
                  idClass: 4,
                  dateOfBirth: '12-12-1995',
                  gender: 'Feminino',
                  rg: '123456789',
                  cpf: '123456789',
                  maritalStatus: 'Solteiro',
                  raceEthnicity: 'Branco',
                  address: 'Rua 3, nº 5, Bairro 4',
                  state: 'SP',
                  city: 'São Paulo',
                  phoneNumber: '123456789',
                  landlineNumber: '123456789',
                  email: 'ana@email.com'
                }
              ]
          }
        ]
    },
    {
      id: 4,
      idOng: 1,
      nameOng: "ONG 1",
      name: "Salsa",
      category:
        [
          {
            id: 4,
            category: 4,
            name: 'Dança',
            color: '#EB1C68'
          }
        ],
      classroom:
        [
          {
            idClass: 5,
            name: "Turma 1",
            day: 4,
            startTime: "18:00",
            endTime: "20:00",
            professor: "Maria",
            student:
              [
                {
                  id: 1,
                  name: 'Pedro',
                  idWorkshop: 4,
                  idClass: 5,
                  dateOfBirth: '20-08-2002',
                  gender: 'Masculino',
                  rg: '123456789',
                  cpf: '123456789',
                  maritalStatus: 'Solteiro',
                  raceEthnicity: 'Pardo',
                  address: 'Rua 4, nº 6, Bairro 5',
                  state: 'SP',
                  city: 'São Paulo',
                  phoneNumber: '123456789',
                  landlineNumber: '123456789',
                  email: 'pedro@email.com'
                }
              ]
          }
        ]
    },
    {
      id: 5,
      idOng: 1,
      nameOng: "ONG 1",
      name: "Cozinha Italiana",
      category:
        [
          {
            id: 5,
            category: 5,
            name: 'Culinária',
            color: '#63236F'
          }
        ],
      classroom:
        [
          {
            idClass: 6,
            name: "Turma 1",
            day: 5,
            startTime: "17:00",
            endTime: "19:00",
            professor: "Luiza",
            student:
              [
                {
                  id: 1,
                  name: 'Mariana',
                  idWorkshop: 5,
                  idClass: 6,
                  dateOfBirth: '10-09-1990',
                  gender: 'Feminino',
                  rg: '123456789',
                  cpf: '123456789',
                  maritalStatus: 'Solteiro',
                  raceEthnicity: 'Negro',
                  address: 'Rua 6, nº 7, Bairro 6',
                  state: 'SP',
                  city: 'São Paulo',
                  phoneNumber: '123456789',
                  landlineNumber: '123456789',
                  email: 'mariana@email.com'
                }
              ]
          }
        ]
    },
  ]

  /**
   * Lista todos os workshops disponíveis com detalhes das suas turmas, incluindo o nome do workshop, a categoria,
   * informações sobre as turmas (horários, professores, quantidade de alunos) e a ONG responsável. Este método
   * não recebe parâmetros e retorna uma lista achatada de todas as turmas de cada workshop, formatada com informações
   * relevantes para facilitar a visualização e o gerenciamento.
   * 
   * @returns {Promise<Array>} Uma promessa que resolve para uma lista contendo as turmas de todos os workshops,
   * com detalhes formatados de cada turma.
  */
  async listAll() {
    const workshopsWithClasses = this.workshops.map(workshop => {
      const classesFormatted = workshop.classroom.map(classItem => {
        const studentNames = classItem.student.map(student => student.name);
        return {
          idClass: classItem.idClass,
          name: `${workshop.name} - ${classItem.name}`,
          idOng: workshop.idOng,
          nameOng: workshop.nameOng,
          category: workshop.category,
          day: classItem.day,
          startTime: classItem.startTime,
          endTime: classItem.endTime,
          professor: classItem.professor,
          student: studentNames, 
          qtyStudents: classItem.student.length, 
        };
      });
      return classesFormatted.flat();
    });
    return workshopsWithClasses.flat();
  }

  /**
   * Encontra uma turma específica pelo seu ID, retornando detalhes do workshop ao qual pertence a turma, informações
   * sobre a turma (como horários e professor), e uma lista dos alunos com seus respectivos nomes e IDs. Este método
   * aceita o ID da turma como parâmetro.
   * 
   * @param {number} id - O ID da turma a ser encontrada.
   * 
   * @returns {Promise<Object>} Uma promessa que resolve para um objeto contendo informações detalhadas da turma
   * especificada, incluindo detalhes do workshop associado.
  */
  async findById(id: number) {
    const workshopsWithClasses = this.workshops.map(workshop => {
      const classesFormatted = workshop.classroom.filter(classItem => {
        return classItem.idClass === id;
      }).map(classItem => {
        const studentNames = classItem.student.map(student => { return{ name: student.name, id: student.id} });
        return {
          idClass: classItem.idClass,
          workshopName: `${workshop.name} - ${classItem.name}`,
          idOng: workshop.idOng,
          nameOng: workshop.nameOng,
          category: workshop.category,
          day: classItem.day,
          startTime: classItem.startTime,
          endTime: classItem.endTime,
          professor: classItem.professor,
          student: studentNames, 
          qtyStudents: classItem.student.length, 
        };
      });
      return classesFormatted;
    }).flat(); 
    return workshopsWithClasses.flat();
  }

  /**
   * Lista todos os workshops associados a uma ONG específica, baseando-se no ID da ONG fornecido como parâmetro.
   * Retorna uma lista de workshops, incluindo informações como o nome do workshop, a categoria, e os detalhes das turmas.
   * 
   * @param {number} idOng - O ID da ONG cujos workshops serão listados.
   * 
   * @returns {Promise<WorkshopEntity[]>} Uma promessa que resolve para uma lista de entidades `WorkshopEntity`,
   * representando os workshops associados à ONG especificada.
  */
  async listByIdOng(idOng: number) {
    return this.workshops.filter(workshop => workshop.idOng === idOng);
  }

  /**
   * Lista todos os alunos agrupados por workshop de acordo com o ID da ONG fornecido. Este método calcula a quantidade
   * total de alunos em cada workshop associado à ONG e retorna uma lista contendo o nome de cada workshop junto com
   * a quantidade total de alunos inscritos neles.
   * 
   * @param {number} idOng - O ID da ONG para a qual os alunos serão listados por workshop.
   * 
   * @returns {Promise<Array>} Uma promessa que resolve para uma lista contendo os workshops e a quantidade de alunos
   * inscritos em cada um, associados à ONG especificada.
  */
  async listStudentsByWorkshop(idOng: number) {
    const workshops = this.workshops.filter(workshop => workshop.idOng === idOng);
    return workshops.map(workshop => {
      const qtyStudents: number = workshop.classroom.reduce((acc, item) => acc + item.student.length, 0)

      return {
        name: workshop.name,
        qtyStudents
      };
    });
  }
}