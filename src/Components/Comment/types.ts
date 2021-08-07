import { UserType } from "../UserInfo/types";

export interface CommentProps {
  author: UserType;
  date: string;
  text: string;
  id: string;
};