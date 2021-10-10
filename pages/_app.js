import React from 'react';
import { MoralisProvider } from 'react-moralis';
import {ChakraProvider} from "@chakra-ui/react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(

    <MoralisProvider appId="XEu7NpoUqsIKwOFPI1xnm5RuwCckn8QFDusfIbaA" serverUrl="https://e2s7tswf4xf4.moralishost.com:2053/server">
        <ChakraProvider>
         <Component {...pageProps} />
        </ChakraProvider> 
    </MoralisProvider>
  
  )

}

export default MyApp
