import { ApolloClient, InMemoryCache, createHttpLink  } from '@apollo/client';

type Headers = {
    authorization?: string;
}

// set header
const getHeaders = () =>{
    const headers: Headers = {};
    const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
    if(token){
        headers.authorization = `Bearer ${token}`;
    }
    return headers;
}

// cache implementation
const cache = new InMemoryCache();
const uri = import.meta.env.VITE_GITHUB_API_URL;


const httpLink = createHttpLink({
    uri,
    fetch,
    headers: getHeaders(),
});

const apolloClient = new ApolloClient({
    cache,
    link: httpLink,
});

export { apolloClient };