// Script to update the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Function to format the date as "Month Day, Year"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

// Get the last modified date of the document and format it
const lastUpdatedDate = new Date(document.lastModified);
document.getElementById('last-updated').textContent = formatDate(lastUpdatedDate);
