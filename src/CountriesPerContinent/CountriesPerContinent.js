import * as React from 'react';

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
    
                <DropDownMenu />
                <br />
                <br />
    
                <Countries />
    
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            
            </div>
            
        );
    }
    
}

export class DropDownMenu extends React.Component {

    constructor() {
        super();
        var countriesPerContinent = getCountriesPerContinent();
        this.state = {countriesPerContinent: countriesPerContinent};
    }
  
    render() {
        
        const countriesPerContinent = this.state.countriesPerContinent;
        const continents = countriesPerContinent.map((continent, i) => {
            const value = countriesPerContinent[i].value;
            const text = countriesPerContinent[i].text;
            return (
                <option key={i} value={value}>{text}</option>
            );
        });
        
        return (
            <select id="dropDownMenu">
                <option value="">Select a Continent</option>
                {continents}
            </select>
        );
        
    }
    
}

export class Countries extends React.Component {
    render() {
        return (
            <div id="countries"></div>
        );
    }
    
}

function getCountriesPerContinent() {
    return [
        {
            id:'worldContinentsAndOceans',
            text:'World Continents and Oceans',
            countries: {
                na: {name:'North America'},
                sa: {name:'South America'},
                af: {name:'Africa'},
                au: {name:'Australia'},
                eu: {name:'Europe'},
                an: {name:'Antarctica'},
                io: {name:'Indian Ocean'},
                at: {name:'Atlantic ocean'},
                ar: {name:'Arctic ocean'},
                so: {name:'Southern ocean'},
                pa: {name:'Pacific ocean'},
                as: {name:'Asia'}
            }
        },
        {
            id:'africa',
            text:'Africa',
            countries: {
                TCD: {name:'Chad', question:'N’Djamena', map:'af'},
                EGY: {name:'Egypt', question:'Cairo', map:'af'},
                SDN: {name:'Sudan', question:'Khartoum', map:'af'},
                NER: {name:'Niger', question:'Niamey', map:'af'},
                NGA: {name:'Nigeria', question:'Abuja', map:'af'},
                COG: {name:'Republic of the Congo', question:'Brazzaville', map:'af'},
                MDG: {name:'Madagascar', question:'Antananarivo', map:'af'},
                ZAF: {name:'South Africa', question:'Pretoria (executive capital)', map:'af'},
                LSO: {name:'Lesotho', question:'Maseru', map:'af'},
                ZWE: {name:'Zimbabwe', question:'Harare', map:'af'},
                COD: {name:'Democratic Republic of the Congo', question:'Kinshasa', shortName: 'DRC', map:'af'},
                NAM: {name:'Namibia', question:'Windhoek', map:'af'},
                TGO: {name:'Togo', question:'Lome', map:'af'},
                GHA: {name:'Ghana', question:'Accra', map:'af'},
                GNQ: {name:'Equatorial Guinea', question:'Malabo', map:'af'},
                GNB: {name:'Guinea-Bissau', question:'Bissau', map:'af'},
                SLE: {name:'Sierra Leone', question:'Freetown', map:'af'},
                GMB: {name:'The Gambia', question:'Banjul', map:'af'},
                LBR: {name:'Liberia', question:'Monrovia', map:'af'},
                SEN: {name:'Senegal', question:'Dakar', map:'af'},
                KEN: {name:'Kenya', question:'Nairobi', map:'af'},
                SWZ: {name:'Swaziland', question:'Mbabane', map:'af'},
                RWA: {name:'Rwanda', question:'Kigali', map:'af'},
                BDI: {name:'Burundi', question:'Bujumbura', map:'af'},
                SOM: {name:'Somalia', question:'Mogadishu', map:'af'},
                TUN: {name:'Tunisia', question:'Tunis', map:'af'},
                CMR: {name:'Cameroon', question:'Yaounde', map:'af'},
                MAR: {name:'Morocco', question:'Rabat', map:'af'},
                ESH: {name:'Western Sahara (disputed)', question:'El Aaiún', disputed: '1', map:'af'},
                GAB: {name:'Gabon', question:'Libreville', map:'af'},
                MRT: {name:'Mauritania', question:'Nouakchott', map:'af'},
                MOZ: {name:'Mozambique', question:'Maputo', map:'af'},
                DJI: {name:'Djibouti', question:'Djibouti', map:'af'},
                MWI: {name:'Malawi', question:'Lilongwe', map:'af'},
                CAF: {name:'Central African Republic', question:'Bangui', map:'af'},
                BEN: {name:'Benin', question:'Porto-Novo', map:'af'},
                ERI: {name:'Eritrea', question:'Asmara', map:'af'},
                ETH: {name:'Ethiopia', question:'Addis Ababa', map:'af'},
                BFA: {name:'Burkina Faso', question:'Ouagadougou', map:'af'},
                CIV: {name:'Côte d’Ivoire (Ivory Coast)', question:'Yamoussoukro',shortName: 'Côte d’Ivoire', map:'af'},
                ZMB: {name:'Zambia', question:'Lusaka', map:'af'},
                AGO: {name:'Angola', question:'Luanda', map:'af'},
                BWA: {name:'Botswana', question:'Gaborone', map:'af'},
                LBY: {name:'Libya', question:'Tripoli', map:'af'},
                DZA: {name:'Algeria', question:'Algiers', map:'af'},
                MLI: {name:'Mali', question:'Bamako', map:'af'},
                GIN: {name:'Guinea', question:'Conakry', map:'af'},
                UGA: {name:'Uganda', question:'Kampala', map:'af'},
                TZA: {name:'Tanzania', question:'Dodoma (* see notes)', map:'af'},
                CPV: {name:'Cabo Verde (Cape Verde)', question:'Praia', map:'af'},
                STP: {name:'Sao Tome and Principe', question:'São Tomé', map:'af'},
                SYC: {name:'Seychelles', question:'Victoria', map:'af'},
                COM: {name:'Comoros', question:'Moroni', map:'af'},
                MUS: {name:'Mauritius', question:'Port Louis', map:'af'},
                SSD: {name:'South Sudan', question:'Juba', map:'af'}
            }
        },
        {
            id:'caribbeanIslands',
            text:'Caribbean Islands',
            countries: {
                HTI: {name:'Haiti', question:'Port-au-Prince'},
                DOM: {name:'Dominican Republic', question:'Santo Domingo'},
                TTO: {name:'Trinidad and Tobago', question:'Port-of-Spain'},
                GRD: {name:'Grenada', question:"St. George's"},
                VCT: {name:'St. Vincent and the Grenadines', question:'Kingstown'},
                BRB: {name:'Barbados', question:'Bridgetown'},
                LCA: {name:'Saint Lucia', question:'Castries'},
                DMA: {name:'Dominica', question:'Roseau'},
                ATG: {name:'Antigua', question:''},
                ATG2: {name:'Barbuda', question:''},
                KNA: {name:'St. Kitts and Nevis', question:'Basseterre'},
                BHS: {name:'The Bahamas', question:'Nassau'},
                JAM: {name:'Jamaica', question:'Kingston'},
                CUB: {name:'Cuba', question:'Havana'},
                ABW: {name:'Aruba', question:''},
                MSR: {name:'Montserrat', question:''},
                CYM: {name: 'Cayman Islands', question: 'Georgetown'},
                PRI: {name: 'Puerto Rico', question: 'San Juan'},
                TCA: {name: 'Turks and Caicos', question: ''},
                BES: {name: 'Bonaire', question: ''},
                CUW: {name: 'Curacao', question: ''},
                GLP: {name: 'Guadeloupe', question: ''},
                MTQ: {name: 'Martinique', question: ''},
                VGB: {name: 'British Virgin Islands', question: ''},
                VIR: {name: 'US Virgin Islands', question: ''},
                AIA: {name: 'Anguilla', question: ''}
            }
        },
        {
            id:'centralAmerica',
            text:'Central America',
            countries: {
                SLV: {name:'El Salvador', question:'San Salvador'},
                NIC: {name:'Nicaragua', question:'Managua'},
                HND: {name:'Honduras', question:'Tegucigalpa'},
                BLZ: {name:'Belize', question:'Belmopan'},
                CRI: {name:'Costa Rica', question:'San José'},
                GTM: {name:'Guatemala', question:'Guatemala City'},
                PAN: {name:'Panama', question:'Panama City'}
            }
        },
        {
            id:'usaStates',
            text:'USA States',
            countries: {
                ca: {name:'California', question:'Sacramento'},
                la: {name:'Louisiana', question:'Baton Rouge'},
                mi: {name:'Michigan', question:'Lansing'},
                co: {name:'Colorado', question:'Denver'},
                nc: {name:'North Carolina', question:'Raleigh'},
                il: {name:'Illinois', question:'Springfield'},
                md: {name:'Maryland', question:'Annapolis'},
                ks: {name:'Kansas', question:'Topeka'},
                ma: {name:'Massachusetts', question:'Boston'},
                ny: {name:'New York', question:'Albany'},
                nd: {name:'North Dakota', question:'Bismarck'},
                az: {name:'Arizona', question:'Phoenix'},
                ri: {name:'Rhode Island', question:'Providence'},
                nm: {name:'New Mexico', question:'Santa Fe'},
                ms: {name:'Mississippi', question:'Jackson'},
                fl: {name:'Florida', question:'Tallahassee'},
                mn: {name:'Minnesota', question:'Saint Paul'},
                ak: {name:'Alaska', question:'Juneau'},
                sd: {name:'South Dakota', question:'Pierre'},
                ky: {name:'Kentucky', question:'Frankfort'},
                de: {name:'Delaware', question:'Dover'},
                oh: {name:'Ohio', question:'Columbus'},
                tx: {name:'Texas', question:'Austin'},
                ar: {name:'Arkansas', question:'Little Rock'},
                mo: {name:'Missouri', question:'Jefferson City'},
                vt: {name:'Vermont', question:'Montpelier'},
                ind: {name:'Indiana', question:'Indianapolis'},
                ok: {name:'Oklahoma', question:'Oklahoma City'},
                wy: {name:'Wyoming', question:'Cheyenne'},
                hi: {name:'Hawaii', question:'Honolulu'},
                ct: {name:'Connecticut', question:'Hartford'},
                ne: {name:'Nebraska', question:'Lincoln'},
                ia: {name:'Iowa', question:'Des Moines'},
                al: {name:'Alabama', question:'Montgomery'},
                me: {name:'Maine', question:'Augusta'},
                id: {name:'Idaho', question:'Boise'},
                sc: {name:'South Carolina', question:'Columbia'},
                ga: {name:'Georgia', question:'Atlanta'},
                or: {name:'Oregon', question:'Salem'},
                va: {name:'Virginia', question:'Richmond'},
                wv: {name:'West Virginia', question:'Charleston'},
                nh: {name:'New Hampshire', question:'Concord'},
                wa: {name:'Washington', question:'Olympia'},
                wi: {name:'Wisconsin', question:'Madison'},
                ut: {name:'Utah', question:'Salt Lake City'},
                mt: {name:'Montana', question:'Helena'},
                tn: {name:'Tennessee', question:'Nashville'},
                nj: {name:'New Jersey', question:'Trenton'},
                pa: {name:'Pennsylvania', question:'Harrisburg'},
                nv: {name:'Nevada', question:'Carson City'}
            }
        },
        {
            id:'southAmerica',
            text:'South America',
            countries: {
                BRA: {name:'Brazil', question:'Brasília'},
                ARG: {name:'Argentina', question:'Buenos Aires'},
                CHL: {name:'Chile', question:'Santiago'},
                URY: {name:'Uruguay', question:'Montevideo'},
                PRY: {name:'Paraguay', question:'Asunción'},
                SUR: {name:'Suriname', question:'Paramaribo'},
                COL: {name:'Colombia', question:'Bogotá'},
                PER: {name:'Peru', question:'Lima'},
                GUY: {name:'Guyana', question:'Georgetown'},
                BOL: {name:'Bolivia', question:'Sucre'},
                ECU: {name:'Ecuador', question:'Quito'},
                GUF: {name:'French Guiana (*France)', question:'Cayenne'},
                VEN: {name:'Venezuela', question:'Caracas'}
            }
        },
        {
            id:'asia',
            text:'Asia',
            countries: {
                CHN: {name:'China', question:'Beijing', flag:'../flags/flag-imgs/China.gif',map:'as'},
                LKA: {name:'Sri Lanka', question:'Sri Jayawardenapura Kotte',flag:'../flags/flag-imgs/Sri_Lanka.gif', map:'as'},
                BTN: {name:'Bhutan', question:'Thimphu',flag:'../flags/flag-imgs/Bhutan.gif', map:'as'},
                AFG: {name:'Afghanistan', question:'Kabul',flag:'../flags/flag-imgs/Afghanistan.gif', map:'as'},
                PRK: {name:"Democratic People's Republic of Korea (North Korea)", question:'Pyongyang', shortName: 'North Korea', flag:'../flags/flag-imgs/North_Korea.gif',map:'as'},
                LAO: {name:'Laos', question:'Vientiane', flag:'../flags/flag-imgs/Laos.gif',map:'as'},
                TJK: {name:'Tajikistan', question:'Dushanbe', flag:'../flags/flag-imgs/Tajikistan.gif',map:'as'},
                UZB: {name:'Uzbekistan', question:'Tashkent', flag:'../flags/flag-imgs/Uzbekistan.gif',map:'as'},
                MYS: {name:'Malaysia', question:'Kuala Lumpur', flag:'../flags/flag-imgs/Malaysia.gif',map:'as'},
                VNM: {name:'Vietnam', question:'Hanoi', flag:'../flags/flag-imgs/Vietnam.gif',map:'as'},
                THA: {name:'Thailand', question:'Bangkok', flag:'../flags/flag-imgs/Thailand.gif',map:'as'},
                KHM: {name:'Cambodia', question:'Phnom Penh', flag:'../flags/flag-imgs/Cambodia.gif',map:'as'},
                NPL: {name:'Nepal', question:'Kathmandu', flag:'../flags/flag-imgs/Nepal.gif',map:'as'},
                RUS: {name:'Russia', question:'Moscow', flag:'../flags/flag-imgs/Russia.gif',map:'as'},
                PAK: {name:'Pakistan', question:'Islamabad', flag:'../flags/flag-imgs/Pakistan.gif',map:'as'},
                MNG: {name:'Mongolia', question:'Ulan Bator', flag:'../flags/flag-imgs/Mongolia.gif',map:'as'},
                KAZ: {name:'Kazakhstan', question:'Astana', flag:'../flags/flag-imgs/Kazakhstan.gif',map:'as'},
                IND: {name:'India', question:'New Delhi', flag:'../flags/flag-imgs/India.gif',map:'as'},
                PHL: {name:'Philippines', question:'Manila', flag:'../flags/flag-imgs/Philippines.gif',map:'as'},
                KOR: {name:'Republic of Korea (South Korea)', question:'Seoul', shortName: 'South Korea', flag:'../flags/flag-imgs/South_Korea.gif',map:'as'},
                BGD: {name:'Bangladesh', question:'Dhaka', flag:'../flags/flag-imgs/Bangladesh.gif',map:'as'},
                IRN: {name:'Iran', question:'Tehran', flag:'../flags/flag-imgs/Iran.gif',map:'as'},
                TKM: {name:'Turkmenistan', question:'Ashgabat', flag:'../flags/flag-imgs/Turkmenistan.gif',map:'as'},
                IDN: {name:'Indonesia', question:'Jakarta', flag:'../flags/flag-imgs/Indonesia.gif',map:'as'},
                JPN: {name:'Japan', question:'Tokyo', flag:'../flags/flag-imgs/Japan.gif',map:'as'},
                KGZ: {name:'Kyrgyzstan', question:'Bishkek', flag:'../flags/flag-imgs/Kyrgyzstan.gif',map:'as'},
                MMR: {name:'Myanmar (Burma)', question:'Naypyidaw', flag:'../flags/flag-imgs/Myanmar.gif',map:'as'},
                TWN: {name:'Taiwan (* disputed)', question:'Taipei',  disputed: '1', flag:'../flags/flag-imgs/Taiwan.gif',map:'as'},
                BRN: {name:'Brunei', question:'Bandar Seri Begawan', flag:'../flags/flag-imgs/Brunei.gif',map:'as'},
                TLS: {name:'Timor-Leste (East Timor)', question:'Dili', shortName: 'Timor-Leste', flag:'../flags/flag-imgs/East_Timor.gif',map:'as'},
                SGP: {name:'Singapore', question:'Singapore', flag:'../flags/flag-imgs/Singapore.gif',map:'as'},
                MDV: {name:'The Republic of Maldives', question:'Malé', shortName:'Maldives', flag:'../flags/flag-imgs/Maldives.gif',map:'as'},
                AFG: {name:'Afghanistan', question:'Kabul', flag:'../flags/flag-imgs/Afghanistan.gif',map:'m'},
                ARM: {name:'Armenia', question:'Yerevan', flag:'../flags/flag-imgs/Armenia.gif',map:'m'},
                AZE: {name:'Azerbaijan', question:'Baku', flag:'../flags/flag-imgs/Azerbaijan.gif',map:'m'},
                CYP: {name:'Cyprus', question:'Nicosia', flag:'../flags/flag-imgs/Cyprus.gif',map:'m'},
                BHR: {name:'Bahrain', question:'Manama',flag:'../flags/flag-imgs/Bahrain.gif', map:'m'},
                KGZ: {name:'Kyrgyzstan', question:'Bishkek', flag:'../flags/flag-imgs/Kyrgyzstan.gif',map:'m'},
                TJK: {name:'Tajikistan', question:'Dushanbe', flag:'../flags/flag-imgs/Tajikistan.gif',map:'m'},
                YEM: {name:'Yemen', question:"Sana'a", flag:'../flags/flag-imgs/Yemen.gif',map:'m'},
                GEO: {name:'Georgia', question:'Tbilisi', flag:'../flags/flag-imgs/Georgia.gif',map:'m'},
                IRQ: {name:'Iraq', question:'Baghdad', flag:'../flags/flag-imgs/Iraq.gif',map:'m'},
                ISR: {name:'Israel', question:'Jerusalem', flag:'../flags/flag-imgs/Israel.gif',map:'m'},
                JOR: {name:'Jordan', question:'Amman', flag:'../flags/flag-imgs/Jordan.gif',map:'m'},
                KAZ: {name:'Kazakhstan', question:'Astana', flag:'../flags/flag-imgs/Kazakhstan.gif',map:'m'},
                KWT: {name:'Kuwait', question:'Kuwait City', flag:'../flags/flag-imgs/Kuwait.gif',map:'m'},
                LBN: {name:'Lebanon', question:'Beirut', flag:'../flags/flag-imgs/Lebanon.gif',map:'m'},
                OMN: {name:'Oman', question:'Muscat', flag:'../flags/flag-imgs/Oman.gif',map:'m'},
                QAT: {name:'Qatar', question:'Doha', flag:'../flags/flag-imgs/Qatar.gif',map:'m'},
                PAK: {name:'Pakistan', question:'Islamabad', flag:'../flags/flag-imgs/Pakistan.gif',map:'m'},
                UZB: {name:'Uzbekistan', question:'Tashkent', flag:'../flags/flag-imgs/Uzbekistan.gif',map:'m'},
                SAU: {name:'Saudi Arabia', question:'Riyadh', flag:'../flags/flag-imgs/Saudi_Arabia.gif',map:'m'},
                ARE: {name:'United Arab Emirates', question:'Abu Dhabi', flag:'../flags/flag-imgs/United_Arab_Emirates.gif',map:'m'},
                TKM: {name:'Turkmenistan', question:'Ashgabat', flag:'../flags/flag-imgs/Turkmenistan.gif',map:'m'},
                SYR: {name:'Syria', question:'Damascus', flag:'../flags/flag-imgs/Syria.gif',map:'m'},
                TUR: {name:'Turkey', question:'Ankara', flag:'../flags/flag-imgs/Turkey.gif',map:'m'},
                PSE: {name:'Palestine (* disputed)', question:'Jerusalem', shortName: 'Palestine', disputed: '1', flag:'../flags/flag-imgs/Palestine.gif',map:'m'}
            }
        },
        {
            id:'theMiddleEast',
            text:'The Middle East',
            countries: {
                AFG: {name:'Afghanistan', question:'Kabul'},
                ARM: {name:'Armenia', question:'Yerevan'},
                AZE: {name:'Azerbaijan', question:'Baku'},
                CYP: {name:'Cyprus', question:'Nicosia'},
                BHR: {name:'Bahrain', question:'Manama'},
                KGZ: {name:'Kyrgyzstan', question:'Bishkek'},
                TJK: {name:'Tajikistan', question:'Dushanbe'},
                YEM: {name:'Yemen', question:"Sana'a"},
                GEO: {name:'Georgia', question:'Atlanta'},
                IRN: {name:'Iran', question:'Tehran'},
                IRQ: {name:'Iraq', question:'Baghdad'},
                ISR: {name:'Israel', question:'Jerusalem'},
                JOR: {name:'Jordan', question:'Amman'},
                KAZ: {name:'Kazakhstan', question:'Astana'},
                KWT: {name:'Kuwait', question:'Kuwait City'},
                LBN: {name:'Lebanon', question:'Beirut'},
                OMN: {name:'Oman', question:'Muscat'},
                QAT: {name:'Qatar', question:'Doha'},
                PAK: {name:'Pakistan', question:'Islamabad'},
                UZB: {name:'Uzbekistan', question:'Tashkent'},
                SAU: {name:'Saudi Arabia', question:'Riyadh'},
                ARE: {name:'United Arab Emirates', question:'Abu Dhabi'},
                TKM: {name:'Turkmenistan', question:'Ashgabat'},
                SYR: {name:'Syria', question:'Damascus'},
                TUR: {name:'Turkey', question:'Ankara'},
                PSE: {name:'Palestine (* disputed)', question:'Jerusalem'}
            }
        },
        {
            id:'oceaniaIslands',
            text:'Oceania Islands',
            countries: {
                HWI: {name:'Hawaii*'},
                MWY: {name:'Midway Islands*'},
                JAT: {name:'Johnston Atoll*'},
                PAT: {name:'Palmyra Atoll*'},
                JRV: {name:'Jarvis*'},
                PCN: {name:'Pitcairn Islands*'},
                NFK: {name:'Norfolk Island*'},
                PYF: {name:'French Polynesia*'},
                COK: {name:'Cook Islands*'},
                NIU: {name:'Niue*'},
                TON: {name:'Tonga'},
                FJI: {name:'Fiji'},
                WLF: {name:'Wallis and Futuna*'},
                ASM: {name:'American Samoa*'},
                WSM: {name:'Samoa'},
                TKL: {name:'Tokelau*'},
                KIR: {name:'Kiribati'},
                TUV: {name:'Tuvalu'},
                MHL: {name:'Marshall Islands'},
                FSM: {name:'Federated States of Micronesia'},
                PLW: {name:'Palau'},
                GUM: {name:'Guam*'},
                MNP: {name:'Northern Mariana Islands'},
                WAK: {name:'Wake Island*'},
                PNG: {name:'Papua New Guinea'},
                NRU: {name:'Nauru'},
                SLB: {name:'Solomon Islands'},
                HBI: {name:'Howland/Baker Islands*'},
                VUT: {name:'Vanuatu'},
                NCL: {name:'New Caledonia*'},
                NZL: {name:'New Zealand'},
                AUS: {name:'Australia'}
            }
        },
        {
            id:'europe',
            text:'Europe',
            countries: {
                IRL: {name:'Ireland', question:'Dublin'},
                CYP: {name:'Cyprus', question:'Nicosia'},
                GBR: {name:'United Kingdom', question:'London'},
                FRA: {name:'France', question:'Paris'},
                ESP: {name:'Spain', question:'Madrid'},
                PRT: {name:'Portugal', question:'Lisbon'},
                ISL: {name:'Iceland', question:'Reykjavik'},
                BEL: {name:'Belgium', question:'Brussels'},
                NLD: {name:'Netherlands', question:'Amsterdam'},
                LUX: {name:'Luxembourg', question:'Luxemburg City'},
                DEU: {name:'Germany', question:'Berlin'},
                CHE: {name:'Switzerland', question:'Bern'},
                ITA: {name:'Italy', question:'Rome'},
                DNK: {name:'Denmark', question:'Copenhagen'},
                AUT: {name:'Austria', question:'Vienna'},
                CZE: {name:'Czech Republic', question:'Prague'},
                NOR: {name:'Norway', question:'Oslo'},
                SWE: {name:'Sweden', question:'Stockholm'},
                FIN: {name:'Finland', question:'Helsinki'},
                SVN: {name:'Slovenia', question:'Ljubljana'},
                POL: {name:'Poland', question:'Warsaw'},
                BIH: {name:'Bosnia and Herzegovina', question:'Sarajevo'},
                RUS: {name:'Russia', question:'Moscow'},
                LTU: {name:'Lithuania', question:'Vilnius'},
                LVA: {name:'Latvia', question:'Riga'},
                EST: {name:'Estonia', question:'Tallinn'},
                BLR: {name:'Belarus', question:'Minsk'},
                UKR: {name:'Ukraine', question:'Kyiv'},
                HUN: {name:'Hungary', question:'Budapest'},
                HRV: {name:'Croatia', question:'Zagreb'},
                MDA: {name:'Moldova', question:'Chișinău'},
                ROU: {name:'Romania', question:'Bucharest'},
                SVK: {name:'Slovakia', question:'Bratislava'},
                ALB: {name:'Albania', question:'Tirana'},
                GRC: {name:'Greece', question:'Athens'},
                MKD: {name:'Macedonia / F.Y.R.O.M. (* disputed name)', question:'Skopje'},
                MNE: {name:'Montenegro', question:'Podgorica'},
                BGR: {name:'Bulgaria', question:'Sofia'},
                SCG: {name:'Serbia', question:'Belgrade'},
                TUR: {name:'Turkey', question:'Ankara'},
                VAT: {name:'Vatican City', question:'Vatican City'},
                SMR: {name:'San Marino', question:'City of San Marino'},
                MCO: {name:'Monaco', question:'Monaco'},
                MLT: {name:'Malta', question:'Valletta'},
                AND: {name:'Andorra', question:'Andorra la Vella'},
                LIE: {name:'Liechtenstein', question:'Vaduz'},
                KOS: {name:'Kosovo (* disputed)', question:'Pristina'}
            }
        },
        {
            id:'ukCities',
            text:'UK Cities',
            countries: {
                ply: {name:'Plymouth'},
                exe: {name:'Exeter'},
                bri: {name:'Bristol'},
                por: {name:'Portsmouth'},
                brt: {name:'Brighton'},
                dov: {name:'Dover'},
                lon: {name:'London'},
                oxf: {name:'Oxford'},
                glo: {name:'Gloucester'},
                cam: {name:'Cambridge'},
                nor: {name:'Norwich'},
                bir: {name:'Birmingham'},
                lei: {name:'Leicester'},
                not: {name:'Nottingham'},
                she: {name:'Sheffield'},
                liv: {name:'Liverpool'},
                man: {name:'Manchester'},
                lee: {name:'Leeds'},
                yor: {name:'York'},
                newc: {name:'Newcastle'},
                car: {name:'Carlisle'},
                cdf: {name:'Cardiff'},
                swa: {name:'Swansea'},
                bel: {name:'Belfast'},
                lnd: {name:'Londonderry'},
                edi: {name:'Edinburgh'},
                gla: {name:'Glasgow'},
                dun: {name:'Dundee'},
                abe: {name:'Aberdeen'},
                inv: {name:'Inverness'}
            }
        }
    ];
}