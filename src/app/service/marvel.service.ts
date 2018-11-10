import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  baseUrl:string = 'https://gateway.marvel.com/v1/public/';
  apiKey:string = '71827f4b4a448fb6c993a2ff4d38c198';

  constructor(private http:HttpClient) { }
  // Characters GET
  getCharacters(offsetNumber,limitNumber){
    let charactersUrl:string = `${this.baseUrl}characters?apikey=${this.apiKey}&offset=${offsetNumber}&limit=${limitNumber}`;
    return this.http.get(charactersUrl);
  }
  getCharacterInfo(id) {
    let characterInfo:string = `${this.baseUrl}characters?apikey=${this.apiKey}&id=${id}`;
    return this.http.get(characterInfo);
  }
  getCurrentComicsCharacter(id) {
    let characterInfo:string = `${this.baseUrl}characters/${id}/comics?apikey=${this.apiKey}`;
    return this.http.get(characterInfo);
  }
  characterSerch(query) {
    let charactersUrl:string = `${this.baseUrl}characters?name=${query}&apikey=${this.apiKey}`;
    return this.http.get(charactersUrl);
  }
  // Comics GET
  getComics(offsetNumber,limitNumber){
    let comimcsUrl:string = `${this.baseUrl}comics?apikey=${this.apiKey}&offset=${offsetNumber}&limit=${limitNumber}`;
    return this.http.get(comimcsUrl);
  }
  getComicInfo(id) {
    let comicInfo:string = `${this.baseUrl}comics?apikey=${this.apiKey}&id=${id}`;
    return this.http.get(comicInfo);
  }


}
