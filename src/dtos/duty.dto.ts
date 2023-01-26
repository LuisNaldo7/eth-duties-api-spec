import { ApiProperty } from '@nestjs/swagger';

export class DutyDto {
  @ApiProperty({
    description: 'Validator index.',
    example: '123456',
  })
  validatorIndex: number;

  @ApiProperty({
    description: 'The unix time the valdator has to attest.',
    example: '1630357725',
    nullable: true,
  })
  nextAttestationDuty?: number;

  @ApiProperty({
    description: 'The unix time the valdator has to make a block proposal.',
    example: '1630357725',
    nullable: false,
  })
  nextBlockProposalDuty?: number;

  @ApiProperty({
    description:
      'The unix time the valdator has to participate in teh synccommittee.',
    example: '1630357725',
    nullable: false,
  })
  nextSyncCommitteeDuty?: number;

  constructor(
    validatorIndex: number,
    nextAttestationDuty: number,
    nextBlockProposalDuty: number,
    nextSyncCommitteeDuty: number,
  ) {
    this.validatorIndex = validatorIndex;
    this.nextAttestationDuty = nextAttestationDuty;
    this.nextBlockProposalDuty = nextBlockProposalDuty;
    this.nextSyncCommitteeDuty = nextSyncCommitteeDuty;
  }
}
