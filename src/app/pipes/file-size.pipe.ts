import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'fileSize' })
export class FileSizeFormatterPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        const decimalPlace = args[0];
        return this._formatBytes(value, decimalPlace)
    }

    private _formatBytes(bytes: number, decimals = 2) {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        const unit = sizes[i];

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${unit}`
    }
}