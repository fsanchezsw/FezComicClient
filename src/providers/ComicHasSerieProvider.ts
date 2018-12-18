import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

import { ComicHasSerie } from 'src/models/ComicHasSerie';
import { Comic } from 'src/models/Comic';
import { Serie } from 'src/models/Serie';


@Injectable()
export class ComicHasSerieProvider {

    basicUrl : string = 'http://localhost:8080/B3servidorREST/webresources/app.entities.comichasserie/';

    constructor(private http: Http) {}

   
    

    all(): Observable<ComicHasSerie[]> {
        
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json() }));
    }

    getSerieByComic(id: number): Observable<Serie[]>{
        
        return this.http.get(this.basicUrl + 'serie/' + id).pipe(map(response => { return response.json() }));
    }

    get(idComic: number, idSerie : number): Observable<ComicHasSerie> {
        
        return this.http.get(this.basicUrl + 'comichaserie' +idComic + '/' + idSerie).pipe(map(response => { return response.json() }));
    }
    getComicsBySerie(id: number): Observable<Comic[]>{
        
        return this.http.get(this.basicUrl + 'comics/' + id).pipe(map(response => { return response.json() }));
    }

    put(id: number, comicHasSerie: ComicHasSerie): Observable<ComicHasSerie> {
        
        
        return this.http.put(this.basicUrl + id, comicHasSerie).pipe(map(response => { return response.json() }));
    }
    post(comicHasSerie: ComicHasSerie): Observable<ComicHasSerie> {
        
        return this.http.post(this.basicUrl, comicHasSerie).pipe(map(response => { return response.json() }));
    }
    delete(id: number): Observable<ComicHasSerie> {
        
        return this.http.delete(this.basicUrl + id).pipe(map(response => { return response.json() }));
    }

    count(): Observable<ComicHasSerie> {
        
        return this.http.get(this.basicUrl + 'count').pipe(map(response => { return response.json() }));
    }
}