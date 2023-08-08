import { ApiProperty } from '@nestjs/swagger';
import { Rol } from '../entity/rol.entity';
export class CreateUserDto {
  @ApiProperty({ 
    example: 'Jhon Doe',
  })
  readonly name: string; 

  @ApiProperty({ example: 'JhonCena' })
  readonly username: string;

  @ApiProperty({
    example:
      '12345678',
  })
  readonly password: string;

  @ApiProperty({
    example:
      'EDIT',
  })
  readonly rol: Rol;
}