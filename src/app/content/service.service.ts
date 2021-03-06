import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const API_URl = 'http://localhost:5000'
const API_URl = 'https://creteciorenzo-nodemailer-express.glitch.me/api'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(`${API_URl}/contact`, data)
  }
}
