import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FileUploaderService {

  constructor(private http : HttpClient) { }
  // My Students: please replace the post url below 
  fileUpload(file: FormData): Observable<any> {
    return this.http.post('http://ec2-184-73-147-60.compute-1.amazonaws.com/upload-ng', file);
  }

}