import React from "react";
import "./style.scss";
import { TaskFilesForClient } from "./types";
import { Icon, ICON_SIZE } from "../Icon";

export interface TaskFilesProps {
  file: TaskFilesForClient;
  onRemoveFile: (id: string) => void;
}

function TaskFiles({ file, onRemoveFile }: TaskFilesProps) {
  const preparedSize = (size: number): string => {
    const bytes = size;
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)).toString();
  };

  const download = (url: string | undefined): void => {
    if (typeof url == "string") {
      const link = document.createElement("a");
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="TaskFiles" id={file.id}>
      <img className="TaskFiles__preview" src={file.preview} alt={file.name} />
      <div className="TaskFiles__information">
        <div className="TaskFiles__name">{file.name}</div>
        <div>
          <span className="TaskFiles__size">
            {preparedSize(file.size)} {file.sizeSign}
          </span>
        </div>
      </div>
      <div>
        <div>
          <a
            target="_blank"
            download
            href={file.preview}
            className="TaskFiles__download"
          >
            <div className="TaskFiles__icon-control">
              <Icon name={"downloadCloud"} size={ICON_SIZE.SMALL} />
            </div>
          </a>
        </div>
        <div>
          <button
            className="TaskFiles__delete"
            onClick={() => {
              onRemoveFile(file.id);
            }}
          >
            <div className="TaskFiles__icon-control">
              <Icon name={"delete"} size={ICON_SIZE.SMALL} />
            </div>
            {/* <div className="test">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                version="1.1"
                viewBox="0 0 32 32"
              >
                <g transform="scale(2)">
                  <circle fill="#ffffff" id="facebook" cx="8" cy="8" r="7" />
                  <rect
                    fill="#f44336"
                    width="2"
                    height="10"
                    x="-.98"
                    y="-16.29"
                    transform="rotate(135)"
                  />
                  <rect
                    fill="#f44336"
                    width="2"
                    height="10"
                    x="-12.29"
                    y="-5.01"
                    transform="rotate(-135)"
                  />
                </g>
              </svg>
            </div> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export { TaskFiles };
