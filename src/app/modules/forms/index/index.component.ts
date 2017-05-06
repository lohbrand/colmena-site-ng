import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent {

  formId: string;

  constructor(private route: ActivatedRoute) {
    this.formId = this.route.snapshot.data['formId'];
  }

}
