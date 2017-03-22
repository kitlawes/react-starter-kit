var countriesPerContinent = getCountriesPerContinent();
var dropDownMenu = document.getElementById("dropDownMenu");
for (property in countriesPerContinent) {
    var option = document.createElement("option");
    option.value = property;
    option.text = countriesPerContinent[property].text;
    dropDownMenu.add(option);
}

function showCountries(continent) {
    if (continent != "") {

        var countriesPerContinent = getCountriesPerContinent();
        var table = {html: "<table id='countriesTable' border='1'>"};
        var countries = countriesPerContinent[continent].countries;
        var column = 0;
        var columnAmount = 3;

        // Populate the table with countries
        for (property in countries) {
            addCountryToTable(countries[property].name, table, column, columnAmount)
            column = (column + 1) % columnAmount;
        }
        // Add empty cells to the table to complete the last row
        if (column != 0) {
            while (column < columnAmount) {
                addCountryToTable("", table, column, columnAmount)
                column++;
            }
        }

        table.html += "</table>";
        document.getElementById("countries").innerHTML = table.html;

    } else {
        document.getElementById("countries").innerHTML = "";
    }
}

function addCountryToTable(country, table, column, columnAmount) {
    switch (column) {
        case 0:
            table.html += "<tr><td>" + country + "</td>";
            break;
        case columnAmount - 1:
            table.html += "<td>" + country + "</td></tr>";
            break;
        default:
            table.html += "<td>" + country + "</td>";
            break;
    }
}

$(document).ready(function(){
    $("#dropDownMenu").change(function(){
        $("#countries").slideUp("slow", function() {
            showCountries($("#dropDownMenu").find(":selected").attr("value"));
        });
        $("#countries").slideDown("slow");
    });
});