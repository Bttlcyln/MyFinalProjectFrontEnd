import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl ="https://localhost:44313/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPet = this.apiUrl +"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPet);  
      }

      getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
         let newPeth = this.apiUrl +"products/getbycategory?categoryId=" + categoryId
        return this.httpClient.get<ListResponseModel<Product>>(newPeth)  
          }

          add(product:Product):Observable<ResponseModel>{
            return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product)

          }
}
