import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './TicTacToe/TicTacToe';
import 'file-loader?name=[name].[ext]!./favicon.ico';

ReactDOM.render(
    <Game />,
    document.querySelector('#app')
);