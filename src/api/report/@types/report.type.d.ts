interface IReport {
  id: string;
  reporter: IUser;
  reported: IUser;
  reason: string;
  reportedPost: IPost | null;
  reportedComment: IComment | null;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
}
