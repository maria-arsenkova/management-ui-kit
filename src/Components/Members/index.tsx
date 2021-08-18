import React from "react";
import { Icon2 } from "../Icon2";
import { UserType } from "../UserInfo/types";
import { AVATAR_SIZE, UserPhoto } from "../UserPhoto";
import { Button, BUTTON_SIZE, BUTTON_VARIABLE } from "./../Button";
import chat from "./img/chat.svg";
import "./style.scss";

interface MembersProms {
  members: UserType[];
}

function Members({ members }: MembersProms) {
  return (
    <div className="Members">
      <div className="Members_wrapper">
        {members.map((member, index) => {
          return (
            member?.avatar && (
              <span
                className="Members__member-photo"
                key={`${members[index].initials}`}
              >
                <UserPhoto user={member} size={AVATAR_SIZE.MEDIUM} />
              </span>
            )
          );
        })}
      </div>
      <Button size={BUTTON_SIZE.SMALL} onClick={() => {}}>
        Share
      </Button>
      <Button
        onClick={() => {}}
        variable={BUTTON_VARIABLE.WARNING}
        size={BUTTON_SIZE.SMALL}
      >
        <Icon2 name="chat"/>
        <span>Chat</span>
      </Button>
    </div>
  );
}

export { Members };
