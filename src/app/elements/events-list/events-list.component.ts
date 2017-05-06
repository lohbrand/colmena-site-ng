import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {

  loading = true;
  items: any[] = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getEvents()
      .subscribe((res: any) => this.items = JSON.parse(res._body))
      .add(() => this.loading = false);
  }

}
