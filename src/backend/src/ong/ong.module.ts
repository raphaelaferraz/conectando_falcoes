// Módulo de ONG

import { Module } from "@nestjs/common";
import { OngController } from "./ong.controller";
import { OngService } from "./ong.service";
import { WorkshopService } from "src/workshop/workshop.service";

@Module({
  controllers: [OngController],
  providers: [OngService, WorkshopService]
})

export class OngModule {}