import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment as ENV } from '../environments/environment';

@Injectable()
export class BookService {
	private subject: BehaviorSubject<any>;

	constructor(private httpClient: HttpClient) {
		this.subject = new BehaviorSubject<any>([]);
	}

	public initialize() {
		this.httpClient.get(ENV.apiUrl).subscribe((data) => {
			this.subject.next(data);
		});
	}

	public get list(): Observable<Array<any>> {
		return this.subject.asObservable();
	}

}