import { Component, OnInit, Inject } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { UtilService } from '../util.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from '../interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movieDetails;
  public movieId;
  public isResultsPresent = (this.utilService.getMovieSearchResults().length > 0
  || this.utilService.getOldMovieSearchResults().length > 0) ? true : false;
  constructor(private httpService: AppHttpService,
    private utilService: UtilService,
    private loaderService: NgxUiLoaderService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['id'];
      this.getMovieDetails();
      this.isResultsPresent = (this.utilService.getMovieSearchResults().length > 0
        || this.utilService.getOldMovieSearchResults().length > 0) ? true : false;
    });
  }

  public getMovieDetails() {
    this.loaderService.start();
    this.httpService.getMovieDetails(this.movieId).subscribe(response => {
      this.movieDetails = response;
      this.updateMovieDetailsData(response);
      this.utilService.toggleClassOnClick('.tabs-container li', 'active', '.content');
      this.loaderService.stop();
    }, err => this.loaderService.stop());
  }

  private updateMovieDetailsData(data: MovieDetailsResponse) {
    this.movieDetails.Cast = [];
    this.movieDetails.ImdbData = [];
    this.movieDetails.OtherInfo = [];
    this.checkPropExistsAndInject(data, this.movieDetails.Cast, 'Actors', 'Director', 'Production', 'Writer');
    this.checkPropExistsAndInject(data, this.movieDetails.ImdbData, 'imdbID', 'imdbVotes', 'imdbRating', 'Metascore');
    this.checkPropExistsAndInject(data, this.movieDetails.OtherInfo, 'BoxOffice', 'Country', 'DVD', 'Website', 'Awards');
  }

  private checkPropExistsAndInject(data, source, ...props) {
    props.forEach((key, i) => {
      if (data.hasOwnProperty(key)) {
        // tslint:disable-next-line:prefer-const
        let obj = {key: key, value: data[key]};
        source.push(obj);
      }
    });
  }
}
