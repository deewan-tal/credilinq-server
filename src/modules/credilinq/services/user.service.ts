import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from '../entities/user.entity';
import { IApplicationForm } from '../interfaces/application.request';
import { DocumentService } from './documents.service';
import { ConditionService } from './conditions.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private documentService: DocumentService,
    private conditionService: ConditionService,
  ) { }

  async saveUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async processApplication(application: IApplicationForm) {
    const { businessUEN, businessName, fullname, position, mobile, email } = application;
    const newUser = await this.saveUser({
      businessUEN,
      businessName,
      fullname,
      position,
      mobile,
      email
    } as User);

    const { filenames = [] } = application;
    const userId = newUser.id;
    const files = filenames.map(file => ({ userId, filename: file }))
    await this.documentService.saveDocuments(files);

    const { termsAndConditions } = application
    await this.conditionService.saveConditions(userId, termsAndConditions);

    return newUser;
  }
}
