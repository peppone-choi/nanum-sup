import FollowResponseDto from "./follow.dto";

export class FollowsResponseDto {
  number: number;
  follows: FollowResponseDto[];
  constructor(params: { number: number; follows: FollowResponseDto[] }) {
    this.number = params.number;
    this.follows = params.follows;
  }
}
