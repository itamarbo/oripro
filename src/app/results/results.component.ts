import { Component, OnInit } from '@angular/core';
import { FileUploaderService } from '../file-uploader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  taxinum;
  constructor(private fileUploaderService:FileUploaderService,private router: Router) { }

  ngOnInit(): void {

    // const textnum = "sdfsf";
    // console.log(this.taxinum)
    this.fileUploaderService.getNumber().subscribe(res => {
      console.log(res);
      console.log(res.result.Items);
      this.taxinum= res.result.Items;
      // console.log( this.fileUploaderService.saveNumber(this.taxinum)); 
    });
   

  }
  deletenum(textnum) {
    const delet = 
    {
        "file_name": textnum,
      
    };
    // const textnum = "sdfsf";
    console.log(textnum);
    // console.log(this.taxinum)
    console.log(delet);

    this.fileUploaderService.DeleteNumber(delet).subscribe(res => {
      console.log(res);
      console.log(textnum);

      // console.log( this.fileUploaderService.saveNumber(this.taxinum)); 
    });
    
  }
  
    
    
  

}
