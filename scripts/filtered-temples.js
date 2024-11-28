const lastModified = document.querySelector("#last-modified");

const today = new Date();
const formattedDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' }).format(today);

if (lastModified) lastModified.textContent = formattedDate;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Salt Lake Temple",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 185000,
		imageUrl: "images/salt-lake.png" // Changed to imageUrl
	  },
	  {
		templeName: "Provo Utah Temple",
		location: "Provo, Utah, United States",
		dedicated: "2016, March, 20",
		area: 85000,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah-temple/400x250/provo-utah-temple-exterior-1416671-wallpaper.jpg"
	  },
	  {
		templeName: "San Antonio Texas Temple",
		location: "San Antonio, Texas, United States",
		dedicated: "2005, May, 22",
		area: 16000,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-antonio-texas-temple/400x250/san-antonio-texas-temple-exterior-1416671-wallpaper.jpg"
	  }
	  
  ];
  
  // Call the function to create cards
  createTempleCards();
  function createTempleCards(filteredTemples) {
	const templeSection = document.querySelector(".images");
	templeSection.innerHTML = ""; // Clear existing content
  
	filteredTemples.forEach((temple) => {
	  // Create card container
	  const templeCard = document.createElement("div");
	  templeCard.classList.add("temple-card");
  
	  // Temple name
	  const templeName = document.createElement("h3");
	  templeName.textContent = temple.templeName;
  
	  // Temple location
	  const templeLocation = document.createElement("p");
	  templeLocation.textContent = `Location: ${temple.location}`;
  
	  // Dedicated date
	  const templeDedicated = document.createElement("p");
	  templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
	  // Temple area
	  const templeArea = document.createElement("p");
	  templeArea.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
  
	  // Temple image
	  const templeImage = document.createElement("img");
	  templeImage.src = temple.imageUrl;
	  templeImage.alt = `${temple.templeName} Temple`;
	  templeImage.loading = "lazy";
  
	  // Append elements to card
	  templeCard.appendChild(templeImage);
	  templeCard.appendChild(templeName);
	  templeCard.appendChild(templeLocation);
	  templeCard.appendChild(templeDedicated);
	  templeCard.appendChild(templeArea);
  
	  // Append card to section
	  templeSection.appendChild(templeCard);
	});
  }
  
  // Filter functions
  function filterOldTemples() {
	return temples.filter((temple) => {
	  const year = parseInt(temple.dedicated.split(",")[0]);
	  return year < 1900;
	});
  }
  
  function filterNewTemples() {
	return temples.filter((temple) => {
	  const year = parseInt(temple.dedicated.split(",")[0]);
	  return year > 2000;
	});
  }
  
  function filterLargeTemples() {
	return temples.filter((temple) => temple.area > 90000);
  }
  
  function filterSmallTemples() {
	return temples.filter((temple) => temple.area < 10000);
  }
  
  // Event Listeners for navigation menu
  const navigationLinks = document.querySelectorAll(".navigation a");
  
  navigationLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
	  e.preventDefault(); // Prevent default anchor behavior
  
	  // Remove 'active' class from all links and add it to the clicked link
	  navigationLinks.forEach((nav) => nav.classList.remove("active"));
	  link.classList.add("active");
  
	  // Filter and display temples based on the clicked link
	  switch (link.textContent) {
		case "Old":
		  createTempleCards(filterOldTemples());
		  break;
		case "New":
		  createTempleCards(filterNewTemples());
		  break;
		case "Large":
		  createTempleCards(filterLargeTemples());
		  break;
		case "Small":
		  createTempleCards(filterSmallTemples());
		  break;
		case "Home":
		default:
		  createTempleCards(temples); // Display all temples
	  }
	});
  });
  
  // Display all temples by default on page load
  createTempleCards(temples);
  
