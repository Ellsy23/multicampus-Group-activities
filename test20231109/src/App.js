import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Forum from './component/Forum';
import PostDetails from './component/PostDetail';
import Prime from './component/Prime';
import Start from './component/Start';
import Test from './component/Test';
import Result from './component/Result';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/prime" element={<Prime />} />
          <Route path="/" element={<Start/>}/>
          <Route path="/Start" element={<Start />}/>
          <Route path="/Test" element={<Test />}/>
          <Route path="/Result" element={<Result />}/>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

