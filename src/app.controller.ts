import { Controller, Get, HttpCode } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import { DutiesDto } from './dtos/duties.dto';

@ApiTags('Duties')
@Controller('duties')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Returns validator duties.',
    description: 'Returns an array of all validator duties.',
  })
  @ApiOkResponse({
    description: 'Duties were successfully returned.',
    type: DutiesDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error.',
  })
  getDuties(): DutiesDto {
    return this.appService.getDuties();
  }
}
