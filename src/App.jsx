import React, { useState } from 'react';
import ColourControl from './components/ColourControl';
import DescriptorSelectors from './components/DescriptorSelectors';
import VarietalControl from './components/VarietalControl';

const App = () => {
  const [colour, setColour] = useState('');
  const [varietal, setVarietal] = useState('');

  return (
    <div>
      <h1 className="text-center"> Hello! </h1>
      <p>
        {
          <ColourControl
            setColour={setColour}
            setVarietal={setVarietal}
          />
        }
      </p>
      <div>
        {
          <VarietalControl
            colour={colour}
            setVarietal={setVarietal}
          />
        }
      </div>
      <div>
        {
          <DescriptorSelectors
            varietal={varietal}
          />
        }
      </div>
    </div>
  );
};
export default App;
