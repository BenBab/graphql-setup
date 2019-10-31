const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Query {
    posts: [Post]
    post(id: ID!): Post
    launches: [Launch]!
    launch(id: ID!): Launch
    }

    type Post {
      id: ID!
      author: String
      body: String
    }

    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
      }
      
      type User {
        id: ID!
        email: String!
        trips: [Launch]!
      }
      
      type Mission {
        name: String
        missionPatch(size: PatchSize): String
      }
      
      enum PatchSize {
        SMALL
        LARGE
      }
`;

module.exports = typeDefs;