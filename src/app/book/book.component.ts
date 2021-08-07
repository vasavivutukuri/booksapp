import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book:any;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {

    this.bookService.get().subscribe(
      (response:any) => {
          console.log(response);
           this.book = response['ISBN:9780980200447'];
           console.log(this.book);
      }
    )

  }

}
