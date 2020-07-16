// from data.js
var tableData = data;
var tbody = d3.select('tbody');

function showTable(tableData) {
    tbody.html('');
    tableData.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};
showTable(tableData);

var button = d3.select('#filter-btn');
var form = d3.select('#form-control');

button.on('click', runSearch);
form.on('change', runSearch);

function runSearch() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');
    
    if (inputValue) {
        var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
        } else {
            var filteredData = tableData;
        }
    showTable(filteredData);
}

