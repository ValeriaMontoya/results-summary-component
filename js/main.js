async function fetchSummaryData() {
  try {
    const response = await fetch('/data.json');
    return response.json();
  } catch (error) {
    console.error('Error fetching summary data:', error);
    throw error;
  }
}

async function displaySummaryResults() {
  try {
    const categoryElements = document.querySelectorAll('.category');
    const scoreElements = document.querySelectorAll('.score');
    const iconElements = document.querySelectorAll('.icon');
    const summaryData = await fetchSummaryData();

    summaryData.forEach((item, index) => {
      categoryElements[index].textContent = item.category;
      scoreElements[index].textContent = item.score;
      iconElements[index].src = item.icon;
    });
  } catch (error) {
    console.error('Error displaying summary results:', error);
  }
}

displaySummaryResults();
