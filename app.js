function getRandomNumber() {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(Math.random());
        }, 500)
    );
}

async function awaitGetRandomNumber() {
    const num = await getRandomNumber();
    console.log(num);
}

async function printCityData(cityName) {
    const res = await fetch(`https://geocode.xyz/${cityName}?json=1&auth=190505517666029746659x121886`);
    if (res.ok) {
        const cityData = await res.json();
        console.log(`lattitude: ${cityData.latt}`);
        console.log(`longitude: ${cityData.longt}`);
    } else {
        const body = await res.text();
        console.log(`Error: Got status code ${res.status}`);
        console.log(`Response body: ${body}`);
    }
}

awaitGetRandomNumber();
printCityData("New Orleans");
