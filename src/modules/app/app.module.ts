import { HttpModule, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredilinqModule } from '../credilinq/credilinq.module';
import { TermsAndConditions } from '../credilinq/entities/conditions.entity';
import { User } from '../credilinq/entities/user.entity';
import { UserDocs } from '../credilinq/entities/userDocs.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
      dest: './uploads',
    }),
    HttpModule.registerAsync({
    useFactory: () => ({
      timeout: 5000,
      maxRedirects: 5
    })
  }),
    CredilinqModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
