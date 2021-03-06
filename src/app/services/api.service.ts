import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _people: ReplaySubject<Person []>;
  private _endpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getPople() {
    return this.http.get<Person []>(`${this._endpoint}/people`);
  }

  public get people() {
    if (!this._people) {
      this._people = new ReplaySubject<Person []>(1);
      this.getPople().subscribe(people => this._people.next(people));
    }

    return this._people;
  }
}
