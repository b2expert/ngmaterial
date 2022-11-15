import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "src/environments/environment";

@Pipe({
    name: 'filePath'
})
export class FilePathHandlerPipe implements PipeTransform {
    
    transform(value: any, ...args: any[]) {
        
        const baseUrl: string = environment.apiImageBaseUrl;
        const relativePath: string = value;
        const absPath: string = baseUrl + relativePath;

        return absPath;
    }

}