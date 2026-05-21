import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchText = '';
  results: any[] = [];
  isLoading = false; 
  constructor(private http: HttpClient) {}

  onSearch() {
    if(this.searchText) {
      this.isLoading = true;
      this.results = [];
      this.http.get(`https://jsonplaceholder.typicode.com/posts?q=${this.searchText}`)
       .subscribe((data: any) => {
          this.results = data;
          this.isLoading = false;
        });
    }
  }
}
