import * as React from 'react';
//import './ShowCountries.js';
//import './Data.js';

export default class CountriesPerContinent extends React.Component {
    render() {
        return (
        
            <div>
            
                <h1>Countries Per Continent</h1>
            
                Select a continent from the drop-down menu
                <br />
                The countries of the selected continent will be shown in a table.
                <br />
                <br />
    
                <select id="dropDownMenu">
                    <option value="">Select a Continent</option>
                </select>
                <br />
                <br />
    
                <div id="countries"></div>
    
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            
            </div>
            
        );
    }
    
}