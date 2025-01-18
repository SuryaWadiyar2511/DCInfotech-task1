// feedback-chart.js

// Fetch feedback data from the server
async function fetchFeedbackData() {
    try {
        // Replace '/api/feedback-stats' with your backend API endpoint
        const response = await fetch('/api/feedback-stats');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data; // Return categories and counts
    } catch (error) {
        console.error('Error fetching feedback data:', error);
        return null;
    }
}

// Initialize the Chart.js visualization
async function initFeedbackChart() {
    const data = await fetchFeedbackData();

    if (!data || !data.categories || !data.counts) {
        // Show an error message if data fetch fails
        document.getElementById('chart-container').innerHTML =
            '<p style="color: red;">Error loading chart data. Please try again later.</p>';
        return;
    }

    // Get the canvas context
    const ctx = document.getElementById('feedbackChart').getContext('2d');

    // Create the chart
    new Chart(ctx, {
        type: 'bar', // Bar chart
        data: {
            labels: data.categories, // X-axis categories
            datasets: [{
                label: 'Feedback Count',
                data: data.counts, // Y-axis counts
                backgroundColor: [
                    '#0073e6', '#28a745', '#ffc107', '#ff5733', '#6f42c1'
                ],
                borderColor: '#000000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, // Chart adjusts to screen size
            plugins: {
                title: {
                    display: true,
                    text: 'Feedback Categories and Counts'
                },
                legend: {
                    display: true
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Feedback Categories'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Feedback Count'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

// Run the script after the page has loaded
document.addEventListener('DOMContentLoaded', initFeedbackChart);
