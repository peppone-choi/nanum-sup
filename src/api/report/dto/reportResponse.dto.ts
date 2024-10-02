import { CommentResponseDTO } from "@/api/comment/dto/commentResponse.dto";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
import UserResponseDto from "@/api/user/dto/userResponse.dto";

export class ReportResponseDto {
  id: string;
  reporter: UserResponseDto;
  reported: UserResponseDto;
  reason: string;
  reportedPost: PostResponseDTO | null;
  reportedComment: CommentResponseDTO | null;
  status: "approved" | "rejected" | "pending";
  createdAt: Date;
  constructor(report: IReport) {
    this.id = report.id;
    this.reporter = new UserResponseDto(report.reporter);
    this.reported = new UserResponseDto(report.reported);
    this.reason = report.reason;
    this.reportedPost = report.reportedPost ? new PostResponseDTO(report.reportedPost) : null;
    this.reportedComment = report.reportedComment ? new CommentResponseDTO(report.reportedComment) : null;
    this.status = report.status;
    this.createdAt = report.createdAt;
  }
}
