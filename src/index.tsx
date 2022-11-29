import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Correspondence from './Correspondence';
import Footer from './Footer';
import './CorrespondenceMessages/body.css';
import './CorrespondenceMessages/nav.css';
import './CorrespondenceMessages/globalnav.css';
import './CorrespondenceMessages/components.css';
import './CorrespondenceMessages/containers.css';
import './CorrespondenceMessages/decorative.css';
import './CorrespondenceMessages/icons.css';

import './CorrespondenceMessages/polaris-global-css.css';

const root = ReactDOM.createRoot(
  document.getElementById("header-div-wrap") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const correspondence = ReactDOM.createRoot(
  document.getElementById("Correspondence-tsx") as HTMLElement
);

correspondence.render(
  <React.StrictMode>
    <Correspondence/>
  </React.StrictMode>
)

const footer = ReactDOM.createRoot(
  document.getElementById('console-nav-footer-inner') as HTMLElement
)

footer.render(
  <React.StrictMode>
    <Footer/>
  </React.StrictMode>
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
