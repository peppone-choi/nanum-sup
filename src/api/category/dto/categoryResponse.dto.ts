import UserResponseDto from "@/api/user/dto/userResponse.dto";

export class CategoryResponseDTO {
  categoryId: string;
  title: string;
  admin: UserResponseDto;
  subAdmin: UserResponseDto[];

  constructor(params: ICategory) {
    this.categoryId = params.id;
    this.title = params.title;
    this.admin = new UserResponseDto(params.admin);
    this.subAdmin = params.subAdmin.map((user) => new UserResponseDto(user));
  }
}
