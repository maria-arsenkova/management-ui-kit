import React, { useState, useEffect } from "react";
import "./style.scss";
import { TaskFilesForClient } from "../TaskFiles/types";
import searchIcon from "./img/searchIcon.svg";
import arrow from "./img/arrow.svg";
import downloadIcon from "./img/downloadIcon.svg";
import { getTasks } from "../../services/tasks";
import { Search } from "../Search";
import { IconArrow, ARROW_DIRECTION } from "../IconArrow";

interface Sort {
  sortBy: "name" | "size" | "date" | "uploadedBy";
  sortType: "acs" | "desc";
}

const INITIAL_SORT: Sort = {
  sortBy: "name",
  sortType: "acs",
};

function Files() {
  const [sort, setSort] = useState(INITIAL_SORT);
  const [files, setFiles] = useState<TaskFilesForClient[]>([]);

  const getFiles = async () => {
    const allTasks = await getTasks();
    const allFiles: TaskFilesForClient[] = allTasks
      .map((task) => task?.files)
      .flat()
      .filter((file) => file);
    setFiles(allFiles);
  };

  useEffect(() => {
    getFiles();
  }, []);

  const handleSorting = (
    files: TaskFilesForClient[],
    sort: Sort
  ): TaskFilesForClient[] => {
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
    <div className="Files">
      <div className="Files__list">
        <div className="Files__list-line Files__list-line-header">
          <div>Image</div>
          <div>
            <span><Search /></span>
            {/* <img src={searchIcon} alt="searchIcon" className="search-icon" /> */}
            <button
              onClick={() => {
                updateSortState({
                  sortBy: "name",
                  sortType: sort.sortType === "acs" ? "desc" : "acs",
                });
              }}
              className="Files__button-sort"
            >
              Name
              {sort.sortBy === "name" && (
                <>
                  {sort.sortType === "acs" ? (
                    <span className="Files__arrow">
                      <IconArrow derection={ARROW_DIRECTION.UP} />
                    </span>
                  ) : (
                    <span className="Files__arrow">
                      <IconArrow derection={ARROW_DIRECTION.DOWN} />
                    </span>
                  )}
                </>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                updateSortState({
                  sortBy: "size",
                  sortType: sort.sortType === "acs" ? "desc" : "acs",
                });
              }}
              className="Files__button-sort"
            >
              Size
              {sort.sortBy === "size" && (
                <>
                  {sort.sortType === "acs" ? (
                    <span className="Files__arrow">
                      <IconArrow derection={ARROW_DIRECTION.UP} />
                    </span>
                  ) : (
                    <span className="Files__arrow">
                      <IconArrow derection={ARROW_DIRECTION.DOWN} />
                    </span>
                  )}
                </>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                updateSortState({
                  sortBy: "uploadedBy",
                  sortType: sort.sortType === "acs" ? "desc" : "acs",
                });
              }}
              className="Files__button-sort"
            >
              Uploaded By
              {sort.sortBy === "uploadedBy" && (
                <>
                  {sort.sortType === "acs" ? (
                    <span className="Files__arrow">
                      <IconArrow derection={ARROW_DIRECTION.UP} />
                    </span>
                  ) : (
                    <span className="Files__arrow">
                      <IconArrow derection={ARROW_DIRECTION.DOWN} />
                    </span>
                  )}
                </>
              )}
            </button>
          </div>
          <div>Date</div>
          <div>Tag</div>
          <div></div>
          <div></div>
        </div>
        {filteredFiles.map((item) => {
          return (
            <div
              className="Files__list-line Files__list-line-body"
              key={`${item.id}_${item.name}`}
            >
              <div>
                <img
                  className="Files__preview"
                  src={item.preview}
                  alt={item.name}
                  key={`${item.preview}_${item.name}`}
                />
              </div>
              <div>{item.name}</div>
              <div>
                {item.size} {item.sizeSign}
              </div>
              <div>{item.uploadedBy}</div>
              <div>{item.date}</div>
              <div></div>
              <div>
                <button className="Files__button-actions">
                  Actions
                  <span key={`${arrow}_${item.name}`} className="Files__arrow">
                    <IconArrow derection={ARROW_DIRECTION.DOWN} />
                  </span>
                </button>
              </div>
              <div>
                <a target="_blank" href={item.preview} download>
                  <img
                    src={downloadIcon}
                    alt="downloadIcon"
                    key={`${downloadIcon}_${item.name}`}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { Files };
