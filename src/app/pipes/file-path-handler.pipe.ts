import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filePath'
})
export class FilePathHandlerPipe implements PipeTransform {
    
    transform(value: any, ...args: any[]) {
        
        const baseUrl: string = 'https://ytc.beginner2expert.com/angular14/api/';
        const relativePath: string = value;
        const absPath: string = baseUrl + relativePath;

        return absPath;
    }

}