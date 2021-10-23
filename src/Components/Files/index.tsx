import React, { useState, useEffect } from "react";
import "./style.scss";
import { TaskFilesForClient, TaskFilesProps } from "../TaskFiles/types";

import { getTasks } from "../../services/tasks";
import { Icon } from "../Icon";
import { Button, BUTTON_SIZE, BUTTON_VARIABLE } from "../Button";

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

  const [filesTest, setFilesTest] = useState<TaskFilesProps[]>([]);

  const getFiles = async () => {
    const allTasks = await getTasks();
    const allFiles: TaskFilesForClient[] = allTasks
      .map((task) => task?.files)
      .flat()
      .filter((file) => file);
    setFiles(allFiles);
  };

  //тествая функция
  const getFilesTest = async () => {
    const allFiles: TaskFilesProps[] = [];
    const allTasks = await getTasks();
    allTasks.map(function (task) {
      task?.files.forEach((file) => {
        const fileNew: TaskFilesProps = {
          department: task.department,
          id: file.id,
          preview: file.preview,
          name: file.name,
          size: file.size,
          sizeSign: file.sizeSign,
          uploadedBy: file.uploadedBy,
          date: file.date,
        };
        allFiles.push(fileNew);
      });
    });
    
   
    console.log("allFiles", allFiles);
    setFilesTest(allFiles)
  };

 //Почему два раза
  console.log("filesTest", filesTest);


//почему без useEffect уходит функция в бесконечность ???
  useEffect(() => {
    getFilesTest();
  }, []);


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
  // const filteredFiles = handleSorting(filesTest, sort);

  const updateSortState = (newSort: Sort) => {
    setSort(newSort);
  };

  return (
    <div className="Files">
      <div className="Files__list">
        <div className="Files__list-line Files__list-line-header">
          <div>Image</div>
          <div>
            <span className="Files__search-icon">
              <Icon name="searchBlack" />
            </span>
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
                      <Icon name="arrowUp" />
                    </span>
                  ) : (
                    <span className="Files__arrow">
                      <Icon name="arrowDown" />
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
                      <Icon name="arrowUp" />
                    </span>
                  ) : (
                    <span className="Files__arrow">
                      <Icon name="arrowDown" />
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
                      <Icon name="arrowUp" />
                    </span>
                  ) : (
                    <span className="Files__arrow">
                      <Icon name="arrowDown" />
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
              {/* <div>{test[0].department}</div> */}
              <div></div>
              <div>
                <Button
                  size={BUTTON_SIZE.SMALL}
                  variable={BUTTON_VARIABLE.DEFAULT}
                  onClick={() => {}}
                >
                  Actions
                  <span className="Files__arrow">
                    <Icon name="arrowDown" />
                  </span>
                </Button>
              </div>
              <div>
                <a target="_blank" href={item.preview} download>
                  <Icon name="download" />
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
