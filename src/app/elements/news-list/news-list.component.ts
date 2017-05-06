import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
})
export class NewsListComponent implements OnInit {

  loading = true;
  items: any[] = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getPosts()
      .subscribe((res: any) => this.items = JSON.parse(res._body))
      .add(() => this.loading = false);
  }

}
