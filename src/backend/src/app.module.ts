import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OngModule } from './ong/ong.module';
import { WorkshopModule } from './workshop/workshop.module';
import { ClassroomModule } from './classroom/classroom.module';
import { StudentModule } from './student/student.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { PresenceService } from './presence/presence.service';
import { PresenceModule } from './presence/presence.module';
import { ClassService } from './class/class.service';
import { ClassController } from './class/class.controller';
import { ClassModule } from './class/class.module';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [OngModule, WorkshopModule, ClassroomModule, StudentModule, CategoryModule, UserModule, PresenceModule, ClassModule, TeacherModule],
  controllers: [AppController, ClassController],
  providers: [AppService, ClassService, PresenceService],
})
export class AppModule {}
