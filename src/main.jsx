import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter as Router } from 'react-router-dom';

// Suspense - Outlet 
// Lazy loading- Suspense Kullanılır.
// Asenkron olan bir komponentimiz varsa kullanılır.
// React içerisinden gelir.


// Outlet - Kullanımı
//  Nested Url Mapping için kullanılır. - React Router Dom kütüphanesinden geliyor.

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
