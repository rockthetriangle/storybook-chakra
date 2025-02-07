
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component }) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component />
    </ChakraProvider>
  );
}

export default App;