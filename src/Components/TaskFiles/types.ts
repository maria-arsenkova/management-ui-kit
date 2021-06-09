export type TaskFilesType = {
    id: string;
    preview?: string;
    name: string;
    size: number;
    sizeSign: "KB"|"MB"|"GB"|"ТB";
    uploadedBy: string;
    date: string;
}

