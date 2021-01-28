/* define functions here */



function calculateTotal(qty, price) {
    return qty * price;
}

function outputCartRow(file, title, quantity, price, total) {
    return "<td><img src='images/" + file + "' alt='img-" + title + "'></td> \
    <td>" + title + "</td> \
    <td>" + quantity + "</td> \
<td>$" + price.toFixed(2) + "</td> \
<td>$" + total.toFixed(2) + "</td>";

}