// Importa decorador e entidade de ONG
import { Injectable } from "@nestjs/common";
import { OngEntity } from "./ong.entity";

@Injectable()
export class OngService {

  // Simulação de uma entidade "Ong" no banco de dados 
  private ongs: OngEntity[] = [
    {
      "id": 1,
      "name": "ONG Amigos Unidos",
      "address": "Rua dos Animais, 123",
      "email": "amigosunidos@gmail.com",
      "cnpj": "123456789"
    },
    {
      "id": 2,
      "name": "ONG Natureza Viva",
      "address": "Avenida das Árvores, 456",
      "email": "naturezaviva@gmail.com",
      "cnpj": "987654321"
    },
    {
      "id": 3,
      "name": "ONG Educação para Todos",
      "address": "Travessa da Educação, 789",
      "email": "educacaoparatodos@gmail.com",
      "cnpj": "456789123"
    }
  ];  

  /**
   * Lista todas as ONGs cadastradas. Este método não recebe parâmetros e retorna uma lista estática
   * de ONGs definidas internamente. Ideal para fornecer uma visão geral de todas as ONGs disponíveis
   * na aplicação.
   * 
   * @returns {Promise<OngEntity[]>} Uma promessa que resolve para um array de entidades `OngEntity`,
   * representando todas as ONGs cadastradas. Cada entidade `OngEntity` contém detalhes como id, nome,
   * endereço, email e CNPJ da ONG.
  */
  async listAll(){
    return this.ongs;
  }

  /**
   * Busca uma ONG específica pelo seu ID. Este método recebe o ID de uma ONG como parâmetro e retorna
   * a ONG correspondente se encontrada.
   * 
   * @param {number} id - O ID da ONG a ser buscada.
   * 
   * @returns {Promise<OngEntity | undefined>} Uma promessa que resolve para a entidade `OngEntity`
   * correspondente ao ID fornecido. Se nenhuma ONG for encontrada com o ID especificado, a promessa
   * resolve para `undefined`.
  */
  async findById(id: number) {
    return this.ongs.find(ong => ong.id === id);
  }

}