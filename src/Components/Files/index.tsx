import React from 'react';
import './style.css';
import { TaskType } from '../Task/types';

interface FilesProps {
  tasks: TaskType[];
}

function Files({ tasks }: FilesProps) {
  //   console.log(tasks.filter((el) => el.files));

  const allFiles = tasks.map(function (item) {
    return item.files;
  });
  console.log(allFiles);
  
  return (
    <div className='files'>
      <table className='files__table'>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Size</th>
          <th>Uploaded By</th>
          <th>Tag</th>
          <th>Tag</th>
          <th>Date</th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
}

export { Files };
