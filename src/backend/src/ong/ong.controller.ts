// Importa decoradores, entidade de ONG e serviço de workshop
import { Controller, Get, Param } from "@nestjs/common";
import { OngService } from "./ong.service";
import { WorkshopService } from "src/workshop/workshop.service";


@Controller('/ongs')
export class OngController {

  constructor(private ongService: OngService, private workshopService: WorkshopService){}

  /**
 * Lista todas as ONGs cadastradas. Este método não recebe parâmetros e retorna um array contendo
 * todos os dados básicos das ONGs cadastradas. É útil para fornecer uma visão geral das ONGs disponíveis
 * na plataforma.
 * 
 * Este endpoint é acessado através de uma solicitação GET para '/ongs'.
 * 
 * @returns {Promise<OngEntity[]>} Uma promessa que resolve para um array de objetos, onde cada objeto
 * contém os dados básicos de uma ONG cadastrada.
 */
  @Get()
  async listAllOngs(){
    const ongs = await this.ongService.listAll();
    return ongs;
  }

  /**
   * Busca uma ONG específica pelo seu ID. Este método recebe o ID da ONG como parâmetro e retorna um objeto
   * contendo todos os dados da ONG encontrada, juntamente com informações adicionais, como a lista de workshops
   * associados à ONG, a quantidade total de workshops, e a lista de estudantes por workshop.
   * 
   * Este endpoint é acessado através de uma solicitação GET para '/ongs/:id', onde `:id` é o ID da ONG desejada.
   * 
   * @param {number} id - O ID da ONG a ser buscada.
   * 
   * @returns {Promise<{ong: OngEntity, workshops: WorkshopEntity[], qtyAllWorkshops: number, studentsWorkshops: StudentWorkshopEntity[]}>}
   * Uma promessa que resolve para um objeto contendo os dados da ONG, a lista de workshops associados, a quantidade total de workshops,
   * e a lista de estudantes por workshop.
  */
  @Get('/:id')
  async findOngById(@Param('id') id: number){
    const ong = await this.ongService.findById(Number(id));
    const workshops = await this.workshopService.listByIdOng(Number(id));
    const studentsWorkshops = await this.workshopService.listStudentsByWorkshop(Number(id));
    let coutWorkshops = workshops.length;

    return {
      ong: ong,
      workshops: workshops,
      qtyAllWorkshops: coutWorkshops,
      studentsWorkshops: studentsWorkshops
    };
  }
}