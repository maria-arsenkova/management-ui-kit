import React from "react";
import "./style.scss";
import upload from "../Task/img/upload.svg";
// import {Slider} from "../Slider";
interface  TaskFileUploadProps {
    onChange: (event:any) => void;
    children:
        | React.ReactChildren
        | React.ReactChildren[]
        | React.ReactChild
        | React.ReactChild[];
}

const TaskFileUpload = ({onChange, children}: TaskFileUploadProps) =>  {
    return (
        <div className="TaskFileUpload__group">
            <label htmlFor={"file-upload"} className="TaskFileUpload">
                <img src={upload} className="TaskFileUpload__icon"  alt="File Upload"/> File Upload
            </label>
            <input
                type="file"
                onChange={onChange}
                className="TaskFileUpload__hidden"
                id={"file-upload"}
            />
            {children}
        </div>
    )
}

export  {TaskFileUpload}
