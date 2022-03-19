import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsString, Min } from "class-validator";
import { isMainThread } from "worker_threads";

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    required: true,
    description: '등록자 이름',
    example: '알렉스',
  })
  readonly name: string;

  @IsString()
  @IsEnum(["남성", "여성"])
  @ApiProperty({
    required: true,
    description: '성별선택 : 남성, 여성',
    example: '남성',
  })
  readonly sex: string;

  @IsInt()
  @Min(0)
  @ApiProperty({
    required: true,
    description: '나이입력',
    example: 30,
  })
  readonly age: number;
}
