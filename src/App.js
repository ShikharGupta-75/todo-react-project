import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <div className='text-white col-10 col-md-6 mt-5 mx-auto'>
        {/* <Track /> */}
        <TodoList />
      </div>
    </>
  );
}

export default App;
