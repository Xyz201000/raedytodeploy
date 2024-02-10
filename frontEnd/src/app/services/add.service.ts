import { Injectable } from '@angular/core';
import { CardComponent } from '../component/dashboard/card/card.component';
import { BlogsService } from './blogs.service';
import { HttpClient } from '@angular/common/http';
import { comment } from '../model/blogger/comment';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  constructor(private blgs:BlogsService,private http:HttpClient) { }
  addComments(info:comment)
  {
    return this.http.post(`http://vishisht-dashboard.itcblogs.xyz/dashboard/addComment`,info)
  }
  showComments(id:string)
  {
    return this.http.get(`http://vishisht-dashboard.itcblogs.xyz/dashboard/getComments/${id}`)
  }
}

