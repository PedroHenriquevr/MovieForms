import { IEscolha } from '../model/IEscolha.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EscolhasService {
  private URL: string = 'http://localhost:4000/novaTarefa';

  constructor(private http: HttpClient) {}

  escolhas(escolha: IEscolha): Observable<IEscolha> {
    return this.http
      .post<IEscolha>(this.URL, escolha)
      .pipe(map((retorno) => retorno));
  }
}
