import { Injectable } from '@nestjs/common';
import { DutiesDto } from './dtos/duties.dto';
import { DutyDto } from './dtos/duty.dto';

@Injectable()
export class AppService {
  getDuties(): DutiesDto {
    const dutyDtos = [
      new DutyDto(456800, 1630357864, null, null),
      new DutyDto(460002, 1630357888, null, null),
      new DutyDto(460003, 1630357900, null, 1630357912),
      new DutyDto(460004, 1630357876, 1630357912, null),
      new DutyDto(471115, 1630357936, null, null),
    ];

    const dutiesDto = new DutiesDto(dutyDtos);

    return dutiesDto;
  }
}
