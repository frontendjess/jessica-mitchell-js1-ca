const baseUrl = '';

async function getBrewery(url) {
	try {
		document.querySelector('#loadingGif').innerHTML += `
    		<img class="loadingGif" src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif">
 		 `;
		const response = await fetch('https://api.openbrewerydb.org/breweries');
		const jsonResult = await response.json();
		const res = jsonResult;

		for (let i = 0; i < res.length; i++) {
			let breweryTypeClass = '';
			if (res[i].brewery_type === 'micro') {
				breweryTypeClass = 'microClass';
			} else if (res[i].brewery_type === 'contract') {
				breweryTypeClass = 'contractClass';
			} else if (res[i].brewery_type === 'brewpub') {
				breweryTypeClass = 'brewpubClass';
			} else {
				breweryTypeClass = 'regionalClass';
			}

			document.querySelector('main').innerHTML += `
        		<div class="card">
            		<div class="card__body">
                		<p class="card__desc">Brewery: ${res[i].name}</p>
                		<p class="card__desc ${breweryTypeClass}">Brewery type: ${res[i].brewery_type}</p>
                		<p><a class="link" href="details.html?id=${res[i].id}">Read More</a></p>
            		</div>
        		</div>
    		`;
		}
	} catch (error) {
		// show the user some error
		document.querySelector('#alert').innerHTML = showAlertTouser(
			'An Error occured',
			'danger'
		);
	} finally {
		// you can finally do something here like hide the loading gif
		// It is optional

		document.querySelector('#loadingGif').innerHTML = '';
	}
}

getBrewery(baseUrl);
