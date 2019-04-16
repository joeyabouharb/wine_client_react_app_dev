import React from 'react';
import { ViewProvider } from '../../../contexts/formContext';
import Render from './Render';

const AddNote = () => (
  <ViewProvider>
    <Render />
  </ViewProvider>
);


export default AddNote;
