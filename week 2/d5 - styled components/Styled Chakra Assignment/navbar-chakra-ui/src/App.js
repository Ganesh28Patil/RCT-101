import {  Divider, Flex, Text } from '@chakra-ui/react';
import './App.css';
import Feature from './component/Feature';
import Login from './component/Login';

function App() {
  return (
    <>
    <div className="App">
      <Flex justify='space-between'>
       <Flex gap='3' justify='space-between'>
          <Text fontWeight='bold' fontSize='s'>Logo</Text>
          <Feature  />
       </Flex>
        <Login  />
      </Flex>
     
    </div>
    <Divider />
    </>
  );
}

export default App;
