import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from './../file-uploader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  fileObj: File;
  det: string;
  fileUrl: string;
  errorMsg: boolean;
  title = 's3-file-uploader-app';
  ddd$: Observable<any>;

  res:Array<Object>=[];

  constructor(private fileUploaderService:FileUploaderService) {
    this.errorMsg = false;
   }

  ngOnInit(): void {
  }

  onFilePicked(event: Event): void {

    this.errorMsg = false;
    console.log(event);
    const FILE = (event.target as HTMLInputElement).files[0];
    this.fileObj = FILE;
    console.log(this.fileObj);
  }
  
  onFileUpload() {

    if (!this.fileObj) {
      this.errorMsg = true;
      return
    }
    
    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.ddd$= this.fileUploaderService.fileUpload(fileForm);
    // console.log(this.ddd$);
    this.fileUploaderService.fileUpload(fileForm).subscribe(res => {
      this.res = res;
      console.log(this.res);
      // this.ddd$ = res;
      // console.log(this.ddd$);
      this.fileUrl = res['image'];
      console.log( this.fileUrl);
      
    });
  }

}

