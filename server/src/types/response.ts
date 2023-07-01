export interface Result {
    code: number;
    message: string;
}

export interface ResultEmailSendComplete {
    code: number;
    message: string;
    timeout: number;
}