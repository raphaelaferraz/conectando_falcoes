import { Injectable } from "@nestjs/common";
import { CategoryEntity } from "./category.entity";

@Injectable()
export class CategoryService{

    // Simulação dos dados de Categorias no banco de dados
    private categories: CategoryEntity[] = [
        {
            id: 1,
            category: 1,
            name: 'Esportes',
            color: '#F5821E',
        },
        {
            id: 2,
            category: 2,
            name: 'Arte',
            color: '#F5C630',
        },
        {
            id: 3,
            category: 3,
            name: 'Administração',
            color: '#2F3192',
        },
        {
            id: 4,
            category: 4,
            name: 'Dança',
            color: '#EB1C68',
        },
        {
            id: 5,
            category: 5,
            name: 'Culinária',
            color: '#63236F',
        }
    ]

    /**
     * Recupera todas as categorias disponíveis. Este método simula a obtenção de dados de categorias
     * de um banco de dados, retornando uma lista estática de categorias definidas internamente.
     * Não recebe parâmetros e é projetado para ser usado internamente ou por controladores que necessitam
     * acessar a lista de categorias.
     * 
     * @returns {Promise<CategoryEntity[]>} Uma promessa que resolve para uma lista estática de entidades de categorias.
     * Cada entidade de categoria inclui um `id`, um `category` (como um identificador ou tipo numérico adicional),
     * um `name` representando o nome da categoria, e uma `color` associada à categoria para fins de apresentação.
     */
    async listAll(){
        return this.categories;
    }
}