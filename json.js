var invalidEntries = 0;

function filterByID(obj) {
    if ('B' in obj && typeof(obj.B) === 'number' && !isNaN(obj.B)) {
        return true;
    } else {
        invalidEntries++;
        return false;
    }
}

function getURL(){

    console.log(document.getElementById("xlsxURL").value);
    var url = document.getElementById("xlsxURL").value;

    /* set up async GET request */
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "arraybuffer";

    req.onload = function (e) {
        var data = new Uint8Array(req.response);
        var workbook = XLSX.read(data, {type: "array"});


        var first_sheet_name = workbook.SheetNames[0];

        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];

        /* Filter undefined object from array */
        var arr = XLSX.utils.sheet_to_json(worksheet).filter(filterByID);
        console.log(arr);
        console.log(invalidEntries);

        /* Get array length */
        var sheetLength = arr.length;
        console.log(sheetLength);

        for (i = 3; i <= sheetLength + 2; i++) {
            var address_of_cell = 'B' + i;
            var address_of_cellv2 = 'C' + i;
            console.log(address_of_cell);
            console.log(address_of_cellv2);

            /* Find desired cell */
            var desired_cell = worksheet[address_of_cell];
            var desired_cellv2 = worksheet[address_of_cellv2];

            /* Get the value */
            var desired_value = (desired_cell ? desired_cell.v : undefined);
            var desired_valuev2 = (desired_cellv2 ? desired_cellv2.v : undefined);

            /* Insert div in html */
            var $newdiv = $('<div class="block"><p id="name" style="padding-left: 5px; overflow: hidden">' + desired_value + '</p><div id="score" class="count" style="padding-left: 5px">' + desired_valuev2 + '</div></div>');
            $(".sprite").append($newdiv);
        }

    };

    req.send();


}