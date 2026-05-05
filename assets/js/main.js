const grid = document.querySelector("#saintsGrid");
const searchInput = document.querySelector("#searchInput");

function initials(name) {
  return name
    .replace(/^(São|Santa|Santo|Beata|Beato|Venerável|Servo de Deus|Serva de Deus)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function renderCards(items) {
  if (!items.length) {
    grid.innerHTML = '<p class="empty-state">Nenhum testemunho encontrado para essa busca.</p>';
    return;
  }

  grid.innerHTML = items.map((santo) => `
    <article class="saint-card">
      <div class="portrait" aria-hidden="true">
        ${santo.imagem ? `<img src="${santo.imagem}" alt="">` : initials(santo.nome)}
      </div>
      <div>
        <p class="saint-status">${santo.status} · ${santo.periodo}</p>
        <h3>${santo.nome}</h3>
      </div>
      <p>${santo.resumo}</p>
      <div class="tags">
        ${santo.virtudes.slice(0, 3).map((virtude) => `<span class="tag">${virtude}</span>`).join("")}
      </div>
      <a class="button" href="santos/${santo.slug}.html">Abrir história</a>
    </article>
  `).join("");
}

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

searchInput.addEventListener("input", () => {
  const term = normalize(searchInput.value.trim());
  const filtered = santos.filter((santo) => {
    const haystack = normalize([
      santo.nome,
      santo.status,
      santo.resumo,
      santo.destaque,
      ...santo.virtudes
    ].join(" "));
    return haystack.includes(term);
  });

  renderCards(filtered);
});

renderCards(santos);
