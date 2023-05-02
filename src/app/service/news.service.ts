import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api_key = '9f685f2e990f4a7aa70e75c481f5b0c0';

  constructor(private _http : HttpClient) { }
  
  initSources() {
    return this._http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
  }


  initArticles() {
    return this._http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + this.api_key);
  }

  getArticlesByID(source: String) {
    return this._http.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }
}
