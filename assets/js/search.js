document.addEventListener('DOMContentLoaded', function () {
  let posts = [];

  // Load search data
  fetch('/search.json')
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      posts = data;
      console.log("Search data loaded:", posts); // Optional for debugging
    })
    .catch(error => {
      console.error('Error loading search data:', error);
    });

  function runSearch() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (!query || posts.length === 0) return;

    const results = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );

    displayResults(results);
  }

  function displayResults(results) {
    const resultsList = document.getElementById('search-results');
    resultsList.innerHTML = '';

    if (results.length === 0) {
      resultsList.innerHTML = '<li>No results found</li>';
      return;
    }

    results.forEach(post => {
      const item = document.createElement('li');
      item.innerHTML = `<a href="${post.url}">${post.title}</a> <small>(${post.date})</small>`;
      resultsList.appendChild(item);
    });
  }

  // Attach listeners after DOM is ready
  document.getElementById('search-input').addEventListener('input', runSearch);
  document.getElementById('search-button').addEventListener('click', runSearch);
});
