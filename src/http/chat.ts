import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql(`
  mutation createMessage($data: CreateMessageDto!) {
    createMessage(data: $data) {
      id
      text
      user {
        id
        email
        name
      }
      room {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`);



export const GET_USER_CHATS = gql(`
  query getUserChats($userId: String!) {
    getUserChats(userId: $userId) {
      id
      name
      creator {
        id
        email
        name
      }
      members {
        id
        email
        name
      }
      createdAt
      updatedAt
    }
  }
`);
