import { ApiProperty } from '@nestjs/swagger';
import { Expose, plainToClass, Transform } from 'class-transformer';
import { ValidateNested } from 'class-validator';

class Information {
  @ApiProperty()
  @Expose()
  minimumOsVersion: string;
  @ApiProperty()
  @Expose()
  version: string;
  @ApiProperty()
  @Expose()
  currentVersionReleaseDate: string;
}

export class Versions {
  @ApiProperty()
  @ValidateNested({ each: true })
  @Expose()
  @Transform((param) =>
    plainToClass(Information, param.obj.results[0], {
      excludeExtraneousValues: true,
    }),
  )
  results: Information;
}
