import { gql } from "@apollo/client"


export const ADD_TO_DO = gql`
mutation createTodo($title:String!,$user_id:ID!,$completed:Boolean!) {
  createTodo(title:$title,user_id:$user_id,completed:$completed){
    user_id
    completed
    title
    id
  }
}
`;


export const UPDATE_TO_DO = gql`
mutation updateTodo($id:ID!,$completed:Boolean) {
    updateTodo(id:$id,completed:$completed){
    id
    completed
    title
     }
}
`;
export const REMOVE_TO_DO = gql`
mutation removeTodo($id:ID!) {
    removeTodo(id:$id){
    id
    completed
    title
     }
}
`;