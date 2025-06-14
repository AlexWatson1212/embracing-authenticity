<script>
  document.addEventListener('DOMContentLoaded', function () {
    let posts = [];

    // Load search data
    fetch('/search.json')
      .then(response => response.json())
      .then(data => posts = data);

    function runSearch() {
      const query = document.getElementById('search-input').value.trim().toLowerCase();
      const results = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query)
      );
      displayResults(results);
    }

    // Attach event listeners once DOM is ready
    document.getElementById('search-input').addEventListener('input', runSearch);
    document.getElementById('search-button').addEventListener('click', runSearch);

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
  });
</script>
