import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  baseUrl = 'https://gateway.marvel.com/v1/public/';
  apiKey = '71827f4b4a448fb6c993a2ff4d38c198';

  constructor(private http: HttpClient) { }
  // Characters GET
  getCharacters(offsetNumber, limitNumber) {
    const charactersUrl = `${this.baseUrl}characters?apikey=${this.apiKey}&offset=${offsetNumber}&limit=${limitNumber}`;
    return this.http.get(charactersUrl);
  }
  getCharacterInfo(id) {
    const characterInfo = `${this.baseUrl}characters?apikey=${this.apiKey}&id=${id}`;
    return this.http.get(characterInfo);
  }
  getCharacterSerie(url) {
    const characterSerie = `${url}?apikey=${this.apiKey}`;
    return this.http.get(characterSerie);
  }
  getCharacterComic(url) {
    const characterComic = `${url}?apikey=${this.apiKey}`;
    return this.http.get(characterComic);
  }
  getCurrentComicsCharacter(id) {
    const characterInfo = `${this.baseUrl}characters/${id}/comics?apikey=${this.apiKey}`;
    return this.http.get(characterInfo);
  }
  getCurrentSeriesCharacter(id) {
    const comicsInfo = `${this.baseUrl}characters/${id}/series?apikey=${this.apiKey}`;
    return this.http.get(comicsInfo);
  }
  characterSearch(query, number, offset) {
    const charactersUrl = `${this.baseUrl}characters?limit=${number}&offset=${offset}&nameStartsWith=${query}&apikey=${this.apiKey}`;
    return this.http.get(charactersUrl);
  }

  comicSearch(query, number, offset) {
    const comicSearchUrl = `${this.baseUrl}comics?limit=${number}&offset=${offset}&titleStartsWith=${query}&apikey=${this.apiKey}`;
    return this.http.get(comicSearchUrl);
  }

  comicSearchTitleList(query, number, offset) {
    const comicSearchUrl = `${this.baseUrl}comics?limit=${number}&offset=${offset}&titleStartsWith=${query}&apikey=${this.apiKey}`;
    return this.http.get(comicSearchUrl);
  }
  // Comics GET
  getComics(offsetNumber, limitNumber) {
    const comimcsUrl = `${this.baseUrl}comics?apikey=${this.apiKey}&offset=${offsetNumber}&limit=${limitNumber}`;
    return this.http.get(comimcsUrl);
  }
  getComicInfo(id) {
    const comicInfo = `${this.baseUrl}comics?apikey=${this.apiKey}&id=${id}`;
    return this.http.get(comicInfo);
  }


}
