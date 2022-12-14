import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from './entities/user.entity';
import { TermsAndConditions } from './entities/conditions.entity';
import { UserDocs } from './entities/userDocs.entity';
import { ApplicationController } from './controllers/application.controller';
import { UserService } from './services/user.service'
import { DocumentService } from "./services/documents.service";
import { ConditionService } from "./services/conditions.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, UserDocs, TermsAndConditions])],
  controllers: [ApplicationController],
  providers: [UserService, DocumentService, ConditionService],
  exports: [UserService, DocumentService, ConditionService],
})
export class CredilinqModule { }
