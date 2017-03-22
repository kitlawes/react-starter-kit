import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CountriesPerContinent from './CountriesPerContinent/CountriesPerContinent.js';
import 'file-loader?name=[name].[ext]!./favicon.ico';

ReactDOM.render(
    <CountriesPerContinent />,
    document.querySelector('#app')
);