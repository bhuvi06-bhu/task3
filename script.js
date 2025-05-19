const animations = [
    {
      name: 'Bounce',
      className: 'bounce',
      code: `@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25px); }
  }
  
  .bounce {
    animation: bounce 1s infinite;
  }`
    },
    {
      name: 'Fade In',
      className: 'fade-in',
      code: `@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  .fade-in {
    animation: fadeIn 2s ease-in;
  }`
    }
  ];
  
  const container = document.getElementById("animation-list");
  
  animations.forEach(({ name, className, code }) => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-lg shadow-md";
  
    card.innerHTML = `
      <h2 class="text-xl font-semibold mb-2">${name}</h2>
      <div class="h-24 flex items-center justify-center mb-4 border rounded ${className}">
        <span class="text-lg font-bold">${name}</span>
      </div>
      <pre class="bg-gray-100 p-2 rounded text-sm overflow-auto"><code>${code}</code></pre>
      <button class="mt-2 text-sm bg-blue-500 text-white px-3 py-1 rounded copy-btn">Copy Code</button>
    `;
  
    card.querySelector(".copy-btn").addEventListener("click", () => {
      navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    });
  
    container.appendChild(card);
  });