// Importa decoradores e entidade de ONG    
import { Controller, Get, Param, Post } from '@nestjs/common';
import { WorkshopService } from './workshop.service';


@Controller('workshops')
export class WorkshopController {
    
    constructor(private workshopService: WorkshopService){}

    /**
     * Lista todos os workshops disponíveis com detalhes das suas turmas, incluindo o nome do workshop, a categoria,
     * informações sobre as turmas (horários, professores, quantidade de alunos) e a ONG responsável. Este método
     * não recebe parâmetros e retorna uma lista achatada de todas as turmas de cada workshop, formatada com informações
     * relevantes para facilitar a visualização e o gerenciamento.
     * 
     * @returns {Promise<Array>} Uma promessa que resolve para uma lista contendo as turmas de todos os workshops,
     * com detalhes formatados de cada turma.
    */
    @Get()
    async listAll(){
        const workshops = await this.workshopService.listAll();
        return workshops;

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
    @Get('/:id')
    async findById(@Param('id') id: string){
        const workshopClass = await this.workshopService.findById(Number(id));
        return workshopClass;
    }
}
