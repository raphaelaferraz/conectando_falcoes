// Importa a entidade de ONG e de Workshop
import { WorkshopEntity } from "src/workshop/workshop.entity";
import { OngEntity } from "src/ong/ong.entity";

// DTO de professor

export class TeacherDTO {
  name: string;
  workshops: WorkshopEntity[];
  ongs: OngEntity[];
  dateOfBirth: string;
  gender: string;
  address: string;
  state: string;
  city: string;
  email: string;
  phoneNumber: string;
  rg: string;
  cpf: string;
}
