import { TestDto } from './dto/test.dto';
import { AppService } from './app.service';
import { validate } from 'class-validator';
import * as _ from 'lodash';
import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('test')
  @ApiOperation({
    summary: 'Validate and shuffle the TestInterface payload',
  })
  @ApiResponse({ status: 200, description: 'Success', type: TestDto })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  async create(@Body() body: TestDto): Promise<any> {
    // Validate the incoming request using the TestDto
    const errors = await validate(body);

    if (errors.length > 0) {
      // Throw a BAD_REQUEST error with the validation result
      console.log(errors);
      throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }

    return this.appService.shuffleObject(body);
  }
}
