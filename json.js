var url = "test.xlsx";
var help;


/* set up async GET request */
var req = new XMLHttpRequest();
req.open("GET", url, true);
req.responseType = "arraybuffer";

req.onload = function(e) {
    var data = new Uint8Array(req.response);
    var workbook = XLSX.read(data, {type:"array"});


    var first_sheet_name = workbook.SheetNames[0];

    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];
    console.log(XLSX.utils.sheet_to_json(worksheet));

    /* Get array length */
    var sheetLength = XLSX.utils.sheet_to_json(worksheet).length;
    console.log(sheetLength);

    for (i = 2; i <= sheetLength + 1; i++) {
        var address_of_cell = 'A' + i;
        var address_of_cellv2 = 'B' + i;
        console.log(address_of_cell);
        console.log(address_of_cellv2);

    /* Find desired cell */
    var desired_cell = worksheet[address_of_cell];
    var desired_cellv2 = worksheet[address_of_cellv2];

    /* Get the value */
    var desired_value = (desired_cell ? desired_cell.v : undefined);
    var desired_valuev2 = (desired_cellv2 ? desired_cellv2.v : undefined);

    /* Insert div in html */
    $('<div class="block"><p id="name" style="padding-left: 5px; overflow: hidden">' + desired_value + '</p><div id="score" class="count" style="padding-left: 5px">' + desired_valuev2 + '</div></div>').insertAfter($(".sprite"));


    }

};

req.send();


// Upload xlsx file via een file upload button? Gaat niet lukken.
// Make Desired value go from 0 to x value so it gets an dynamic and animated feeling and not static.
// Free my nigga jamal :)
// Make new scorebord from values.
// CSS verbeteren(kleuren, achtergrond, fonttype)

// gratis bs opschrijven zodat he tlijkt alsof ik bezig ben en niet alleen maar dingen aan het kutten ben
// soorry
// pizza
// dit bericht en de bovenste drie zijn letterlijk onzin tada!!

