import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from '../util.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  public isResultsExist = false;
  public sub: Subscription;
  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.checkIsResultsExist();
    this.sub = this.utilService.movieUpdatesSubject.subscribe(data => {
      this.checkIsResultsExist();
    });
  }
  checkIsResultsExist() {
    this.isResultsExist = ((this.utilService.getMovieSearchResults().length > 0) ||
      (this.utilService.getOldMovieSearchResults().length > 0)) ? true : false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
