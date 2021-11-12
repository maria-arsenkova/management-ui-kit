import React from "react";
import "./style.scss";
import upload from "../Task/img/upload.svg";
import {Slider} from "../Slider";

interface TaskFileUploadProps {
    onChange: (event: any) => void;
    isShowSlider: boolean;
}

const TaskFileUpload = ({onChange, isShowSlider}: TaskFileUploadProps) => {
    return (
        <div className="TaskFileUpload__group">
            <label htmlFor={"file-upload"} className="TaskFileUpload">
                <img src={upload} className="TaskFileUpload__icon" alt="File Upload"/> File Upload
            </label>
            <input
                type="file"
                onChange={onChange}
                className="TaskFileUpload__hidden"
                id={"file-upload"}
            />
            {isShowSlider && <Slider/>}
        </div>
    )
}

export {TaskFileUpload}
