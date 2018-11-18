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
  getCharacterSerie(url) {
    let characterSerie:string = `${url}?apikey=${this.apiKey}`;
    return this.http.get(characterSerie);
  }
  getCharacterComic(url) {
    let characterComic:string = `${url}?apikey=${this.apiKey}`;
    return this.http.get(characterComic);
  }
  getCurrentComicsCharacter(id) {
    let characterInfo:string = `${this.baseUrl}characters/${id}/comics?apikey=${this.apiKey}`;
    return this.http.get(characterInfo);
  }
  getCurrentSeriesCharacter(id) {
    let comicsInfo:string = `${this.baseUrl}characters/${id}/series?apikey=${this.apiKey}`;
    return this.http.get(comicsInfo);
  }
  characterSearch(query) {
    let charactersUrl:string = `${this.baseUrl}characters?limit=40&nameStartsWith=${query}&apikey=${this.apiKey}`;
    return this.http.get(charactersUrl);
  }

  comicSearch(query) {
    let comicSearchUrl:string = `${this.baseUrl}comics?limit=40&titleStartsWith=${query}&apikey=${this.apiKey}`;
    return this.http.get(comicSearchUrl);
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
