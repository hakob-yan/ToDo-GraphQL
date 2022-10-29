import { gql } from "@apollo/client"


export const GET_TO_DOS = gql`
query MY {
  Todo(id:1){
    id
    completed
  }
}
`;
