import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from '../util.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { paginationConfig } from '../libraries.config';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  private movieSubscription: Subscription;
  public movieResults;
  public oldResults;
  public activeResultId = this.utilService.getActiveResultId();
  public itemsPerPage = paginationConfig.itemsPerPage;
  public currentPage = paginationConfig.currentPage;
  public itemsPerPageOptions = paginationConfig.itemsPerPageOptions;
  constructor(private utilService: UtilService,
    private router: Router) { }

  ngOnInit() {
    this.movieResults = this.utilService.getMovieSearchResults();
    this.oldResults = this.utilService.getOldMovieSearchResults();
    this.movieSubscription = this.utilService.movieUpdatesSubject.subscribe(data => {
      this.movieResults = this.utilService.getMovieSearchResults();
      this.oldResults = this.utilService.getOldMovieSearchResults();
    });
  }

  onResultClick(id: string) {
    this.utilService.setActiveResultId(id);
    this.activeResultId = id;
    this.router.navigate(['/search'], {queryParams: {id: id}});
  }

  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }

}
