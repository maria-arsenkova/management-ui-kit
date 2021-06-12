import React from "react";
import "./style.css";
import { TaskFilesType } from "../TaskFiles/types";
import searchIcon from "./img/searchIcon.svg";
import arrowIcon from "./img/arrowIcon.svg";
import downloadIcon from "./img/downloadIcon.svg";

interface FilesProps {
  files: TaskFilesType[];
}

function Files({ files }: FilesProps) {
  return (
    <div className="files">
      <table className="files__table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              <img src={searchIcon} alt="searchIcon" className="searchIcon" />
              Name
            </th>
            <th>Size</th>
            <th>Uploaded By</th>
            <th>Date</th>
            <th>Tag</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {files.map((item) => {
            return (
              <tr key={`${item.uploadedBy}_${item.name}`}>
                <td>
                  <img
                    className="table__img"
                    src={item.preview}
                    alt={item.name}
                    key={`${item.preview}_${item.name}`}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  {item.size} {item.sizeSign}
                </td>
                <td>{item.uploadedBy}</td>
                <td>{item.date}</td>
                <td></td>
                <td>
                  <button className="table__button">
                    Actions{" "}
                    <img
                      src={arrowIcon}
                      alt="arrowIcon"
                      key={`${arrowIcon}_${item.name}`}
                    />
                  </button>
                </td>
                <td>
                  <a target="_blank" href={item.preview} download>
                    <img
                      src={downloadIcon}
                      alt="downloadIcon"
                      key={`${downloadIcon}_${item.name}`}
                    />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export { Files };
