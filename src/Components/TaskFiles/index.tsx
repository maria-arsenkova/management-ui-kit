import React from "react";
import "./style.scss";

export interface TaskFilesProps {
  id: string;
  preview?: string;
  name: string;
  size: number;
  sizeSign: "KB" | "MB" | "GB" | "ТB";
  onRemoveFile: (id: string) => void;
}

function TaskFiles({
  id,
  preview,
  name,
  size,
  sizeSign,
  onRemoveFile,
}: TaskFilesProps) {
  return (
    <div className="TaskFiles" id={id}>
      <img className="TaskFiles__preview" src={preview} alt={name} />
      <div>
        <div className="TaskFiles__name">{name}</div>
        <div>
          <span className="TaskFiles__size">
            {size} {sizeSign}
          </span>
          <button
            className="TaskFiles__delete"
            onClick={() => {
              onRemoveFile(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export { TaskFiles };
