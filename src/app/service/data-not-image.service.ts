import { Injectable } from '@angular/core';


@Injectable()

@Injectable({
  providedIn: 'root'
})
export class DataNotImageService {

  constructor() { }

  deleteNotImageFound(charactersList:any) {
    
    for(var i=0; i<=charactersList.length-1; i++) {
      let url = charactersList[i].thumbnail.path;
      let urlArray = url.split('/');
      let urlPop = urlArray.pop();
      if(urlPop  === 'image_not_available'){
        charactersList.splice(i,1);
        i --;
      }
    }
    return charactersList;
  }

}
