import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FileService } from './file.service';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-file',
  templateUrl: './search-file.component.html',
})
export class SearchFileComponent implements OnInit {
  userInput!:string;
  userInput$!:Observable<string>;
  inputSubscription$!:Subscription;
  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.inputSubscription$ = this.fileService.UserInput.subscribe(val => this.userInput = val);
  }

  searchFiles(): void{
    this.fileService.searchFiles(this.userInput);
  }

  ngOnDestroy(): void{
    if(this.inputSubscription$) this.inputSubscription$.unsubscribe();

  }
}
