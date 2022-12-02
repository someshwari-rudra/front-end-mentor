const showCountryData = document.getElementById("showCountryData");
const InputSearch = document.getElementById("InputSearch");
const darkMode = document.getElementById("darkMode");
const navbarBg = document.querySelector(".navbarBg");
const navbarBrand = document.querySelector(".navbar-brand");
const mainContainer = document.querySelector(".mainContainer");
const faSearch = document.querySelector(".fa-search");
const inputBg = document.querySelector(".inputBg");
const dropdownBtn = document.querySelector(".dropdownBtn");
const card = document.querySelector(".card");
const myCard = document.querySelector(".myCard");
const darkModeBtn = document.querySelector(".darkModeBtn");


  async function getData() {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json()
      console.log(data)
      return data
  }


async function ShowData() {
  let html = "";
  const data = await getData();
  console.log("data", data);
  data.forEach((ele) => {
    html += `<div class="col-12 col-md-4 col-xl-3 my-3 d-flex align-items-stretch">
                <div class="myCard ">
                    <div class="card_image">
                        <img src="${ele.flag}" alt="" class="img-fluid w-100">
                    </div>
                    <div class="card_text px-3 py-3">
                        <p class="card-title fw-bold px-3 py-3 h2">${ele.name}</p>
                        <p class="card-title  px-3">Population:${ele.population}</p>
                        <p class="card-title  px-3">Region: ${ele.region}</p>
                        <p class="card-title  px-3">Capital: ${ele.capital}</p>
                    </div>
                </div>
            </div>  `;
  });

  if (data.length != 0) {
    showCountryData.innerHTML = html;
  }
}

ShowData();

async function searchCountry() {
  let html =""
  const data = await getData();
  keyword = InputSearch.value.toLowerCase();
  const countryName = data.filter((ele) => {
  country = ele.name.toLowerCase();
    return country.indexOf(keyword) > -1;
  });
  
  countryName.forEach((ele) => {
    return (html += `
      <div class="col-12 col-md-4 col-xl-3 my-3 d-flex align-items-stretch">
                <div class="myCard">
                    <div class="card_image">
                        <img src="${ele.flag}" alt="" class="img-fluid w-100">
                    </div>
                    <div class="card_text px-3 py-3">
                        <p class="card-title fw-bold px-3 py-3 h2">${ele.name}</p>
                        <p class="card-title  px-3">Population:${ele.population}</p>
                        <p class="card-title  px-3">Region: ${ele.region}</p>
                        <p class="card-title  px-3">Capital: ${ele.capital}</p>
                    </div>
                </div>
            </div>  
        `);
  })
 if (data.length != 0) {
   showCountryData.innerHTML = html;
 }
}

async function filterBasedOnSelection(region) {
  const data = await getData()
  let html =""

  filteredRegion = data.filter((ele) => {
    return ele.region === region;
  });

  filteredRegion.forEach((ele) => {
       return (html += `
      <div class="col-12 col-md-4 col-xl-3 my-3 d-flex align-items-stretch">
                <div class="myCard">
                    <div class="card_image">
                        <img src="${ele.flag}" alt="" class="img-fluid w-100">
                    </div>
                    <div class="card_text px-3 py-3">
                        <p class="card-title fw-bold px-3 py-3 h2">${ele.name}</p>
                        <p class="card-title  px-3">Population:${ele.population}</p>
                        <p class="card-title  px-3">Region: ${ele.region}</p>
                        <p class="card-title  px-3">Capital: ${ele.capital}</p>
                    </div>
                </div>
            </div>  
        `);
  })

   if (data.length != 0) {
     showCountryData.innerHTML = html;
   }
}


function darkModeEnable() {
  navbarBg.classList.toggle("navbarBgDarkMode");
  navbarBrand.classList.toggle("navbar-brandDarkMde");
  inputBg.classList.toggle("inputBgDarkMode");
  mainContainer.classList.toggle("mainContainerDarkMode");
  faSearch.classList.toggle("fa-searchDarkMode");
  card.classList.toggle("cardDarMode");
  dropdownBtn.classList.toggle("dropdownBtnDarkMode");
  darkModeBtn.classList.toggle("darkModeBtnDark");
  myCard.classList.toggle("myCardDarkMode");

}


darkMode.addEventListener("click",darkModeEnable)



InputSearch.addEventListener("keyup", searchCountry);

