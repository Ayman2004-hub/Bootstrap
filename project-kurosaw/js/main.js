// Define array of objects with image URLs and corresponding text
const cardData = [
    {
        img: "example-img/dungeon-meshi.jpg",
        text: "Text 1"
    },
    {
        img: "example-img/kaiju-no-8.jpg",
        text: "Text 2"
    },
    {
        img: "example-img/wind-braker.jpg",
        text: "Text 3"
    },
    {
        img: "example-img/example-4.jpg",
        text: "Text 4"
    },
    {
        img: "example-img/example-5.jpg",
        text: "Text 5"
    },
    {
        img: "example-img/example-6.jpg",
        text: "Text 6"
    }
];

const carouselItems = document.getElementById("carouselItems");
const cardsPerRow = 6;
const totalCards = cardData.length;

// Calculate number of rows needed
const numRows = Math.ceil(totalCards / cardsPerRow);

// Function to generate card HTML from object data
function generateCardHtml(card) {
    return `
        <div class="card">
            <img src="${card.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${card.text}</p>
            </div>
        </div>
    `;
}

// Generate carousel items
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

function prevSlide() {
    document.getElementById('carouselExampleControls').carousel('prev');
}

function nextSlide() {
    document.getElementById('carouselExampleControls').carousel('next');
}
