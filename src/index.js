import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { CV } from './components/CV';

ReactDOM.render(<CV />, document.getElementById('root'));
registerServiceWorker();
