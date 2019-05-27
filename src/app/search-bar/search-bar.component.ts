import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppHttpService } from '../app-http.service';
import { UtilService } from '../util.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public searchQuery: string;
  constructor(private toastrService: ToastrService,
    private httpService: AppHttpService,
    private utilService: UtilService,
    private loaderService: NgxUiLoaderService) { }

  ngOnInit() {
  }

  onSearchMovie() {
    if (typeof this.searchQuery === 'undefined' || this.searchQuery === '') {
      this.toastrService.error('Query should not be empty');
      return;
    }
    this.loaderService.start();
    this.httpService.searchMoviesByTitle(this.searchQuery).subscribe(response => {
      if (response && response.Response === 'False') {
        this.toastrService.error(response.Error);
        this.loaderService.stop();
        return;
      }
      this.utilService.setMovieResults(response.Search);
      console.log(response);
      this.searchQuery = '';
      this.loaderService.stop();
    }, err => this.loaderService.stop());
  }
}
