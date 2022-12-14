import { Body, Controller, Get, HttpStatus, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { IApplicationForm } from '../interfaces/application.request';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express'

@Controller('/form')
export class ApplicationController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('/submit')
  async saveApplication(@Res() response, @Body() application: IApplicationForm) {
    const newUser = await this.userService.processApplication(application);
    return response.status(HttpStatus.CREATED).json({
      newUser
    })
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('files'))
  async uploadDocument(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return {
      filepath: file.path,
      filename: file.originalname
    }
  }

  @Get('/hello')
  getHello(): string {
    return 'application form is cool!';
  }
}
