import { Body, Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { IApplicationForm } from '../interfaces/application.request';
import { UserService } from '../services/user.service';

@Controller('/form')
export class ApplicationController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('/submit')
  async saveApplication(@Res() response, @Body() application: IApplicationForm) {
    const newUser = await this.userService.processApplication(application);
    return newUser;
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file',{
      dest: './uploads'
    }))
  async uploadDocument(@UploadedFile() file:Express.Multer.File) {
    console.log(file);
    return file;
  }

  @Get('/test')
  getHello(): string {
    return 'application form is working!';
  }
}
