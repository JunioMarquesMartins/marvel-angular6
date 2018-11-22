import { Injectable } from '@angular/core';
@Injectable()

@Injectable({
  providedIn: 'root'
})
export class DataNotImageService {

  constructor() { }

  deleteNotImageFound(dataList: any) {
    for ( let i = 0; i <= dataList.length - 1; i++) {
      const url = dataList[i].thumbnail.path;
      const urlArray = url.split('/');
      const urlPop = urlArray.pop();
      (urlPop  === 'image_not_available') ? (dataList.splice(i, 1), i--) : console.log('Image');
    }
    return dataList;
  }

}
