
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function App() {
    return (
        <div className="chakra-container">
            <ChakraProvider>
                <Button colorScheme="blue">Hola, Chakra UI!</Button>
            </ChakraProvider>
        </div>
    );
}

export default App;
