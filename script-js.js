const pricingData = {
    // ... (include all the pricing data here)
};

// Add Rest of Africa, Asia Pacific, Central & Eastern Europe, Latin America, Middle East, and Western Europe countries
// ... (include all the country additions here)

document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    const messageTypeSelect = document.getElementById('messageType');
    const messageCountInput = document.getElementById('messageCount');
    const calculateButton = document.getElementById('calculateButton');
    const pricingResults = document.getElementById('pricingResults');
    const pricePerMessageSpan = document.getElementById('pricePerMessage');

    // Populate country dropdown
    Object.keys(pricingData).sort().forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    function updatePrice() {
        const country = countrySelect.value;
        const messageType = messageTypeSelect.value;
        const pricePerMessage = pricingData[country][messageType];
        pricePerMessageSpan.textContent = `$${pricePerMessage.toFixed(2)}`;
    }

    function calculatePrice() {
        const country = countrySelect.value;
        const messageType = messageTypeSelect.value;
        const messageCount = parseInt(messageCountInput.value);

        if (pricingData[country] && pricingData[country][messageType]) {
            const pricePerMessage = pricingData[country][messageType];
            const totalCost = pricePerMessage * messageCount;

            pricingResults.innerHTML = `
                <h3>${translations[currentLang].pricingResults}</h3>
                <p>${translations[currentLang].country}: ${country}</p>
                <p>${translations[currentLang].messageType}: ${messageType}</p>
                <p>${translations[currentLang].numberOfMessages}: ${messageCount}</p>
                <p>${translations[currentLang].pricePerMessage}: $${pricePerMessage.toFixed(2)}</p>
                <p>${translations[currentLang].totalCost}: $${totalCost.toFixed(2)}</p>
            `;
        }
    }

    countrySelect.addEventListener('change', updatePrice);
    messageTypeSelect.addEventListener('change', updatePrice);
    calculateButton.addEventListener('click', calculatePrice);

    // Initial price update
    updatePrice();
});

// Add language translation functionality and other necessary JavaScript code here
