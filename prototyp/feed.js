document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('posts.json');
    const posts = await response.json();
    const container = document.getElementById('posts-container');

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card bg-base-100 w-96 shadow-sm';
      card.innerHTML = `
        <figure>
          <img src="${post.banner}" alt="${post.title}" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${post.title}</h2>
          <p>${post.text}</p>
          <div class="card-actions justify-end">
            <div class="flex items-center gap-2">
              <img src="${post.user.profile}" class="h-8 w-8 rounded-full" alt="${post.user.username}" />
              <div class="badge badge-outline">${post.user.username}</div>
            </div>
          </div>
        </div>`;
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load posts', err);
  }
});
