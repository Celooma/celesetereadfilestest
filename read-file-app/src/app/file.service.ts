import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private filesList$ = new BehaviorSubject<any[]>([]);
  private userInput$ = new BehaviorSubject<string>('');
  private endPoint = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  searchFiles(folderPath: string, pageNumber = 1): void{
    let dirPath = (folderPath.slice(-1) !== '/') ? folderPath + '/' : folderPath;
    console.log(dirPath)
    this.UserInput = folderPath;
    this.http.post(this.endPoint,{dirPath, pageNumber})
    .subscribe({
      next: (data:any) => this.filesList$.next(data),
      error: (e) => this.filesList$.next(e.error)
    });

  }

  getFilesList(): Observable<any> {
     return this.filesList$;
  }

  get UserInput(): Observable<string>{
    return this.userInput$;
  }

  set UserInput(folderPath: any){
     this.userInput$.next(folderPath);
  }
}
