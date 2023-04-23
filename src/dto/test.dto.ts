import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsAlpha, IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class TestDto {
  @ApiProperty({ type: Number })
  @IsInt()
  @IsNotEmpty()
  owner: number;

  @ApiProperty({ type: String })
  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String })
  @IsAlphanumeric()
  @IsNotEmpty()
  company: string;
}
