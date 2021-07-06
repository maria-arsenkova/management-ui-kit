import React, { useState, useEffect } from 'react';
import './style.css';
import { TaskFilesType } from '../TaskFiles/types';
import searchIcon from './img/searchIcon.svg';
import arrowIcon from './img/arrowIcon.svg';
import downloadIcon from './img/downloadIcon.svg';
import arrowUp from './img/arrowIcon rotated.svg';

interface FilesProps {
  files: TaskFilesType[];
}

interface Sort {
  sortBy: 'name' | 'size' | 'date' | 'uploadedBy';
  sortType: 'acs' | 'desc';
}

const INITIAL_SORT: Sort = {
  sortBy: 'name',
  sortType: 'acs',
};

function Files({ files }: FilesProps) {
  const [stateFiles, setStateFiles] = useState(files);
  const [sort, setSort] = useState(INITIAL_SORT);

  // console.log('stateFiles', stateFiles);

  const handleSorting = (files: TaskFilesType[], sort: Sort): void => {
    // @ts-ignore
    if (sort.sortBy == 'name') {
      if (sort.sortType == 'acs') {
        // ↑
       const newFiles =  stateFiles.sort((a, b) => {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        setStateFiles(newFiles);
      } else {
        // ↓
        // stateFiles.reverse();
      }
    }
    if (sort.sortBy == 'uploadedBy') {
      if (sort.sortType == 'acs') {
        console.log('uploadedBy');
      }
    }
  };

  useEffect(() => {
    handleSorting(stateFiles, sort);
  }, [sort]);

  const updateSortState = (newSort: Sort) => {
    setSort(newSort);
  };

  return (
    <div className='files'>
      <table className='files__table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>
              <img src={searchIcon} alt='searchIcon' className='searchIcon' />
              <button
                onClick={() => {
                  updateSortState({
                    sortBy: 'name',
                    sortType: sort.sortType === 'acs' ? 'desc' : 'acs',
                  });
                }}
              >
                Name
                {sort.sortType === 'acs' ? (
                  <img alt='arrowUp' src={arrowUp} className='arrow' />
                ) : (
                  <img alt='arrowDown' src={arrowIcon} className='arrow' />
                )}
              </button>
            </th>
            <th>Size</th>
            <th>
              <button
                onClick={() => {
                  updateSortState({
                    sortBy: 'uploadedBy',
                    sortType: sort.sortType === 'acs' ? 'desc' : 'acs',
                  });
                }}
                className='test'
              >
                Uploaded By
                {sort.sortType === 'acs' ? (
                  <img alt='arrowUp' src={arrowUp} className='arrow' />
                ) : (
                  <img alt='arrowDown' src={arrowIcon} className='arrow' />
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
          {stateFiles.map((item) => {
            return (
              <tr key={`${item.uploadedBy}_${item.name}`}>
                <td>
                  <img
                    className='table__img'
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
                  <button className='table__button'>
                    Actions{' '}
                    <img
                      src={arrowIcon}
                      alt='arrowIcon'
                      key={`${arrowIcon}_${item.name}`}
                    />
                  </button>
                </td>
                <td>
                  <a target='_blank' href={item.preview} download>
                    <img
                      src={downloadIcon}
                      alt='downloadIcon'
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
