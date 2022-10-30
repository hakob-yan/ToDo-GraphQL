import { gql } from "@apollo/client"


export const ADD_TO_DO = gql`
mutation createTodo($title:String!,$user_id:ID!,$completed:Boolean!) {
  createTodo(title:$title,user_id:$user_id,completed:$completed){
    user_id
    completed
    title
  }
}
`;
