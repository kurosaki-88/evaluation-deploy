import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	books: Array<any>;
	animate: boolean;

	constructor(private bookService: BookService) {
		this.books = new Array();
		this.animate = false;
	}

	ngOnInit() {
		this.bookService.initialize();
		this.bookService.list.subscribe((books) => {
			this.books = books;
		});
	}
}
