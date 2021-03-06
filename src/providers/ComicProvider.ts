import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpMethodsInterface } from './HttpMethodsInterface';
import { Comic } from 'src/models/Comic';

@Injectable()
export class ComicProvider implements HttpMethodsInterface {

    basicUrl : string = 'http://localhost:8080/B3servidorREST/webresources/app.entities.comic/';

    constructor(private http: Http) {}

    

    all(): Observable<Comic[]> {
        
        return this.http.get(this.basicUrl).pipe(map(response => { return response.json() }));
    }

    get(id: number): Observable<Comic> {
        
        return this.http.get(this.basicUrl + id).pipe(map(response => { return response.json() }));
    }
    getByNombre(nombre: string): Observable<Comic> {
        
        return this.http.get(this.basicUrl + 'nombre/' + nombre).pipe(map(response => { return response.json() }));
    }

    put(id: number, comic: Comic): Observable<Comic> {
        return this.http.put(this.basicUrl + id, comic).pipe(map(response => { return response.json() }));
    }
    post(comic: Comic): Observable<Comic> {
        
        return this.http.post(this.basicUrl, comic).pipe(map(response => { return response.json() }));
    }
    delete(id: number): Observable<Comic> {
        
        return this.http.delete(this.basicUrl + id).pipe(map(response => { return response.json() }));
    }

    count(): Observable<Comic> {
        
        return this.http.get(this.basicUrl + 'count').pipe(map(response => { return response.json() }));
    }
}