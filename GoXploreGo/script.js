// Tooltip script from bootstrap
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);

const triggerTabList = document.querySelectorAll("#myTab button");
triggerTabList.forEach((triggerEl) => {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener("click", (event) => {
    event.preventDefault();
    tabTrigger.show();
  });
});

// Weather data for each month
const weatherData = {
  "pills-march-tab": {
    season: "Spring",
    temperature: "14–23°C",
    crowd: "Moderate",
    weather: "Pleasant",
    ard: "5 days+",
    aqt: "Low Waiting",
  },
  "pills-april-tab": {
    season: "Summer",
    temperature: "18–28°C",
    crowd: "Crowded",
    weather: "Warm & Dry",
    ard: "3 days+",
    aqt: "Moderate Waiting",
  },
  "pills-may-tab": {
    season: "Pre-Monsoon",
    temperature: "20–30°C",
    crowd: "Very Crowded",
    weather: "Hot & Humid",
    ard: "8 days+",
    aqt: "Long Waiting",
  },
  "pills-june-tab": {
    season: "Monsoon",
    temperature: "16–24°C",
    crowd: "Less Crowded",
    weather: "Heavy Rain",
    ard: "20 days+",
    aqt: "Short Waiting",
  },
  "pills-july-tab": {
    season: "Monsoon",
    temperature: "14–22°C",
    crowd: "Least Crowded",
    weather: "Very Rainy",
    ard: "25 days+",
    aqt: "No Waiting",
  },
};

//
const weatherItems = [
  { id: "season", icon: "fa-cloud-sun", label: "Season" },
  {
    id: "temperature",
    icon: "fa-temperature-arrow-up",
    label: "Typical Temperature",
  },
  { id: "crowd", icon: "fa-people-group", label: "Crowd Level" },
  { id: "weather", icon: "fa-calendar-days", label: "Weather Conditions" },
  { id: "ard", icon: "fa-cloud-rain", label: "Avg Rainy Days" },
  { id: "aqt", icon: "fa-clock", label: "Attraction Queue Time" },
];

function renderWeather(monthId) {
  const data = weatherData[monthId];
  if (!data) return;

  const html = weatherItems
    .map(
      (item) => `
    <div class="col">
      <div class="card border-0 h-100">
        <div class="card-body">
          <p class="card-title d-flex align-items-center gap-2">
            <i
              class="fa-solid ${item.icon} fa-2xl"
              style="color: rgb(255, 212, 59)"
            ></i>
            <span class="d-flex flex-column">
              <small class="text-body-secondary">${item.label}</small>
              <strong id="season">${data[item.id]}</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  console.log("weatherdata", data);

  const tabPaneId = monthId.replace("-tab", "");
  const container = document.querySelector(`#${tabPaneId} .weather-content`);

  if (container) {
    container.innerHTML = `<div class="row row-cols-2 row-cols-md-3 g-4">
      ${html}
    </div>`;
  }
}

document.getElementById("pills-tab").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    renderWeather(e.target.id);
  }
});

renderWeather("pills-march-tab");

// const gridImageItems = [
//   {
//     id: "Utarakhand",
//     pkg: "50+ packages",
//     imgLink:
//       "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0YXJha2hhbmQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     id: "temperature",
//     icon: "fa-temperature-arrow-up",
//     imgLink: "Typical Temperature",
//   },
//   { id: "crowd", pkg: "fa-people-group", imgLink: "Crowd Level" },
//   { id: "weather", pkg: "fa-calendar-days", imgLink: "Weather Conditions" },
//   { id: "ard", pkg: "fa-cloud-rain", imgLink: "Avg Rainy Days" },
//   { id: "aqt", pkg: "fa-clock", imgLink: "Attraction Queue Time" },
//   { id: "aqt", pkg: "fa-clock", imgLink: "Attraction Queue Time" },
// ];

const regionData = {
  "north-india-tab": [
    {
      id: "Uttarakhand",
      pkg: "50+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0YXJha2hhbmQlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "Rajasthan",
      pkg: "50+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Himachal",
      pkg: "25+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1697729733902-f8c92710db07?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Jammu & Kashmir",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Uttar Pradesh",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Delhi",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Ladakh",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "south-india-tab": [
    {
      id: "Kerala",
      pkg: "90+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "Karnataka",
      pkg: "50+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1631714712922-eaa39e4452fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2FybmF0YWthfGVufDB8fDB8fHww",
    },
    {
      id: "TamilNadu",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFtaWxOYWR1fGVufDB8fDB8fHww",
    },
    {
      id: "Andaman",
      pkg: "25+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW5kYW1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "Telangana",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1621909321963-2276c9660298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVsYW5nYW5hfGVufDB8fDB8fHww",
    },
    {
      id: "Andhra Pradesh",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1604491671692-bb9413a6003b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QW5kaHJhJTIwUHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "Puducherry",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1588623598822-9ff0cd048b8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ],
  "east-india-tab": [
    {
      id: "West Bengal",
      pkg: "60+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1626198226928-617fc6c6203e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2VzdCUyMEJlbmdhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "Odisha",
      pkg: "40+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1694475133441-bbca84f93082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T2Rpc2hhfGVufDB8fDB8fHww",
    },
    {
      id: "Sikkim",
      pkg: "30+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2lra2ltfGVufDB8fDB8fHww",
    },
    {
      id: "Meghalaya",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1593813738953-fb3c93e0769d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVnaGFsYXlhfGVufDB8fDB8fHww",
    },
    {
      id: "Assam",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1602020277972-fd160de66021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFzc2FtfGVufDB8fDB8fHww",
    },
    {
      id: "Arunachal Pradesh",
      pkg: "20+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QXJ1bmFjaGFsJTIwUHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "Bihar",
      pkg: "20+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1631984876480-f821262c2609?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmloYXJ8ZW58MHx8MHx8fDA%3D",
    },
  ],

  "west-india-tab": [
    {
      id: "Goa",
      pkg: "90+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29hfGVufDB8fDB8fHww",
    },
    {
      id: "Maharashtra",
      pkg: "70+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1708661816486-25da90d0bf29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFoYXJhc2h0cmF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "Gujarat",
      pkg: "50+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1697730458625-efdb1ce90fe9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3VqYXJhdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "Rajasthan",
      pkg: "50+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmFqYXN0aGFufGVufDB8fDB8fHww",
    },
    {
      id: "Daman & Diu",
      pkg: "15+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1697133495280-3e3461ff7bc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fERhbWFufGVufDB8fDB8fHww",
    },
    {
      id: "Lakshadweep",
      pkg: "10+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1646130322178-c9d8da261891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFrc2hhZHdlZXB8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "Mumbai",
      pkg: "40+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVtYmFpfGVufDB8fDB8fHww",
    },
  ],

  "central-india-tab": [
    {
      id: "Madhya Pradesh",
      pkg: "60+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFkaHlhJTIwUHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "Chhattisgarh",
      pkg: "30+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hoYXR0aXNnYXJofGVufDB8fDB8fHww",
    },
    {
      id: "Jharkhand",
      pkg: "25+ packages",
      imgLink:
        "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SmhhcmtoYW5kfGVufDB8fDB8fHww",
    },
    {
      id: "Khajuraho",
      pkg: "20+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2hhanVyYWhvfGVufDB8fDB8fHww",
    },
    {
      id: "Varanasi",
      pkg: "25+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmFyYW5hc2l8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "Prayagraj",
      pkg: "20+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1645344273898-7fd1e33803c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJheWFncmFqfGVufDB8fDB8fHww",
    },
    {
      id: "Bhopal",
      pkg: "20+ packages",
      imgLink:
        "https://images.unsplash.com/photo-1608213189166-b099855aee3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmhvcGFsfGVufDB8fDB8fHww",
    },
  ],
};

function renderRegion(regionId) {
  const data = regionData[regionId];

  if (!data) return;

  const html = data
    .map(
      (item) =>
        `<div class="card h-100 border-0 fw-bolder text-bg-dark">
            <img
              src="${item.imgLink}"
              class="card-img h-100 w-100"
              alt="${item.id}"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">${item.id}</h5>
              <p class="card-text">${item.pkg}</p>
            </div>
          </div>`,
    )
    .join("");

  const tabPaneId = regionId.replace("-tab", "");
  const container = document.querySelector(`#${tabPaneId} .grid-images`);
  console.log("regiondata", data);
  if (container) {
    container.innerHTML = `${html}`;
  }
}

document.getElementById("myRegionTab").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    renderRegion(e.target.id);
  }
});

renderRegion("north-india-tab");
