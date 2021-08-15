export enum SIZE_SIGN {
    BYTES = "BYTES",
    KB = "KB",
    MB = "MB",
    GB = "GB",
    TB = "TB",
}

export type TaskFilesType = {
    preview?: string;
    name: string;
    size: number;
    sizeSign: SIZE_SIGN;
    uploadedBy: string;
    date: string;
}

export interface TaskFilesForClient extends TaskFilesType {
    id: string;
}