<script>
  let posts = [];

  // Load search data
  fetch('/search.json')
    .then(response => response.json())
    .then(data => posts = data);

  // Handle search input
  document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    const results = posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
    );

    displayResults(results);
  });

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
</script>
