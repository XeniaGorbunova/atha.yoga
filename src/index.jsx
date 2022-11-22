import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './app/index.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyApp />);

