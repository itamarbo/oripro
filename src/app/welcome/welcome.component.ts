import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from './../file-uploader.service';
import { Observable } from 'rxjs';
import { Aws } from '../interfaces/aws';
import { Router, ActivatedRoute } from '@angular/router';

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
  res:Array<Object>=[];
  dd$:Observable<any>;
  taxinum;
  length;
  lastdigits
  constructor(private fileUploaderService:FileUploaderService,private router: Router) {
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
    
  this.dd$= this.fileUploaderService.fileUpload(fileForm);
  this.dd$.subscribe(res => {
      this.res = res;
      
      console.log(this.dd$);
      console.log(res.data.TextDetections[0].DetectedText);
      this.taxinum= res.data.TextDetections[0].DetectedText;
      this.fileUrl = res['image'];
      console.log( this.fileUrl);
      // this.router.navigate(['/results']);
      this.length=  this.taxinum.toString().length;
      this.lastdigits = this.taxinum.substring(this.length - 2,this.length);
      console.log( this.taxinum.substring(this.length - 2,this.length));
      console.log( this.taxinum.toString().length)
      
    });
  }

}

