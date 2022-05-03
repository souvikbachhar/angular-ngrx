import { Post } from "src/app/model/posts.model"

export interface PostsState{
    posts:Post[]
}

export const initialState : PostsState={
    posts:[
        {id:'1',title:'sample 1',description:'desc1'},
        {id:'2',title:'sample 2',description:'desc2'}
    ]
}