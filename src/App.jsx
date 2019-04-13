import React, { useState } from 'react';
import FormViewSwitch from './components/FormViewSwitch';

const App = () => {
  const [colour, setColour] = useState('');
  const [varietal, setVarietal] = useState('');

  return (
    <>
      <h1 className="text-center"> Hello! </h1>

      <FormViewSwitch
        colour={colour}
        varietal={varietal}
        setColour={setColour}
        setVarietal={setVarietal}
      />

    </>
  );
};
export default App;
