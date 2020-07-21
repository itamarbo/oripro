import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from './../file-uploader.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  fileObj: File;
  fileUrl: string;
  errorMsg: boolean;
  title = 's3-file-uploader-app';

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
    this.fileUploaderService.fileUpload(fileForm).subscribe(res => {
      console.log(res);
      this.fileUrl = res['image'];
    });
  }

}

