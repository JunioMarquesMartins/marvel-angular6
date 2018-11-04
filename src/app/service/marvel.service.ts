import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http:HttpClient) { }
  // Characters GET
  getCharacters(offsetNumber,limitNumber){
    let charactersUrl:string = `https://gateway.marvel.com/v1/public/characters?apikey=71827f4b4a448fb6c993a2ff4d38c198&offset=${offsetNumber}&limit=${limitNumber}`;
    return this.http.get(charactersUrl);
  }
  getCharacterInfo(id) {
    let characterInfo:string = `https://gateway.marvel.com/v1/public/characters?apikey=71827f4b4a448fb6c993a2ff4d38c198&id=${id}`;
    return this.http.get(characterInfo);
  }
  // Comics GET
  getComics(offsetNumber,limitNumber){
    let comimcsUrl:string = `https://gateway.marvel.com/v1/public/comics?apikey=71827f4b4a448fb6c993a2ff4d38c198&offset=${offsetNumber}&limit=${limitNumber}`;
    return this.http.get(comimcsUrl);
  }
  getComicInfo(id) {
    let comicInfo:string = `https://gateway.marvel.com/v1/public/comics?apikey=71827f4b4a448fb6c993a2ff4d38c198&id=${id}`;
    return this.http.get(comicInfo);
  }


}
