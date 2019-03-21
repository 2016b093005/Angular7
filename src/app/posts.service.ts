import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()
export class PostsService {
    url:string='http://jsonplaceholder.typicode.com/posts';

    constructor(private http:HttpClient){
        
    }
    
    getPosts():Promise<any>{
        return this.http.get(this.url).toPromise()
            .then( data => data);

    }
}