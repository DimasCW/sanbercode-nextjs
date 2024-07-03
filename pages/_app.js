import { ChakraProvider } from "@chakra-ui/react";
import { userContextProvider } from "@/contex/UserContext"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;