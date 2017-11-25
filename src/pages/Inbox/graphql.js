import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query {
    allMessages(
      orderBy: createdAt_ASC,
      filter: { to: "Hileo" }
    ) {
      id
      from
      to
      view
      viewAt
      createdAt
      subject
      text
    }
  }
`;

const subscription = gql`
  subscription onMessageAdded($to: String!) {
    Message(filter: {
      mutation_in: [CREATED],
      node: { to: $to }
    }) {
      node {
        id
        from
        to
        subject
        createdAt
        text
      }
    }
  }
`;


export const GraphQL = graphql(query, {
  props: props => ({
    ...props,
    subscriptionToMore: () => props.data.subscribeToMore({
      document: subscription,
      variables: { to: 'Hileo' },
      updateQuery: (prev, { subscriptionData: { data } }) => ({
        ...prev,
        allMessages: [...prev.allMessages, data.Message.node]
      })
    })
  })
});