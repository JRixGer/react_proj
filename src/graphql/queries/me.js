import { gql } from 'apollo-boost';

export default gql`
  query me {
    me {
      userId
      lastname
      firstname
    }
  }
`;
