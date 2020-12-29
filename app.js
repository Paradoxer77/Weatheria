const countryList = {
  Afghanistan: "AF",
  Albania: "AL",
  Algeria: "DZ",
  "American Samoa": "AS",
  Andorra: "AD",
  Angola: "AO",
  Anguilla: "AI",
  Antarctica: "AQ",
  "Antigua and Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Aruba: "AW",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  "Bahamas (the)": "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bermuda: "BM",
  Bhutan: "BT",
  "Bolivia (Plurinational State of)": "BO",
  "Bonaire, Sint Eustatius and Saba": "BQ",
  "Bosnia and Herzegovina": "BQ",
  Botswana: "BW",
  "Bouvet Island": "BV",
  Brazil: "BR",
  "British Indian Ocean Territory (the)": "IO",
  "Brunei Darussalam": "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  "Cabo Verde": "CV",
  Cambodia: "KH",
  Cameroon: "CM",
  Canada: "CA",
  "Cayman Islands (the)": "KY",
  "Central African Republic (the)": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  "Christmas Island": "CX",
  "Cocos (Keeling) Islands (the)": "CC",
  Colombia: "CO",
  "Comoros (the)": "KM",
  "Congo (the Democratic Republic of the)": "CD",
  "Congo (the)": "CG",
  "Cook Islands (the)": "CK",
  "Costa Rica": "CR",
  Croatia: "HR",
  Cuba: "CU",
  Curaçao: "CW",
  Cyprus: "CY",
  Czechia: "CZ",
  "Côte d'Ivoire": "CI",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic (the)": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  "Falkland Islands (the) [Malvinas]": "FK",
  "Faroe Islands (the)": "FO",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  "French Guiana": "GF",
  "French Polynesia": "PF",
  "French Southern Territories (the)": "TF",
  Gabon: "GA",
  "Gambia (the)": "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Gibraltar: "GI",
  Greece: "GR",
  Greenland: "GL",
  Grenada: "GD",
  Guadeloupe: "GP",
  Guam: "GU",
  Guatemala: "GT",
  Guernsey: "GG",
  Guinea: "GN",
  "Guinea-Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  "Heard Island and McDonald Islands": "HM",
  "Holy See (the)": "VA",
  Honduras: "HN",
  "Hong Kong": "HK",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  "Iran (Islamic Republic of)": "IR",
  Iraq: "IQ",
  Ireland: "IE",
  "Isle of Man": "IM",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jersey: "JE",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Korea: "KP",
  Korea: "KR",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  "Lao People's Democratic Republic (the)": "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  Libya: "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Macao: "MO",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  "Marshall Islands (the)": "MH",
  Martinique: "MQ",
  Mauritania: "MR",
  Mauritius: "MU",
  Mayotte: "YT",
  Mexico: "MX",
  "Micronesia (Federated States of)": "FM",
  "Moldova (the Republic of)": "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Montserrat: "MS",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  "Netherlands (the)": "NL",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  "Niger (the)": "NE",
  Nigeria: "NG",
  Niue: "NU",
  "Norfolk Island": "NF",
  "Northern Mariana Islands (the)": "MP",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  Palau: "PW",
  "Palestine, State of": "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  "Philippines (the)": "PH",
  Pitcairn: "PN",
  Poland: "PL",
  Portugal: "PT",
  "Puerto Rico": "PR",
  Qatar: "QA",
  "Republic of North Macedonia": "MK",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  Réunion: "RE",
  "Saint Barthélemy": "BL",
  "Saint Helena, Ascension and Tristan da Cunha": "SH",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Martin (French part)": "MF",
  "Saint Pierre and Miquelon": "PM",
  "Saint Vincent and the Grenadines": "VC",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  "Sint Maarten": "SX",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Georgia and the South Sandwich Islands": "GS",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  "Sudan (the)": "SD",
  Suriname: "SR",
  "Svalbard and Jan Mayen": "SJ",
  Sweden: "SE",
  Switzerland: "CH",
  "Syrian Arab Republic": "SY",
  Taiwan: "TW",
  Tajikistan: "TJ",
  "Tanzania, United Republic of": "TZ",
  Thailand: "TH",
  "Timor-Leste": "TL",
  Togo: "TG",
  Tokelau: "TK",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  "Turks and Caicos Islands (the)": "TC",
  Tuvalu: "TV",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States Minor Outlying Islands": "UM",
  "United States of America": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Venezuela (Bolivarian Republic of)": "VE",
  "Viet Nam": "VN",
  "Virgin Islands (British)": "VG",
  "Virgin Islands (U.S.)": "VI",
  "Wallis and Futuna": "WF",
  "Western Sahara": "EH",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
  "Åland Islands": "AX",
};

const locationName = document.getElementById("location-name");
const flag = document.getElementById("country-flag");
const temperature = document.getElementById("temperature");
const isDay = document.getElementById("is-day");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const searchBar = document.getElementById("city");
const search = document.getElementById("search");
const time = document.getElementById("time");

async function getWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1df43d26385f44b8842140711202712&q=${cityName}`,
      { mode: "cors" }
    );

    const weatherInfo = await response.json();
    const location = weatherInfo.location;
    const weather = weatherInfo.current;
    const countryCode = countryList[location.country];
    time.style.color = "rgb(63, 63, 63)";
    time.textContent = "Working on it...";
    addToDom(weather, countryCode, location);
  } catch (error) {
    time.style.color = "red";
    time.textContent = "Place not found.";
  }

  setTimeout(() => {
    time.textContent = "";
  }, 2000);
}

function addToDom(weather, countryCode, location) {
  if (weather["is_day"]) {
    isDay.textContent = "☀️";
  } else {
    isDay.textContent = "🌕";
  }

  feelsLike.innerHTML = `${weather["feelslike_c"]} °C &nbsp;`;
  temperature.innerHTML = `${weather["temp_c"]} °C`;
  humidity.textContent = ` | Humidity: ${weather.humidity}`;
  locationName.textContent = `${location.name}, ${countryCode}`;
  flag.src = `https://www.countryflags.io/${countryCode}/flat/64.png`;

  time.style.color = "lime";
  time.textContent = "Success";
}

search.addEventListener("click", () => {
  let place = searchBar.value;
  getWeather(place);
  searchBar.value = "";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather(searchBar.value);

    searchBar.value = "";
  }
});

getWeather("Tokyo");
