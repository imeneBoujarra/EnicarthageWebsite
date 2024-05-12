import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Publication } from '../model/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = '/api/publications';
choixmenu : string = 'A';
host: string = "http://localhost:8080";

public dataForm!: FormGroup;
listData!: Publication[];
  constructor(private http: HttpClient) { }

getData(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

createData(formData: FormData): Observable<any>{
  return this.http.post(`${this.baseUrl}`, formData);
}

updateData(id: number, value: any): Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, value);
}

deleteData(id: number): Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
}
getAll(): Observable<any>{
  return this.http.get(`${this.baseUrl}`);
}

uploadFile(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
  formdata.append('file', file);
  const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
      reportProgress: true,
      responseType: 'text'
  });

  return this.http.request(req);
 }
}
