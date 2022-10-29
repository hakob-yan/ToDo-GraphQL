import { gql } from "@apollo/client"


export const GET_TO_DOS = gql`
query AllToDos {
    allTodos{
        id
        title
        completed            
             }

}
`;
