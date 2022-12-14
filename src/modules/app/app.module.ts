import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from '../credilinq/entities/user.entity';
import { TermsAndConditions } from '../credilinq/entities/conditions.entity';
import { UserDocs } from '../credilinq/entities/userDocs.entity';
import { CredilinqModule } from '../credilinq/credilinq.module';
import { MulterModule } from '@nestjs/platform-express';

import dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.DB_PWD,
      database: 'credilinq',
      entities: [User, UserDocs, TermsAndConditions],
      synchronize: true,
      dropSchema: true
    }),
    MulterModule.register({
      dest: './files',
    }),
    CredilinqModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
