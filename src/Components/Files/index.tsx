import React, { useState, useEffect } from "react";
import "./style.css";
import { TaskFilesType } from "../TaskFiles/types";
import searchIcon from "./img/searchIcon.svg";
import arrowIcon from "./img/arrowIcon.svg";
import downloadIcon from "./img/downloadIcon.svg";
import arrowUp from "./img/arrowIcon rotated.svg";

interface FilesProps {
  files: TaskFilesType[];
}

interface Sort {
  sortBy: "name" | "size" | "date" | "uploadedBy";
  sortType: "acs" | "desc";
}

const INITIAL_SORT: Sort = {
  sortBy: "name",
  sortType: "acs",
};

function Files({ files }: FilesProps) {
  const [sort, setSort] = useState(INITIAL_SORT);

  const handleSorting = (
    files: TaskFilesType[],
    sort: Sort
  ): TaskFilesType[] => {
    const newFiles = files.sort((a, b) => {
      const x =
        typeof a[sort.sortBy] == "string"
          ? a[sort.sortBy].toString().toLowerCase()
          : a[sort.sortBy];

      const y =
        typeof b[sort.sortBy] === "string"
          ? b[sort.sortBy].toString().toLowerCase()
          : b[sort.sortBy];

      if (sort.sortType === "acs") {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
      } else {
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
      }
      return 0;
    });

    return newFiles;
  };

  const filteredFiles = handleSorting(files, sort);

  const updateSortState = (newSort: Sort) => {
    setSort(newSort);
  };

  return (
    <div className="files">
      <table className="files__table">
        <thead>
          <tr>
            <th>Image</th>
            <th>
              <img src={searchIcon} alt="searchIcon" className="searchIcon" />
              <button
                onClick={() => {
                  updateSortState({
                    sortBy: "name",
                    sortType: sort.sortType === "acs" ? "desc" : "acs",
                  });
                }}
              >
                Name
                {sort.sortBy === "name" && (
                  <>
                    {sort.sortType === "acs" ? (
                      <img alt="arrowUp" src={arrowUp} className="arrow" />
                    ) : (
                      <img alt="arrowDown" src={arrowIcon} className="arrow" />
                    )}
                  </>
                )}
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  updateSortState({
                    sortBy: "size",
                    sortType: sort.sortType === "acs" ? "desc" : "acs",
                  });
                }}
              >
                Size
                {sort.sortBy === "size" && (
                  <>
                    {sort.sortType === "acs" ? (
                      <img alt="arrowUp" src={arrowUp} className="arrow" />
                    ) : (
                      <img alt="arrowDown" src={arrowIcon} className="arrow" />
                    )}
                  </>
                )}
              </button>
            </th>
            <th>
              <button
                onClick={() => {
                  updateSortState({
                    sortBy: "uploadedBy",
                    sortType: sort.sortType === "acs" ? "desc" : "acs",
                  });
                }}
                className="test"
              >
                Uploaded By
                {sort.sortBy === "uploadedBy" && (
                  <>
                    {sort.sortType === "acs" ? (
                      <img alt="arrowUp" src={arrowUp} className="arrow" />
                    ) : (
                      <img alt="arrowDown" src={arrowIcon} className="arrow" />
                    )}
                  </>
                )}
              </button>
            </th>
            <th>Date</th>
            <th>Tag</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredFiles.map((item) => {
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
