import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FileService } from './file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'read-file-app';
  fileList$!: Observable<any>;
  constructor(private http: HttpClient, private fileService: FileService){
  }

//   getFiles(path: string): void{
//    this.fileList$ = this.http.post('http://localhost:3000/',{dirPath: path})
//    .pipe(map((data: any) => data.payload));
//   }
//   viewFiles():void{
//     //this.fileService.getFileList();
//  }
}
export interface Item { name: string; }
