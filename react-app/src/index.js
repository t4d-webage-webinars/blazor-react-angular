import { createRoot } from 'react-dom/client';

import { ColorTool } from './components/ColorTool';

import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';

const cars = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'red', price: 48000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'blue', price: 120000 },
];

const root = createRoot(document.querySelector('#root'));
root.render(<>
  <ColorToolStoreProvider>
    <ColorTool headerText="Color Tool" />
  </ColorToolStoreProvider>
</>);