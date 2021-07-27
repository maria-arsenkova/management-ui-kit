import React, { useState, useEffect } from 'react';
import './style.css';
import { TaskFilesType } from '../TaskFiles/types';
import searchIcon from './img/searchIcon.svg';
import arrow from './img/arrow.svg';
import downloadIcon from './img/downloadIcon.svg';
import { getTasks } from '../../services/tasks';

interface Sort {
  sortBy: 'name' | 'size' | 'date' | 'uploadedBy';
  sortType: 'acs' | 'desc';
}

const INITIAL_SORT: Sort = {
  sortBy: 'name',
  sortType: 'acs',
};

function Files() {
  const [sort, setSort] = useState(INITIAL_SORT);
  const [files, setFiles] = useState<TaskFilesType[]>([]);

  const getFiles = async () => {
    const allTasks = await getTasks();
    const allFiles: TaskFilesType[] = allTasks
      .map((task) => task?.files)
      .flat()
      .filter((file) => file);
    setFiles(allFiles);
  };

  useEffect(() => {
    getFiles();
  }, []);

  const handleSorting = (
    files: TaskFilesType[],
    sort: Sort
  ): TaskFilesType[] => {
    const newFiles = files.sort((a, b) => {
      const x =
        typeof a[sort.sortBy] == 'string'
          ? a[sort.sortBy].toString().toLowerCase()
          : a[sort.sortBy];

      const y =
        typeof b[sort.sortBy] === 'string'
          ? b[sort.sortBy].toString().toLowerCase()
          : b[sort.sortBy];

      if (sort.sortType === 'acs') {
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
    <div className='files'>
      <div className='files__table'>
        <div className='files__table-title'>
          <div>Image</div>
          <div>
            <img src={searchIcon} alt='searchIcon' className='searchIcon' />
            <button
              onClick={() => {
                updateSortState({
                  sortBy: 'name',
                  sortType: sort.sortType === 'acs' ? 'desc' : 'acs',
                });
              }}
              className='button-sort'
            >
              Name
              {sort.sortBy === 'name' && (
                <>
                  {sort.sortType === 'acs' ? (
                    <img
                      alt='arrowUp'
                      src={arrow}
                      className='icon-arrow icon-arrow_up'
                    />
                  ) : (
                    <img alt='arrowDown' src={arrow} className='icon-arrow' />
                  )}
                </>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                updateSortState({
                  sortBy: 'size',
                  sortType: sort.sortType === 'acs' ? 'desc' : 'acs',
                });
              }}
              className='button-sort'
            >
              Size
              {sort.sortBy === 'size' && (
                <>
                  {sort.sortType === 'acs' ? (
                    <img
                      alt='arrowUp'
                      src={arrow}
                      className='icon-arrow icon-arrow_up'
                    />
                  ) : (
                    <img alt='arrowDown' src={arrow} className='icon-arrow' />
                  )}
                </>
              )}
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                updateSortState({
                  sortBy: 'uploadedBy',
                  sortType: sort.sortType === 'acs' ? 'desc' : 'acs',
                });
              }}
              className='button-sort'
            >
              Uploaded By
              {sort.sortBy === 'uploadedBy' && (
                <>
                  {sort.sortType === 'acs' ? (
                    <img
                      alt='arrowUp'
                      src={arrow}
                      className='icon-arrow icon-arrow_up'
                    />
                  ) : (
                    <img alt='arrowDown' src={arrow} className='icon-arrow' />
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
            <div className='files__table-body' key={`${item.id}_${item.name}`}>
              <div>
                <img
                  className='file-preview'
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
                <button className='button-actions'>
                  Actions
                  <img
                    src={arrow}
                    alt='arrow'
                    key={`${arrow}_${item.name}`}
                    className='icon-arrow'
                  />
                </button>
              </div>
              <div>
                <a target='_blank' href={item.preview} download>
                  <img
                    src={downloadIcon}
                    alt='downloadIcon'
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
