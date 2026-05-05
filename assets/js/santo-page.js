const page = document.body.dataset.santo;
const santo = santos.find((item) => item.slug === page);

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

function renderSaint() {
  if (!santo) {
    document.querySelector("main").innerHTML = `
      <section class="article-section">
        <h1>História não encontrada</h1>
        <p>Volte para a página inicial e escolha outro testemunho.</p>
        <p><a class="back-link" href="../index.html">Voltar ao início</a></p>
      </section>
    `;
    return;
  }

  document.title = `${santo.nome} - EJC`;
  const paragraphs = (text) => text.split("\n\n").map((part) => `<p>${part}</p>`).join("");

  document.querySelector("#saintContent").innerHTML = `
    <section class="saint-hero">
      <div>
        <p class="saint-status">${santo.status} · ${santo.periodo}</p>
        <h1>${santo.nome}</h1>
        <p>${santo.resumo}</p>
        <div class="saint-meta">
          ${santo.virtudes.map((virtude) => `<span class="tag">${virtude}</span>`).join("")}
        </div>
      </div>
      <div class="saint-portrait" aria-label="Espaço para imagem de ${santo.nome}">
        ${santo.imagem ? `<img src="../${santo.imagem}" alt="${santo.nome}">` : initials(santo.nome)}
      </div>
    </section>

    <div class="content-grid">
      <article>
        <section class="article-section">
          <h2>Quem foi</h2>
          ${paragraphs(santo.quemFoi)}
        </section>

        <section class="article-section">
          <h2>Virtudes principais</h2>
          <ul class="virtues-list">
            ${santo.virtudes.map((virtude) => `<li>${virtude}</li>`).join("")}
          </ul>
        </section>

        <section class="article-section">
          <h2>O que ensina aos jovens</h2>
          ${paragraphs(santo.jovem)}
        </section>

        <section class="article-section quote-box">
          <h2>Frase para guardar</h2>
          <p>“${santo.frase}”</p>
        </section>

        <section class="article-section">
          <h2>Reflexão</h2>
          ${paragraphs(santo.reflexao)}
        </section>

        <section class="article-section">
          <h2>Oração</h2>
          <p>${santo.oracao}</p>
        </section>
        <p class="page-actions"><a class="back-link" href="../index.html">Voltar ao início</a></p>
      </article>
    </div>
  `;
}

renderSaint();
