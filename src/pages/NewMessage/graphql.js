import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const GraphQL = graphql(gql`
  mutation CreateMessage(
    $to: String!
    $from: String!
    $text: String!
    $subject: String!
  ) {
    createMessage(
      to: $to
      from: $from
      text: $text
      subject: $subject
    ) {
      id
      from
      text
    }
  }
`);