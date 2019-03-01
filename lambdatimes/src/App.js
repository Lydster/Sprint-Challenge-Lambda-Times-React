import React from 'react';
import Login from './components/Login'
import PostsPage from './components/Content/PostsPage'
import withConditionalRender from './components/Content/withConditional'


const ToShow = withConditionalRender(PostsPage)(Login);


const App = () => {
  
  return (
    <div className="App">
      <ToShow />
    </div>
  );
}

export default App;
