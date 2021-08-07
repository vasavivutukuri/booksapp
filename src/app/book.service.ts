import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) {

   }
   get(){
      return this.http.get("https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json")
   }
}
