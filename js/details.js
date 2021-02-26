const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getBrewery(breweryId) {
	try {
		document.querySelector('#loadingGif').innerHTML += `
      		<img class="loadingGif" src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif">
    		`;

		console.log(breweryId);
		const response = await fetch(
			'https://api.openbrewerydb.org/breweries/' + breweryId
		);
		const jsonResult = await response.json();
		const breweryInfo = jsonResult;

		document.title = breweryInfo.name;
		document.querySelector('header').innerHTML += `
			<h1>Brewery Info</h1>
			`;

		let breweryTypeClass = '';
		if (breweryInfo.brewery_type === 'micro') {
			breweryTypeClass = 'microClass';
		} else if (breweryInfo.brewery_type === 'contract') {
			breweryTypeClass = 'contractClass';
		} else if (breweryInfo.brewery_type === 'brewpub') {
			breweryTypeClass = 'brewpubClass';
		} else {
			breweryTypeClass = 'regionalClass';
		}

		document.querySelector('h2').innerHTML = `${breweryInfo.name}`;
		document.querySelector('.desc').innerHTML = `
      		<div class="card">
        	<p class="${breweryTypeClass}">Brewery type: ${breweryInfo.brewery_type}</p>
        	<p>Location: ${breweryInfo.city}, ${breweryInfo.state}</p>
        	<p>Website: <a href="${breweryInfo.website_url}" target="_blank">${breweryInfo.website_url}</p>
      		</div>
        	`;
		document.querySelector('.goBack').innerHTML += `
        	<a href="index.html">Back to list</a>
      	`;
	} catch (error) {
		document.querySelector('#alert').innerHTML = showAlertTouser(
			'An Error occured',
			'danger'
		);
	} finally {
		document.querySelector('#loadingGif').innerHTML = '';
	}
}

getBrewery(id);
