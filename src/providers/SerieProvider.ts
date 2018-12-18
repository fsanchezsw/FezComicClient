import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Serie } from 'src/models/Serie';

@Injectable()
export class SerieProvider implements HttpMethodsInterface {

    basicUrl : string = 'http://localhost:8080/B3servidorREST/webresources/app.entities.serie/';

    constructor(private http: Http) {}

    

    all(): Observable<Serie[]> {
        
        
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json() }));
    }

    get(id: number): Observable<Serie> {
        
        return this.http.get(this.basicUrl + id).pipe(map(response => { return response.json() }));
    }

    put(id: number, serie: Serie): Observable<Serie> {
        
        return this.http.put(this.basicUrl + id, serie).pipe(map(response => { return response.json() }));
    }
    post(serie: Serie): Observable<Serie> {
        
        return this.http.post(this.basicUrl, serie).pipe(map(response => { return response.json() }));
    }
    delete(id: number): Observable<Serie> {
        
        return this.http.delete(this.basicUrl + id).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Serie> {
        
        return this.http.get(this.basicUrl + 'count').pipe(map(response => { return response.json() }));
    }
}