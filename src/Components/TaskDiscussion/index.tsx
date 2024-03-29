import React, { useState } from "react";
import "./style.scss";
import { UserType } from "Components/UserInfo/types";
import { Comment } from "Components/Comment";
import { CommentProps } from "Components/Comment/types";
import { TaskType } from "Components/Task/types";
import { UserPhoto, AVATAR_SIZE } from "Components/UserPhoto";
import { Button, BUTTON_SIZE } from "Components/Button";

export interface TaskDiscussionsProps {
  user: UserType;
  task: TaskType;
  content: CommentProps[];
  onCommentCreated: (comments: CommentProps[]) => void;
}

function TaskDiscussion({
  user,
  content,
  onCommentCreated,
}: TaskDiscussionsProps) {
  const [comment, setComment] = useState<CommentProps>({
    id: "",
    text: "",
    date: "",
    author: user,
  });

  const handleComment = (
    newComment: string,
    newId: string,
    newDate: string
  ): void => {
    setComment({
      id: newId,
      text: newComment,
      date: newDate,
      author: comment.author,
    });
  };

  const createComment = (
    newComment: CommentProps,
    allComments: CommentProps[]
  ): void => {
    if (newComment.text.trim() !== "") {
      const newComments = [newComment, ...allComments];
      onCommentCreated(newComments);
    }
  };

  return (
    <div>
      <div className="TaskDiscussion__title">Discussion</div>
      <div className="TaskDiscussion__new-comment">
        <span className="TaskDiscussion__comment-user-photo">
          <UserPhoto user={user} size={AVATAR_SIZE.LARGE} />
        </span>
        <input
          type="text"
          placeholder="Add a comment…"
          className="TaskDiscussion__comment-text"
          id="pounds"
          onChange={(event) =>
            handleComment(
              event.target.value,
              Date.now().toString(),
              new Date().toLocaleDateString("en-GB", {
                weekday: "short",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              })
            )
          }
          onKeyPress={(event) => {
              if (event.key === "Enter") {
                  createComment(comment, content);
              }
          }}
        />

        <Button
          size={BUTTON_SIZE.MEDIUM}
          isDisabled={comment.text.trim() === ""}
          onClick={() => {
              createComment(comment, content);
          }}
        >
          Send
        </Button>
      </div>
      {content && (
        <div>
          {content.map((item) => {
            return (
              <Comment
                id={item.id}
                date={item.date}
                text={item.text}
                author={item.author}
                key={item.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export { TaskDiscussion };
