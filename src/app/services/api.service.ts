import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const getApiUrl = (endpoint = '') => `https://colmena-cms.now.sh/api/v1/${endpoint}`;

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
  ) { }

  getModel(modelName) {
    return this.http.get(getApiUrl(modelName));
  }

  getModelItem(modelName, modelId) {
    const apiUrl = getApiUrl([modelName, modelId].join('/'))

    console.log(apiUrl)
    return this.http.get(apiUrl);
  }

  getEvents() {
    return this.getModel('Events');
  }

  getEvent(id) {
    console.log('getEvent', id)
    return this.getModelItem('Events', id);
  }

  getPosts() {
    return this.getModel('Posts');
  }

  getPost(id) {
    return this.getModelItem('Posts', id);
  }

  getPage(id) {
    return this.getModelItem('Pages', id);
  }

}
