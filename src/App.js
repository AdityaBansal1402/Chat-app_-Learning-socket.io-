import React from 'react';
import Topbar from './Organism/Topbar';
import Chat from './Organism/Chat';
import Contact from './Organism/Contact';

const App = () => {
  return (
    <div className='overflow-y-hidden h-screen'>
      <Topbar />
      <div className='flex'>
        <div className='basis-1/4 min-w-60'>
          {/* Ensure Contact component is within its own scrollable container
          <div className='contact-container'> */}
            <Contact />
          {/* </div> */}
        </div>
        <div className='basis-3/4'>
          {/* Ensure Chat component is within its own scrollable container
          <div className='chat-container'> */}
            <Chat />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
