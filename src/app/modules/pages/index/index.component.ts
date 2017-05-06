import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-index',
  template: `
    <h1>{{item.name}}</h1>
    <div [innerHtml]="item.content"></div>
  `,
})
export class IndexComponent implements OnInit {

  loading = true;
  item: any[] = [];
  itemId: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
    this.itemId = this.route.snapshot.data['id'];
  }

  ngOnInit() {
    this.apiService.getPage(this.itemId)
      .subscribe((res: any) => this.item = JSON.parse(res._body))
      .add(() => this.loading = false);
  }
}
