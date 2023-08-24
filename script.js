const apiurl = 'https://public-api.wordpress.com/rest/v1.1/sites/demnidotno.wordpress.com/posts';

function fetchAndDisplayPosts () {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const postsContainer = document.getElementById('posts-container');

        data.posts.foreach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
              <h2>${post.title}</h2>
              <p>${new Date(post.date).toLocaleDateString()}</p>
              <div>${post.excerpt}</div>
              <a href="${post.URL}">Read more</a> 

            `;
            postsContainer.appendChild(postElement);
        });

    })
    .catch(error => {
        console.error('Error fetching posts', error);
    });
}

window.onload = fetchAndDisplayPosts;