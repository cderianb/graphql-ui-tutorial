import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import App from './App.vue'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://127.0.0.1:5000/graphql',
    // uri: 'https://rickandmortyapi.com/graphql'
})

const app = createApp({
    setup () {
    provide(DefaultApolloClient, apolloClient)
},

render: () => h(App),
})

app.mount('#app');