import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9s5j01igq01xifn2idsy2/master',
    cache: new InMemoryCache()
})