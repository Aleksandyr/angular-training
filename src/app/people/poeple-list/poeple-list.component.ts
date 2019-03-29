import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-poeple-list',
  templateUrl: './poeple-list.component.html',
  styleUrls: ['./poeple-list.component.scss']
})
export class PoepleListComponent implements OnInit {

  public people: Person [];

  constructor(private apiSrvice: ApiService) {
    this.apiSrvice.people.subscribe(people => this.people = people);
  }

  ngOnInit() {
  }

}
