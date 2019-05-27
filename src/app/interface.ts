export interface Response {
    Response: string;
    Error?: string;
}

export interface MovieResultsResponse extends Response {
    Search?: [{
        Title: string,
        Year: number,
        Type: string,
        Poster?: string,
        imdbID: string
    }];
    totalResults?: string;
}

export interface MovieDetailsResponse extends Response {
    Title: string;
    Rated: string;
    Year: string;
    Runtime: string;
    Released: string;
    Type: string;
    Language: string;
    Genre: string;
    Ratings?: [{
        Source: string,
        Value: string
    }];
    Poster?: string;
    Plot?: string;
    Actors?: string;
    Director?: string;
    Writer?: string;
    Production?: string;
    imdbID?: string;
    imdbVotes?: string;
    imdbRating?: string;
    Metascore?: string;
    BoxOffice?: string;
    Country?: string;
    DVD?: string;
    Website?: string;
    Awards?: string;
}
