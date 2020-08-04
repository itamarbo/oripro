import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aws } from './interfaces/aws';
import { AwsRaw } from './interfaces/aws-raw';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class FileUploaderService {

  constructor(private http : HttpClient) { }

  // My Students: please replace the post url below 
  fileUpload(file: FormData): Observable<any> {
    return this.http.post('http://ec2-184-73-147-60.compute-1.amazonaws.com/upload-ng', file)
   
}

saveNumber(textnum:any): Observable<any> {
  return this.http.post('http://ec2-184-73-147-60.compute-1.amazonaws.com/setitem', textnum)
 
}

getNumber(): Observable<any> {
  return this.http.get('http://ec2-184-73-147-60.compute-1.amazonaws.com/getite')
 
}

DeleteNumber(textnum1:any): Observable<any> {
  return this.http.post('http://ec2-184-73-147-60.compute-1.amazonaws.com/deleteitem',textnum1)
 
}

}