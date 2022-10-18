import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FileService } from './file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
})
export class FileListComponent implements OnInit {
  filesResult$!: Observable<any>;
  inputSubscription$!:Subscription;
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.filesResult$ = this.fileService.getFilesList();
  }

  viewFiles(path: string): void{
    this.fileService.searchFiles(path);
    window.scrollTo(0,0);
  }

  async changePage(pageNumber: number): Promise<void>{
    let folderPath = '';
    this.inputSubscription$ = await this.fileService.UserInput.subscribe(val => folderPath = val);
   this.fileService.searchFiles(folderPath, pageNumber);
   window.scrollTo(0,0);
  }

  ngOnDestroy(): void{
    if(this.inputSubscription$) this.inputSubscription$.unsubscribe();
  }

  convertTime(timestamp:number): string{
    return (timestamp == 0) ? 'unknown' : new Date(timestamp).toLocaleDateString("en-US");
  }

}
