import { graphql } from "@/gql";

export const ProfilesQuery = graphql(`
  query Profiles {
    profilesCollection {
      edges {
        node {
          id
          full_name
        }
      }
    }
  }
`);
