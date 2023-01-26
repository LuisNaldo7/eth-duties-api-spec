import { ApiProperty } from '@nestjs/swagger';
import { DutyDto } from './duty.dto';

export class DutiesDto {
  @ApiProperty({
    description: 'Array of validator duties.',
    type: [DutyDto],
  })
  duties: DutyDto[];

  constructor(duties: DutyDto[]) {
    this.duties = duties;
  }
}
