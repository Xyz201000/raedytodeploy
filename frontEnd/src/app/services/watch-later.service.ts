import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchLaterService {

  constructor(private https:HttpClient) 
  {
  }
  addToReadLater(userName:any,vlogsId:any)
  {
    return this.https.get(`http://vishisht-dashboard.itcblogs.xyz/dashboard/setFav/${userName}/${vlogsId}`)
  }
  showFav(userName:any)
  {
    return this.https.get(`http://vishisht-dashboard.itcblogs.xyz/dashboard/showFav/${userName}`)
  }
  removeFav(userName:any,vlogsId:any)
  {
    return this.https.get(`http://vishisht-dashboard.itcblogs.xyz/dashboard/removeFav/${userName}/${vlogsId}`)
  }

}
