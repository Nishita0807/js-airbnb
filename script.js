async function previewData() {
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2024-09-16&checkout=2024-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '587c0f253amsh0e69b7848630f3cp1bd742jsn4ad08bfdad06',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);

        // Log the entire response object for debugging
        console.log('Complete API Response:', response);

        if (response.ok) {
            const result = await response.text(); // Await the text() Promise

            // Log the parsed JSON data to the console
            console.log('Parsed API Response:', result);

            // You can further process the data or update your UI with the received information
        } else {
            console.error('API Error:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

// Call the previewData function before any user input
previewData();
