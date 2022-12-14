import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserDocs } from '../entities/userDocs.entity';

export interface IUserDocs {
    userId: number;
    filename: string;
}

@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(UserDocs)
        private documentRepository: Repository<UserDocs>,
    ) { }

    async saveDocuments(docs: IUserDocs[]) {
        if (!docs.length) return;
        docs.forEach(async doc => {
            await this.documentRepository.save(doc);
        })
    }
}
