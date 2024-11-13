import { Injectable } from "@angular/core";
// import {Database, set, ref, get } from '@angular/fire/database'
import { Database, set, ref, get, update, remove } from "firebase/database";
import { from, Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class FirebasePostService{
    constructor(private db: Database){}

    createPost(postId: string, title: string, content: string): Observable<void>{
        return from(set(ref(this.db, 'posts/' + postId), {title, content}));
    }

    getPosts(): Observable<any> {
        return from(get(ref(this.db, 'posts')));
    }

    updatePost(postId: string, title: string, content: string): Observable<void>{
        return from(update(ref(this.db, 'posts/' + postId), {title, content}));
    }

    deletePost(postId: string): Observable<void> {
        return from(remove(ref(this.db, 'posts/' + postId)));
    }
}