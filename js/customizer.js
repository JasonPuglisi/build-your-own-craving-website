/* PRICE UPDATER */
function updatePrice() {
	var basketPrice = 0;
	var snackPrice = 0;
	var subPrice = 0;
	var taxPrice = 0;
	var totalPrice = 0;
	// Basket
	var basketName = document.getElementById('selectedBasket').firstChild.id;
	switch(basketName) {
	case 'Basket 1':
		basketPrice = 10;
		break;
	case 'Basket 2':
		basketPrice = 10;
		break;
	case 'Basket 3':
		basketPrice = 10;
		break;
	case 'Basket 4':
		basketPrice = 10;
		break;
	case 'Basket 5':
		basketPrice = 10;
		break;
	case 'Basket 6':
		basketPrice = 10;
		break;
	case 'Basket 7':
		basketPrice = 10;
		break;
	case 'Basket 8':
		basketPrice = 10;
		break;
	}
	// Snacks
	var snackNames = '';
	for(var i in snacks) {
		var snackName = document.getElementById('selectedSnacks').childNodes[i].id;
		snackNames += snackName + ', ';
		switch(snackName) {
		case '100 Grand Bar':
			snackPrice += 2;
			break;
		case '3 Musketeers':
			snackPrice += 2;
			break;
		case 'AirHeads':
			snackPrice += 2;
			break;
		case 'Almond Joy':
			snackPrice += 2;
			break;
		case 'Baby Ruth':
			snackPrice += 2;
			break;
		case 'Butterfinger':
			snackPrice += 2;
			break;
		case 'Cheez-Its':
			snackPrice += 2;
			break;
		case 'Heath Bar':
			snackPrice += 2;
			break;
		case 'Hershey\'s Kisses':
			snackPrice += 2;
			break;
		case 'Jelly Beans':
			snackPrice += 2;
			break;
		case 'Jolly Ranchers':
			snackPrice += 2;
			break;
		case 'Junior Mints':
			snackPrice += 2;
			break;
		case 'Kit Kat':
			snackPrice += 2;
			break;
		case 'Lays Potato Chips':
			snackPrice += 2;
			break;
		case 'Life Savers':
			snackPrice += 2;
			break;
		case 'Lollypop':
			snackPrice += 2;
			break;
		case 'M&M\'s':
			snackPrice += 2;
			break;
		case 'Milk Duds':
			snackPrice += 2;
			break;
		case 'Milky Way':
			snackPrice += 2;
			break;
		case 'Mounds':
			snackPrice += 2;
			break;
		case 'Oreos':
			snackPrice += 2;
			break;
		case 'Pez':
			snackPrice += 2;
			break;
		case 'Pop Rocks':
			snackPrice += 2;
			break;
		case 'Raisinets':
			snackPrice += 2;
			break;
		case 'Reese\'s Peanut Butter Cups':
			snackPrice += 2;
			break;
		case 'Ring Pop':
			snackPrice += 2;
			break;
		case 'Skittles':
			snackPrice += 2;
			break;
		case 'Smarties':
			snackPrice += 2;
			break;
		case 'Snickers':
			snackPrice += 2;
			break;
		case 'Sno-Caps':
			snackPrice += 2;
			break;
		case 'Sour Patch Kids':
			snackPrice += 2;
			break;
		case 'Starburst':
			snackPrice += 2;
			break;
		case 'Sugar Daddy':
			snackPrice += 2;
			break;
		case 'Swedish Fish':
			snackPrice += 2;
			break;
		case 'Tic Tacs':
			snackPrice += 2;
			break;
		case 'Tootsie Rolls':
			snackPrice += 2;
			break;
		case 'Twix':
			snackPrice += 2;
			break;
		case 'Twizzlers':
			snackPrice += 2;
			break;
		case 'York Peppermint Pattie':
			snackPrice += 2;
			break;
		}
	}
	// Button enabler
	if (snacks.length >= 10 && snacks.length <= 30) document.getElementById('submit').className = 'button round';
	else document.getElementById('submit').className = 'button round disabled';
	// Price setter
	subPrice = basketPrice + snackPrice;
	taxPrice = subPrice  * 0.07;
	totalPrice = subPrice + taxPrice;
	document.getElementById('infoBasketPrice').value = basketPrice.toFixed(2);
	document.getElementById('infoSnackPrice').value = snackPrice.toFixed(2);
	document.getElementById('infoSubPrice').value = subPrice.toFixed(2);
	document.getElementById('infoTaxPrice').value = taxPrice.toFixed(2);
	document.getElementById('infoTotalPrice').value = totalPrice.toFixed(2);
	document.getElementById('infoBasket').value = basketName;
	document.getElementById('infoSnacks').value = snackNames.substring(0, snackNames.length - 2);
	document.getElementById('priceList').innerHTML = '<p><b>Subtotal</b> • $' + subPrice.toFixed(2) + '</p><p><b>Tax</b> • $' + taxPrice.toFixed(2) + '</p><p><b>Total</b> • $' + totalPrice.toFixed(2) + '</p>';
}

/* BASKET CHOOSER */
document.getElementById('selectedBasket').innerHTML = document.getElementById('Basket 1').outerHTML;
function selectBasket(img) {
	document.getElementById('selectedBasket').innerHTML = img.outerHTML;
	updatePrice();
}

/* SNACK CHOOSER */
var snacks = [];
function selectSnack(snack) {
	snacks.push(snack.outerHTML);
	updateSnacks();
}
function removeSnack(snack) {
	snacks.splice(snacks.lastIndexOf(snack.outerHTML.replace('removeSnack(this)', 'selectSnack(this)')), 1);
	updateSnacks();
}
function updateSnacks() {
	document.getElementById('selectedSnacks').innerHTML = '';
	for(var i in snacks) document.getElementById('selectedSnacks').innerHTML += snacks[i].replace('selectSnack(this)', 'removeSnack(this)');
	updatePrice();
}

/* SELECTION CHECKS */
updatePrice();
function validateForm() {
	return (snacks.length >= 10 && snacks.length <= 30);
}
