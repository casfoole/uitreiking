$("#dialog").dialog({
    autoOpen: true,
    buttons: {
        Ok: function() {
            for (i = 0; i <= aantal; i++) {
                $("#namePlaceTeam" + i).text($("#teamname" + i).text);
            }
            $(this).dialog("close");
        },
        Cancel: function () {
            $(this).dialog("close");
        }
    }
});

$("#open").click(function () {
    $("#dialog").dialog("open");
});