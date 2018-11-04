import { Injectable } from '@angular/core';


@Injectable()

@Injectable({
  providedIn: 'root'
})
export class DataNotImageService {

  constructor() { }

  deleteNotImageFound(dataList:any) {
    
    for(var i=0; i<=dataList.length-1; i++) {
      let url = dataList[i].thumbnail.path;
      let urlArray = url.split('/');
      let urlPop = urlArray.pop();
      if(urlPop  === 'image_not_available'){
        dataList.splice(i,1);
        i --;
      }
    }
    return dataList;
  }

}
