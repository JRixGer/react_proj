import { gql } from 'apollo-boost';

export default gql`
  query Sites {
    sites {
      name
      id
      menus {
        name
        menuType
      }
    }
  }
`;
