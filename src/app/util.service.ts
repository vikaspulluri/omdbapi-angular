import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({providedIn: 'root'})
export class UtilService {
    private movieSearchResults = [];
    private oldSearchResults = [];
    private activeResultId;
    public movieUpdatesSubject = new Subject();

    constructor(@Inject(DOCUMENT) private document: HTMLDocument) {}

    public setMovieResults(data) {
        this.oldSearchResults = [...this.movieSearchResults, ...this.oldSearchResults];
        this.movieSearchResults = data;
        this.movieUpdatesSubject.next(true);
    }

    public getMovieSearchResults() {
        return this.movieSearchResults;
    }

    public getOldMovieSearchResults() {
        return this.oldSearchResults;
    }

    public toggleClassOnClick(selector, className, targetSelector) {
        const elements = this.document.querySelectorAll(selector);
        // tslint:disable-next-line:prefer-const
        elements.forEach((ele, i) => {
            ele.addEventListener('click', (e) => {
                this.removeClassName(className, elements);
                ele.classList.add(className);
                const targetId = ele.getAttribute('target-id');
                const targetElements = this.document.querySelector(targetSelector).childNodes;
                this.removeClassName(className, targetElements);
                this.document.getElementById(targetId).classList.add(className);
            });
        });
    }
    private removeClassName(className, elements) {
        elements.forEach((ele, i) => {
            ele.classList.remove(className);
        });
    }

    public setActiveResultId(id) {
        this.activeResultId = id;
    }
    public getActiveResultId() {
        return this.activeResultId;
    }
}
