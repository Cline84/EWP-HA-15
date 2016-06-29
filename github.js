/**
 * Created by vendr on 16.06.2016.
 */

/** Aufruf DataTable aus json-Datei (kleines d, großes T!!!)*/
$("#befehle").dataTable({
    /**Aufrufen der Daten für die Tabelle*/
    "ajax" : "befehle.json",
});

/** Aufruf Tooltipster*/
$(".tooltip").tooltipster();

$("#clone").tooltipster({
    content: $("#cloneContent").detach()
});
$("#add").tooltipster({
    content: $("#addContent").detach()
});
$("#commit").tooltipster({
    content: $("#commitContent").detach()
});
$("#push").tooltipster({
    content: $("#pushContent").detach()
});
$("#pull").tooltipster({
    content: $("#pullContent").detach()
});