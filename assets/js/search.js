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
      console.log("✅ Search data loaded:", posts);
    })
    .catch(error => {
      console.error('❌ Error loading search data:', error);
    });

  function runSearch() {
    const queryInput = document.getElementById('search-input');
    const resultsList = document.getElementById('search-results');

    if (!queryInput || !resultsList) {
      console.error("❌ Search input or results container not found");
      return;
    }

    const query = queryInput.value.trim().toLowerCase();
    console.log("🔍 Search query:", query);

    if (!query || posts.length === 0) return;

    const results = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );

    console.log("🔎 Search results:", results);
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
  setTimeout(() => {
    const inputEl = document.getElementById('search-input');
    const buttonEl = document.getElementById('search-button');

    if (inputEl && buttonEl) {
      inputEl.addEventListener('input', runSearch);
      buttonEl.addEventListener('click', runSearch);
    } else {
      console.warn("⚠️ Search elements not found. Make sure they exist in the DOM.");
    }
  }, 100); // Delay to ensure DOM is ready
});
