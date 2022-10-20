var XMLHttpRequest = require('xhr2');

var apikey = {
    key: 'a97f4afc-bc43-4228-8c7c-e9d7cfb104cb'
}

const etherereumPrice = (req, res) => {
    

    request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key + '&limit=100')
        .then((r1) => {
            var x1 = JSON.parse(r1.target.responseText);
            console.log("Length : ", x1.data.length);

            for (let i = 0; i < x1.data.length; i++) {
                // console.log((i+1) + ". Name-",x1.data[i].name, "Price-",x1.data[i].quote.USD.price );
                if (x1.data[i].name === "Ethereum") {
                    console.log((i + 1) + ". Name-", x1.data[i].name, "Price-", x1.data[i].quote.USD.price);
                    etherPrice = x1.data[i].quote.USD.price
                    res.status(200).send({ status : "Success", massage : "Ethereum price is-",Price : etherPrice })
                }
                
            }
        }).catch(err => {
            console.log(err);
        })

    function request(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        })
    }

}

const polygonPrice = (req, res) => {
    

    request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key + '&limit=100')
        .then((r1) => {
            var x1 = JSON.parse(r1.target.responseText);
            // console.log("Length : ", x1.data.length);

            for (let i = 0; i < x1.data.length; i++) {
                // console.log((i+1) + ". Name-",x1.data[i].name, "Price-",x1.data[i].quote.USD.price );
                if (x1.data[i].name === "Polygon") {
                    console.log((i + 1) + ". Name-", x1.data[i].name, "Price-", x1.data[i].quote.USD.price);
                    polyPrice = x1.data[i].quote.USD.price
                    res.status(200).send({ status : "Success", massage : "Polygon price is-", Price : polyPrice })
                }
                
            }
        }).catch(err => {
            console.log(err);
        })

    function request(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        })
    }

}
const BNBPrice = (req, res) => {
    console.log("PAI called");

    request('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key + '&limit=100')
        .then((r1) => {
            var x1 = JSON.parse(r1.target.responseText);
            console.log("Length : ", x1.data.length);

            for (let i = 0; i < x1.data.length; i++) {
                // console.log((i+1) + ". Name-",x1.data[i].name, "Price-",x1.data[i].quote.USD.price );
                if (x1.data[i].name === "BNB") {
                    console.log((i + 1) + ". Name-", x1.data[i].name, "Price-", x1.data[i].quote.USD.price);
                    bnbPrice = x1.data[i].quote.USD.price
                    res.status(200).send({ status : "Success", massage : "BNB price is-", Price : bnbPrice })
                }
                
            }
        }).catch(err => {
            console.log(err);
        })

    function request(method, url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = resolve;
            xhr.onerror = reject;
            xhr.send();
        })
    }

}

module.exports = {
    etherereumPrice,
    polygonPrice,
    BNBPrice

}