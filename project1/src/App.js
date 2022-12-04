import { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people,setPeople]=useState(data);
  return (
    <main>
      {data}
      <List people={people}/>
    </main>
  );
}

export default App;
