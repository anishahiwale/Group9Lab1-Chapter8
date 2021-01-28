/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

var table = document.getElementsByClassName("table-fill")[0];
var total = 0;
var tax = 0;
var grandtotal = 0;
for (var i = 1; i < table.rows.length; i++) {
    if (i <= filenames.length) {
        table.deleterow(i);
        var newRow = table.insertRow(i);
        var localtotal = calculatetotal(quantities[i - 1, prices[i - 1]])
        total += localtotal;
        newRow.innerHTML = outputCartRow(filenames[i - 1], titles[i - 1], quantities[i - 1], prices[i - 1], localtotal);


    }
    if (i == 4) {
        table.rows[i].cells[1].innerHTML = "$" + parseFloat(total).toFixed(2);

    }
    if (i == 5) {

        table.rows[i].cells[1].innerHTML = "$" + (parseFloat(total * 0.01)).toFixed(2);
        grandTotal = total + total * 0.1;
    }

    if (i == 6) {

        var shipping = 40;
        if (total > 1000) shipping = 0;
        table.rows[i].cells[1].innerHTML = "$" + parseFloat(shipping).toFixed(2);
        grandTotal += shipping;

    }

    if (i == 7) {

        table.rows[i].cells[1].innerHTML = "$" + parseFloat(grandTotal).toFixed(2);

    }

}