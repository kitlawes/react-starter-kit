import * as React from 'react';

export default class CountriesPerContinent extends React.Component {

    constructor() {
        super();
        var countriesPerContinent = getCountriesPerContinent();
        this.state = {
            countriesPerContinent: countriesPerContinent,
            selectedContinent: 0
        };
        this.changeSelectedContinent = this.changeSelectedContinent.bind(this);
        this.changeSelectedContinent = this.changeSelectedContinent.bind(this.setState);
    }

    render() {
        return (
        
            <div>
            
                <h1>Countries Per Continent</h1>
            
                Select a continent from the drop-down menu
                <br />
                The countries of the selected continent will be shown in a table.
                <br />
                <br />
    
                <DropDownMenu state={this.state} changeSelectedContinent={this.changeSelectedContinent} />
                <br />
                <br />
    
                <Countries state={this.state} />
            
            </div>
            
        );
    }
    
    changeSelectedContinent(selectedContinent) {
        this.setState({selectedContinent: selectedContinent});
    }
    
}

export class DropDownMenu extends React.Component {

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    render() {
        
        var countriesPerContinent = this.props.state.countriesPerContinent;
        var continents = countriesPerContinent.map((continent, i) => {
            var text = countriesPerContinent[i].text;
            return (
                <option key={i + 1}>{text}</option>
            );
        });
        
        return (
            <select onChange={this.onChange}>
                <option key="0">Select a Continent</option>
                {continents}
            </select>
        );
        
    }
    
    onChange(event) {
        this.props.changeSelectedContinent(event.target.selectedIndex);
    }
      
}

export class Countries extends React.Component {

    render() {
        
        let countries;
        var selectedContinent = this.props.state.selectedContinent;
        if (selectedContinent > 0) {
            var countriesPerContinent = this.props.state.countriesPerContinent;
            var continent = countriesPerContinent[selectedContinent - 1];
            countries = continent.countries.map((country, i) => {
                var name = continent.countries[i].name;
                return (
                    <li key={i}>{name}</li>
                );
            });
        }
        
        return (
            <ul>{countries}</ul>
        );
        
    }
    
}

function getCountriesPerContinent() {
    return [
        {
            id:'worldContinentsAndOceans',
            text:'World Continents and Oceans',
            countries: [
                {name:'North America'},
                {name:'South America'},
                {name:'Africa'},
                {name:'Australia'},
                {name:'Europe'},
                {name:'Antarctica'},
                {name:'Indian Ocean'},
                {name:'Atlantic ocean'},
                {name:'Arctic ocean'},
                {name:'Southern ocean'},
                {name:'Pacific ocean'},
                {name:'Asia'}
            ]
        },
        {
            id:'africa',
            text:'Africa',
            countries: [
                {name:'Chad', question:'N’Djamena', map:'af'},
                {name:'Egypt', question:'Cairo', map:'af'},
                {name:'Sudan', question:'Khartoum', map:'af'},
                {name:'Niger', question:'Niamey', map:'af'},
                {name:'Nigeria', question:'Abuja', map:'af'},
                {name:'Republic of the Congo', question:'Brazzaville', map:'af'},
                {name:'Madagascar', question:'Antananarivo', map:'af'},
                {name:'South Africa', question:'Pretoria (executive capital)', map:'af'},
                {name:'Lesotho', question:'Maseru', map:'af'},
                {name:'Zimbabwe', question:'Harare', map:'af'},
                {name:'Democratic Republic of the Congo', question:'Kinshasa', shortName: 'DRC', map:'af'},
                {name:'Namibia', question:'Windhoek', map:'af'},
                {name:'Togo', question:'Lome', map:'af'},
                {name:'Ghana', question:'Accra', map:'af'},
                {name:'Equatorial Guinea', question:'Malabo', map:'af'},
                {name:'Guinea-Bissau', question:'Bissau', map:'af'},
                {name:'Sierra Leone', question:'Freetown', map:'af'},
                {name:'The Gambia', question:'Banjul', map:'af'},
                {name:'Liberia', question:'Monrovia', map:'af'},
                {name:'Senegal', question:'Dakar', map:'af'},
                {name:'Kenya', question:'Nairobi', map:'af'},
                {name:'Swaziland', question:'Mbabane', map:'af'},
                {name:'Rwanda', question:'Kigali', map:'af'},
                {name:'Burundi', question:'Bujumbura', map:'af'},
                {name:'Somalia', question:'Mogadishu', map:'af'},
                {name:'Tunisia', question:'Tunis', map:'af'},
                {name:'Cameroon', question:'Yaounde', map:'af'},
                {name:'Morocco', question:'Rabat', map:'af'},
                {name:'Western Sahara (disputed)', question:'El Aaiún', disputed: '1', map:'af'},
                {name:'Gabon', question:'Libreville', map:'af'},
                {name:'Mauritania', question:'Nouakchott', map:'af'},
                {name:'Mozambique', question:'Maputo', map:'af'},
                {name:'Djibouti', question:'Djibouti', map:'af'},
                {name:'Malawi', question:'Lilongwe', map:'af'},
                {name:'Central African Republic', question:'Bangui', map:'af'},
                {name:'Benin', question:'Porto-Novo', map:'af'},
                {name:'Eritrea', question:'Asmara', map:'af'},
                {name:'Ethiopia', question:'Addis Ababa', map:'af'},
                {name:'Burkina Faso', question:'Ouagadougou', map:'af'},
                {name:'Côte d’Ivoire (Ivory Coast)', question:'Yamoussoukro',shortName: 'Côte d’Ivoire', map:'af'},
                {name:'Zambia', question:'Lusaka', map:'af'},
                {name:'Angola', question:'Luanda', map:'af'},
                {name:'Botswana', question:'Gaborone', map:'af'},
                {name:'Libya', question:'Tripoli', map:'af'},
                {name:'Algeria', question:'Algiers', map:'af'},
                {name:'Mali', question:'Bamako', map:'af'},
                {name:'Guinea', question:'Conakry', map:'af'},
                {name:'Uganda', question:'Kampala', map:'af'},
                {name:'Tanzania', question:'Dodoma (* see notes)', map:'af'},
                {name:'Cabo Verde (Cape Verde)', question:'Praia', map:'af'},
                {name:'Sao Tome and Principe', question:'São Tomé', map:'af'},
                {name:'Seychelles', question:'Victoria', map:'af'},
                {name:'Comoros', question:'Moroni', map:'af'},
                {name:'Mauritius', question:'Port Louis', map:'af'},
                {name:'South Sudan', question:'Juba', map:'af'}
            ]
        },
        {
            id:'caribbeanIslands',
            text:'Caribbean Islands',
            countries: [
                {name:'Haiti', question:'Port-au-Prince'},
                {name:'Dominican Republic', question:'Santo Domingo'},
                {name:'Trinidad and Tobago', question:'Port-of-Spain'},
                {name:'Grenada', question:"St. George's"},
                {name:'St. Vincent and the Grenadines', question:'Kingstown'},
                {name:'Barbados', question:'Bridgetown'},
                {name:'Saint Lucia', question:'Castries'},
                {name:'Dominica', question:'Roseau'},
                {name:'Antigua', question:''},
                {name:'Barbuda', question:''},
                {name:'St. Kitts and Nevis', question:'Basseterre'},
                {name:'The Bahamas', question:'Nassau'},
                {name:'Jamaica', question:'Kingston'},
                {name:'Cuba', question:'Havana'},
                {name:'Aruba', question:''},
                {name:'Montserrat', question:''},
                {name: 'Cayman Islands', question: 'Georgetown'},
                {name: 'Puerto Rico', question: 'San Juan'},
                {name: 'Turks and Caicos', question: ''},
                {name: 'Bonaire', question: ''},
                {name: 'Curacao', question: ''},
                {name: 'Guadeloupe', question: ''},
                {name: 'Martinique', question: ''},
                {name: 'British Virgin Islands', question: ''},
                {name: 'US Virgin Islands', question: ''},
                {name: 'Anguilla', question: ''}
            ]
        },
        {
            id:'centralAmerica',
            text:'Central America',
            countries: [
                {name:'El Salvador', question:'San Salvador'},
                {name:'Nicaragua', question:'Managua'},
                {name:'Honduras', question:'Tegucigalpa'},
                {name:'Belize', question:'Belmopan'},
                {name:'Costa Rica', question:'San José'},
                {name:'Guatemala', question:'Guatemala City'},
                {name:'Panama', question:'Panama City'}
            ]
        },
        {
            id:'usaStates',
            text:'USA States',
            countries: [
                {name:'California', question:'Sacramento'},
                {name:'Louisiana', question:'Baton Rouge'},
                {name:'Michigan', question:'Lansing'},
                {name:'Colorado', question:'Denver'},
                {name:'North Carolina', question:'Raleigh'},
                {name:'Illinois', question:'Springfield'},
                {name:'Maryland', question:'Annapolis'},
                {name:'Kansas', question:'Topeka'},
                {name:'Massachusetts', question:'Boston'},
                {name:'New York', question:'Albany'},
                {name:'North Dakota', question:'Bismarck'},
                {name:'Arizona', question:'Phoenix'},
                {name:'Rhode Island', question:'Providence'},
                {name:'New Mexico', question:'Santa Fe'},
                {name:'Mississippi', question:'Jackson'},
                {name:'Florida', question:'Tallahassee'},
                {name:'Minnesota', question:'Saint Paul'},
                {name:'Alaska', question:'Juneau'},
                {name:'South Dakota', question:'Pierre'},
                {name:'Kentucky', question:'Frankfort'},
                {name:'Delaware', question:'Dover'},
                {name:'Ohio', question:'Columbus'},
                {name:'Texas', question:'Austin'},
                {name:'Arkansas', question:'Little Rock'},
                {name:'Missouri', question:'Jefferson City'},
                {name:'Vermont', question:'Montpelier'},
                 {name:'Indiana', question:'Indianapolis'},
                {name:'Oklahoma', question:'Oklahoma City'},
                {name:'Wyoming', question:'Cheyenne'},
                {name:'Hawaii', question:'Honolulu'},
                {name:'Connecticut', question:'Hartford'},
                {name:'Nebraska', question:'Lincoln'},
                {name:'Iowa', question:'Des Moines'},
                {name:'Alabama', question:'Montgomery'},
                {name:'Maine', question:'Augusta'},
                {name:'Idaho', question:'Boise'},
                {name:'South Carolina', question:'Columbia'},
                {name:'Georgia', question:'Atlanta'},
                {name:'Oregon', question:'Salem'},
                {name:'Virginia', question:'Richmond'},
                {name:'West Virginia', question:'Charleston'},
                {name:'New Hampshire', question:'Concord'},
                {name:'Washington', question:'Olympia'},
                {name:'Wisconsin', question:'Madison'},
                {name:'Utah', question:'Salt Lake City'},
                {name:'Montana', question:'Helena'},
                {name:'Tennessee', question:'Nashville'},
                {name:'New Jersey', question:'Trenton'},
                {name:'Pennsylvania', question:'Harrisburg'},
                {name:'Nevada', question:'Carson City'}
            ]
        },
        {
            id:'southAmerica',
            text:'South America',
            countries: [
                {name:'Brazil', question:'Brasília'},
                {name:'Argentina', question:'Buenos Aires'},
                {name:'Chile', question:'Santiago'},
                {name:'Uruguay', question:'Montevideo'},
                {name:'Paraguay', question:'Asunción'},
                {name:'Suriname', question:'Paramaribo'},
                {name:'Colombia', question:'Bogotá'},
                {name:'Peru', question:'Lima'},
                {name:'Guyana', question:'Georgetown'},
                {name:'Bolivia', question:'Sucre'},
                {name:'Ecuador', question:'Quito'},
                {name:'French Guiana (*France)', question:'Cayenne'},
                {name:'Venezuela', question:'Caracas'}
            ]
        },
        {
            id:'asia',
            text:'Asia',
            countries: [
                {name:'China', question:'Beijing', flag:'../flags/flag-imgs/China.gif',map:'as'},
                {name:'Sri Lanka', question:'Sri Jayawardenapura Kotte',flag:'../flags/flag-imgs/Sri_Lanka.gif', map:'as'},
                {name:'Bhutan', question:'Thimphu',flag:'../flags/flag-imgs/Bhutan.gif', map:'as'},
                {name:'Afghanistan', question:'Kabul',flag:'../flags/flag-imgs/Afghanistan.gif', map:'as'},
                {name:"Democratic People's Republic of Korea (North Korea)", question:'Pyongyang', shortName: 'North Korea', flag:'../flags/flag-imgs/North_Korea.gif',map:'as'},
                {name:'Laos', question:'Vientiane', flag:'../flags/flag-imgs/Laos.gif',map:'as'},
                {name:'Tajikistan', question:'Dushanbe', flag:'../flags/flag-imgs/Tajikistan.gif',map:'as'},
                {name:'Uzbekistan', question:'Tashkent', flag:'../flags/flag-imgs/Uzbekistan.gif',map:'as'},
                {name:'Malaysia', question:'Kuala Lumpur', flag:'../flags/flag-imgs/Malaysia.gif',map:'as'},
                {name:'Vietnam', question:'Hanoi', flag:'../flags/flag-imgs/Vietnam.gif',map:'as'},
                {name:'Thailand', question:'Bangkok', flag:'../flags/flag-imgs/Thailand.gif',map:'as'},
                {name:'Cambodia', question:'Phnom Penh', flag:'../flags/flag-imgs/Cambodia.gif',map:'as'},
                {name:'Nepal', question:'Kathmandu', flag:'../flags/flag-imgs/Nepal.gif',map:'as'},
                {name:'Russia', question:'Moscow', flag:'../flags/flag-imgs/Russia.gif',map:'as'},
                {name:'Pakistan', question:'Islamabad', flag:'../flags/flag-imgs/Pakistan.gif',map:'as'},
                {name:'Mongolia', question:'Ulan Bator', flag:'../flags/flag-imgs/Mongolia.gif',map:'as'},
                {name:'Kazakhstan', question:'Astana', flag:'../flags/flag-imgs/Kazakhstan.gif',map:'as'},
                {name:'India', question:'New Delhi', flag:'../flags/flag-imgs/India.gif',map:'as'},
                {name:'Philippines', question:'Manila', flag:'../flags/flag-imgs/Philippines.gif',map:'as'},
                {name:'Republic of Korea (South Korea)', question:'Seoul', shortName: 'South Korea', flag:'../flags/flag-imgs/South_Korea.gif',map:'as'},
                {name:'Bangladesh', question:'Dhaka', flag:'../flags/flag-imgs/Bangladesh.gif',map:'as'},
                {name:'Iran', question:'Tehran', flag:'../flags/flag-imgs/Iran.gif',map:'as'},
                {name:'Turkmenistan', question:'Ashgabat', flag:'../flags/flag-imgs/Turkmenistan.gif',map:'as'},
                {name:'Indonesia', question:'Jakarta', flag:'../flags/flag-imgs/Indonesia.gif',map:'as'},
                {name:'Japan', question:'Tokyo', flag:'../flags/flag-imgs/Japan.gif',map:'as'},
                {name:'Kyrgyzstan', question:'Bishkek', flag:'../flags/flag-imgs/Kyrgyzstan.gif',map:'as'},
                {name:'Myanmar (Burma)', question:'Naypyidaw', flag:'../flags/flag-imgs/Myanmar.gif',map:'as'},
                {name:'Taiwan (* disputed)', question:'Taipei',  disputed: '1', flag:'../flags/flag-imgs/Taiwan.gif',map:'as'},
                {name:'Brunei', question:'Bandar Seri Begawan', flag:'../flags/flag-imgs/Brunei.gif',map:'as'},
                {name:'Timor-Leste (East Timor)', question:'Dili', shortName: 'Timor-Leste', flag:'../flags/flag-imgs/East_Timor.gif',map:'as'},
                {name:'Singapore', question:'Singapore', flag:'../flags/flag-imgs/Singapore.gif',map:'as'},
                {name:'The Republic of Maldives', question:'Malé', shortName:'Maldives', flag:'../flags/flag-imgs/Maldives.gif',map:'as'},
                {name:'Afghanistan', question:'Kabul', flag:'../flags/flag-imgs/Afghanistan.gif',map:'m'},
                {name:'Armenia', question:'Yerevan', flag:'../flags/flag-imgs/Armenia.gif',map:'m'},
                {name:'Azerbaijan', question:'Baku', flag:'../flags/flag-imgs/Azerbaijan.gif',map:'m'},
                {name:'Cyprus', question:'Nicosia', flag:'../flags/flag-imgs/Cyprus.gif',map:'m'},
                {name:'Bahrain', question:'Manama',flag:'../flags/flag-imgs/Bahrain.gif', map:'m'},
                {name:'Kyrgyzstan', question:'Bishkek', flag:'../flags/flag-imgs/Kyrgyzstan.gif',map:'m'},
                {name:'Tajikistan', question:'Dushanbe', flag:'../flags/flag-imgs/Tajikistan.gif',map:'m'},
                {name:'Yemen', question:"Sana'a", flag:'../flags/flag-imgs/Yemen.gif',map:'m'},
                {name:'Georgia', question:'Tbilisi', flag:'../flags/flag-imgs/Georgia.gif',map:'m'},
                {name:'Iraq', question:'Baghdad', flag:'../flags/flag-imgs/Iraq.gif',map:'m'},
                {name:'Israel', question:'Jerusalem', flag:'../flags/flag-imgs/Israel.gif',map:'m'},
                {name:'Jordan', question:'Amman', flag:'../flags/flag-imgs/Jordan.gif',map:'m'},
                {name:'Kazakhstan', question:'Astana', flag:'../flags/flag-imgs/Kazakhstan.gif',map:'m'},
                {name:'Kuwait', question:'Kuwait City', flag:'../flags/flag-imgs/Kuwait.gif',map:'m'},
                {name:'Lebanon', question:'Beirut', flag:'../flags/flag-imgs/Lebanon.gif',map:'m'},
                {name:'Oman', question:'Muscat', flag:'../flags/flag-imgs/Oman.gif',map:'m'},
                {name:'Qatar', question:'Doha', flag:'../flags/flag-imgs/Qatar.gif',map:'m'},
                {name:'Pakistan', question:'Islamabad', flag:'../flags/flag-imgs/Pakistan.gif',map:'m'},
                {name:'Uzbekistan', question:'Tashkent', flag:'../flags/flag-imgs/Uzbekistan.gif',map:'m'},
                {name:'Saudi Arabia', question:'Riyadh', flag:'../flags/flag-imgs/Saudi_Arabia.gif',map:'m'},
                {name:'United Arab Emirates', question:'Abu Dhabi', flag:'../flags/flag-imgs/United_Arab_Emirates.gif',map:'m'},
                {name:'Turkmenistan', question:'Ashgabat', flag:'../flags/flag-imgs/Turkmenistan.gif',map:'m'},
                {name:'Syria', question:'Damascus', flag:'../flags/flag-imgs/Syria.gif',map:'m'},
                {name:'Turkey', question:'Ankara', flag:'../flags/flag-imgs/Turkey.gif',map:'m'},
                {name:'Palestine (* disputed)', question:'Jerusalem', shortName: 'Palestine', disputed: '1', flag:'../flags/flag-imgs/Palestine.gif',map:'m'}
            ]
        },
        {
            id:'theMiddleEast',
            text:'The Middle East',
            countries: [
                {name:'Afghanistan', question:'Kabul'},
                {name:'Armenia', question:'Yerevan'},
                {name:'Azerbaijan', question:'Baku'},
                {name:'Cyprus', question:'Nicosia'},
                {name:'Bahrain', question:'Manama'},
                {name:'Kyrgyzstan', question:'Bishkek'},
                {name:'Tajikistan', question:'Dushanbe'},
                {name:'Yemen', question:"Sana'a"},
                {name:'Georgia', question:'Atlanta'},
                {name:'Iran', question:'Tehran'},
                {name:'Iraq', question:'Baghdad'},
                {name:'Israel', question:'Jerusalem'},
                {name:'Jordan', question:'Amman'},
                {name:'Kazakhstan', question:'Astana'},
                {name:'Kuwait', question:'Kuwait City'},
                {name:'Lebanon', question:'Beirut'},
                {name:'Oman', question:'Muscat'},
                {name:'Qatar', question:'Doha'},
                {name:'Pakistan', question:'Islamabad'},
                {name:'Uzbekistan', question:'Tashkent'},
                {name:'Saudi Arabia', question:'Riyadh'},
                {name:'United Arab Emirates', question:'Abu Dhabi'},
                {name:'Turkmenistan', question:'Ashgabat'},
                {name:'Syria', question:'Damascus'},
                {name:'Turkey', question:'Ankara'},
                {name:'Palestine (* disputed)', question:'Jerusalem'}
            ]
        },
        {
            id:'oceaniaIslands',
            text:'Oceania Islands',
            countries: [
                {name:'Hawaii*'},
                {name:'Midway Islands*'},
                {name:'Johnston Atoll*'},
                {name:'Palmyra Atoll*'},
                {name:'Jarvis*'},
                {name:'Pitcairn Islands*'},
                {name:'Norfolk Island*'},
                {name:'French Polynesia*'},
                {name:'Cook Islands*'},
                {name:'Niue*'},
                {name:'Tonga'},
                {name:'Fiji'},
                {name:'Wallis and Futuna*'},
                {name:'American Samoa*'},
                {name:'Samoa'},
                {name:'Tokelau*'},
                {name:'Kiribati'},
                {name:'Tuvalu'},
                {name:'Marshall Islands'},
                {name:'Federated States of Micronesia'},
                {name:'Palau'},
                {name:'Guam*'},
                {name:'Northern Mariana Islands'},
                {name:'Wake Island*'},
                {name:'Papua New Guinea'},
                {name:'Nauru'},
                {name:'Solomon Islands'},
                {name:'Howland/Baker Islands*'},
                {name:'Vanuatu'},
                {name:'New Caledonia*'},
                {name:'New Zealand'},
                {name:'Australia'}
            ]
        },
        {
            id:'europe',
            text:'Europe',
            countries: [
                {name:'Ireland', question:'Dublin'},
                {name:'Cyprus', question:'Nicosia'},
                {name:'United Kingdom', question:'London'},
                {name:'France', question:'Paris'},
                {name:'Spain', question:'Madrid'},
                {name:'Portugal', question:'Lisbon'},
                {name:'Iceland', question:'Reykjavik'},
                {name:'Belgium', question:'Brussels'},
                {name:'Netherlands', question:'Amsterdam'},
                {name:'Luxembourg', question:'Luxemburg City'},
                {name:'Germany', question:'Berlin'},
                {name:'Switzerland', question:'Bern'},
                {name:'Italy', question:'Rome'},
                {name:'Denmark', question:'Copenhagen'},
                {name:'Austria', question:'Vienna'},
                {name:'Czech Republic', question:'Prague'},
                {name:'Norway', question:'Oslo'},
                {name:'Sweden', question:'Stockholm'},
                {name:'Finland', question:'Helsinki'},
                {name:'Slovenia', question:'Ljubljana'},
                {name:'Poland', question:'Warsaw'},
                {name:'Bosnia and Herzegovina', question:'Sarajevo'},
                {name:'Russia', question:'Moscow'},
                {name:'Lithuania', question:'Vilnius'},
                {name:'Latvia', question:'Riga'},
                {name:'Estonia', question:'Tallinn'},
                {name:'Belarus', question:'Minsk'},
                {name:'Ukraine', question:'Kyiv'},
                {name:'Hungary', question:'Budapest'},
                {name:'Croatia', question:'Zagreb'},
                {name:'Moldova', question:'Chișinău'},
                {name:'Romania', question:'Bucharest'},
                {name:'Slovakia', question:'Bratislava'},
                {name:'Albania', question:'Tirana'},
                {name:'Greece', question:'Athens'},
                {name:'Macedonia / F.Y.R.O.M. (* disputed name)', question:'Skopje'},
                {name:'Montenegro', question:'Podgorica'},
                {name:'Bulgaria', question:'Sofia'},
                {name:'Serbia', question:'Belgrade'},
                {name:'Turkey', question:'Ankara'},
                {name:'Vatican City', question:'Vatican City'},
                {name:'San Marino', question:'City of San Marino'},
                {name:'Monaco', question:'Monaco'},
                {name:'Malta', question:'Valletta'},
                {name:'Andorra', question:'Andorra la Vella'},
                {name:'Liechtenstein', question:'Vaduz'},
                {name:'Kosovo (* disputed)', question:'Pristina'}
            ]
        },
        {
            id:'ukCities',
            text:'UK Cities',
            countries: [
                {name:'Plymouth'},
                {name:'Exeter'},
                {name:'Bristol'},
                {name:'Portsmouth'},
                {name:'Brighton'},
                {name:'Dover'},
                {name:'London'},
                {name:'Oxford'},
                {name:'Gloucester'},
                {name:'Cambridge'},
                {name:'Norwich'},
                {name:'Birmingham'},
                {name:'Leicester'},
                {name:'Nottingham'},
                {name:'Sheffield'},
                {name:'Liverpool'},
                {name:'Manchester'},
                {name:'Leeds'},
                {name:'York'},
                 {name:'Newcastle'},
                {name:'Carlisle'},
                {name:'Cardiff'},
                {name:'Swansea'},
                {name:'Belfast'},
                {name:'Londonderry'},
                {name:'Edinburgh'},
                {name:'Glasgow'},
                {name:'Dundee'},
                {name:'Aberdeen'},
                {name:'Inverness'}
            ]
        }
    ];
}