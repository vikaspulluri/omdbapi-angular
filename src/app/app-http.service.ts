import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieResultsResponse, MovieDetailsResponse } from './interface';

@Injectable({
    providedIn: 'root'
})
export class AppHttpService {
    private config = environment;
    private apiUrl = `${this.config.apiUrl}/?apikey=${this.config.apiKey}`;
    constructor(private http: HttpClient) {}

    public searchMoviesByTitle(title: string) {
        return this.http.get<MovieResultsResponse>(`${this.apiUrl}&s=${title}`);
    }

    public getMovieDetails(id: string) {
        return this.http.get<MovieDetailsResponse>(`${this.apiUrl}&i=${id}`);
    }
}
