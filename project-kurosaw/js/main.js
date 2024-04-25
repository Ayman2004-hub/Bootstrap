// Define array of objects with image URLs and corresponding text
const cardData = [
    {
        img: "example-img/dungeon-meshi.jpg",
        name: "Delicious in Dungeon",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "example-img/kaiju-no-8.jpg",
        name: "Kaiju No. 8",
        release: 2024,
        genre: "Action"
    },
    {
        img: "example-img/wind-braker.jpg",
        name: "Wind Breaker",
        release: 2024,
        genre: "Action"
    },
    {
        img: "example-img/example-4.jpg",
        name: "Magic Mashle",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "example-img/example-5.jpg",
        name: "Red Monster",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "example-img/example-6.jpg",
        name: "Ninja Kamui",
        release: 2024,
        genre: "Action"
    },
];

const trendingCardData = [
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        name: "One Piece",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
        name: "Kaiju No. 8",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
        name: "My Hero Academia Season 7",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
        name: "Wind Breaker",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg",
        name: "Red Monster",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/56940139cdae0325e98566ce40567387.jpg",
        name: "A Condition Called Love",
        release: 2024,
        genre: "Action"
    }
];

const popularCardData = [
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        name: "One Piece",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
        name: "Kaiju No. 8",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
        name: "My Hero Academia Season 7",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
        name: "Wind Breaker",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg",
        name: "Red Monster",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/56940139cdae0325e98566ce40567387.jpg",
        name: "A Condition Called Love",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        name: "One Piece",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
        name: "Kaiju No. 8",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
        name: "My Hero Academia Season 7",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
        name: "Wind Breaker",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg",
        name: "Red Monster",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/56940139cdae0325e98566ce40567387.jpg",
        name: "A Condition Called Love",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        name: "One Piece",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg",
        name: "Kaiju No. 8",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
        name: "My Hero Academia Season 7",
        release: 2024,
        genre: "Action"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
        name: "Wind Breaker",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg",
        name: "Red Monster",
        release: 2024,
        genre: "Adventure"
    },
    {
        img: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/56940139cdae0325e98566ce40567387.jpg",
        name: "A Condition Called Love",
        release: 2024,
        genre: "Action"
    }
];

const carouselItems = document.getElementById("carouselItems");
const trendingCarouselItems = document.getElementById("trendingCarouselItems");
const mostPopularItemsContainer = document.querySelector('.most-popular');
const cardsPerRow = 6;
const totalCards = cardData.length;
const trendingTotalCards = trendingCardData.length; // Add this line

// Calculate number of rows needed
const numRows = Math.ceil(totalCards / cardsPerRow);
const trendingNumRows = Math.ceil(trendingTotalCards / cardsPerRow); // Add this line

// Function to generate card HTML from object data
function generateCardHtml(card) {
    return `
        <div class="card position-relative">
            <img src="${card.img}" class="card-img-top" alt="...">
            <div class="card-overlay mesh-overlay" style="font-size:13px;">
                <p class="card-text">${card.name} <br> ${card.release}, ${card.genre}</p>
            </div>
        </div>
    `;
}

// Generate carousel items for "For You" section
for (let i = 0; i < numRows; i++) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) {
        carouselItem.classList.add("active");
    }

    const row = document.createElement("div");
    row.classList.add("row");

    // Generate cards for this row
    for (let j = i * cardsPerRow; j < Math.min((i + 1) * cardsPerRow, totalCards); j++) {
        const col = document.createElement("div");
        col.classList.add("col-2");

        // Generate card HTML using the object data
        const cardHtml = generateCardHtml(cardData[j]);

        // Add the card HTML to the column
        col.innerHTML = cardHtml;

        // Append the column to the row
        row.appendChild(col);
    }

    // Append the row to the carousel item
    carouselItem.appendChild(row);

    // Append the carousel item to the carousel items container
    carouselItems.appendChild(carouselItem);
}

// Generate carousel items for "Trending Now" section
for (let i = 0; i < trendingNumRows; i++) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) {
        carouselItem.classList.add("active");
    }

    const row = document.createElement("div");
    row.classList.add("row");

    // Generate cards for this row
    for (let j = i * cardsPerRow; j < Math.min((i + 1) * cardsPerRow, trendingTotalCards); j++) {
        const col = document.createElement("div");
        col.classList.add("col-2");

        // Generate card HTML using the object data
        const cardHtml = generateCardHtml(trendingCardData[j]);

        // Add the card HTML to the column
        col.innerHTML = cardHtml;

        // Append the column to the row
        row.appendChild(col);
    }

    // Append the row to the carousel item
    carouselItem.appendChild(row);

    // Append the carousel item to the trending carousel items container
    trendingCarouselItems.appendChild(carouselItem);
}

// Generate cards for "Most Popular" section
for (let i = 0; i < Math.ceil(popularCardData.length / cardsPerRow); i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // Generate cards for this row
    for (let j = i * cardsPerRow; j < Math.min((i + 1) * cardsPerRow, popularCardData.length); j++) {
        const col = document.createElement("div");
        col.classList.add("col-2");

        // Add margin or padding to create a gap between cards
        col.style.marginBottom = "20px"; // You can adjust the value as needed

        // Generate card HTML using the object data
        const cardHtml = generateCardHtml(popularCardData[j]);

        // Add the card HTML to the column
        col.innerHTML = cardHtml;

        // Append the column to the row
        row.appendChild(col);
    }

    // Append the row to the most popular items container
    mostPopularItemsContainer.appendChild(row);
}

const showMoreButton = document.getElementById("showMoreButton");
const hiddenRows = document.querySelectorAll(".hidden-row");

showMoreButton.addEventListener("click", function() {
    hiddenRows.forEach(row => {
        row.classList.remove("d-none");
    });
    // Hide the "Show More" button after revealing all hidden rows
    showMoreButton.classList.add("d-none");
});


function prevSlide() {
    document.getElementById('carouselExampleControls').carousel('prev');
}

function nextSlide() {
    document.getElementById('carouselExampleControls').carousel('next');
}
