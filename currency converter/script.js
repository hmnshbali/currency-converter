let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

async function getdata() {
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    // console.log(data);

}

getdata();


let From = document.querySelector('#from');
let To = document.querySelector('#to');
let Fromimg = document.querySelector('.from-img');
let Toimg = document.querySelector('.to-img');
let Amount = document.querySelector('.amount');
let Exchange = document.querySelector('#exchange');
let Msg = document.querySelector('.msg');
let Swap = document.querySelector('.swap-icon');
let Final = document.querySelector('.final');
let countryList = {
    AED: "AE",
    AUD: "AU",
    CAD: "CA",
    EUR: "FR",
    GBP: "GB",
    INR: "IN",
    JPY: "JP",
    NZD: "NZ",
    USD: "US",

};


for (const key in countryList) {
    // console.log(key,countryList[key]);


    From.innerHTML += `<option value="${key}">${key
        }</option>`

    To.innerHTML += `<option value="${key}">${key
        }</option>`
}

From.addEventListener('change', (e) => {
    let flag = e.target.value;
    console.log(flag);
    flagcode = countryList[flag];

    Fromimg.src = `https://flagsapi.com/${flagcode}/flat/64.png`;


})


To.addEventListener('change', (e) => {
    let flag = e.target.value;
    let flagcode = countryList[flag];
    Toimg.src = `https://flagsapi.com/${flagcode}/flat/64.png`;



})

Amount.addEventListener('change', (e) => {
    let curramount = e.target.value;


    async function exchange() {
        let api = `${url}/${From.value.toLowerCase()}/${To.value.toLowerCase()}.json`;
        let response = await fetch(api);
        let data = await response.json();
        console.log(data);
        let result = curramount * data[To.value.toLowerCase()];

        Final.innerHTML = `${curramount} ${From.value}=${result} ${To.value}`;
        Msg.innerHTML = `1 ${From.value}=${data[To.value.toLowerCase()]} ${To.value}`;

    }

    Exchange.addEventListener('click', () => {
        exchange();
    })
})

Swap.addEventListener('click', () => {
    swap();

}
)

async function swap() {
    let api = `${url}/${From.value.toLowerCase()}/${To.value.toLowerCase()}.json`;

    let response = await fetch(api);
    let data = await response.json();
    let temp = From.value;
    From.value = To.value;
    To.value = temp;
    Fromimg.src = `https://flagsapi.com/${countryList[From.value]}/flat/64.png`;
    Toimg.src = `https://flagsapi.com/${countryList[To.value]}/flat/64.png`;
}


