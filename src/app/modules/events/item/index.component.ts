import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class ItemComponent implements OnInit {
  loading = true;
  item: any[] = [];
  itemId: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {
    this.itemId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.apiService.getEvent(this.itemId)
      .subscribe((res: any) => this.item = JSON.parse(res._body))
      .add(() => this.loading = false);
  }

}
