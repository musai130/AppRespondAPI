import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: "root",
})
export class UsersService {

  url_user = 'https://reqres.in/api/users/'
  constructor(private http: HttpClient) {
  }
  getAll(url: string): Observable<any>{
    return this.http.get<any>(url);
  }
  deleteUser(id: number, url : string) {
    return this.http.delete(`${url}/${id}`)
  }
  editUser(id: number, content: any, url: string){
    return this.http.put(`${url}/${id}`, content)
  }
}
