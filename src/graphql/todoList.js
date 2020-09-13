import { gql } from "graphql-request";

export const GET_TODOS = gql`
  query GET_TODOS {
    todoItems {
      id
      text
      isCompleted
    }
  }
`;

export const ADD_TODO = gql`
  mutation ADD_TODO($text: String!) {
    createTodoItem(data: { text: $text, isCompleted: false }) {
      text
      isCompleted
      id
    }
  }
`;

export const CHECK_TODO = gql`
  mutation CHECK_TODO($id: ID!, $check: Boolean) {
    updateTodoItem(where: { id: $id }, data: { isCompleted: $check }) {
      isCompleted
      text
      id
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DELETE_TODO($id: ID!) {
    deleteTodoItem(where: { id: $id }) {
      text
      id
      isCompleted
    }
  }
`;

export const DELETE_ALL_TODOS = gql`
  mutation DELETE_ALL_TODOS {
    deleteManyTodoItemsConnection(where: { isCompleted: true }) {
      edges {
        node {
          id
          text
          isCompleted
        }
      }
    }
  }
`;
