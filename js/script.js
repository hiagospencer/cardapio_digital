
const menuData = {
  entradas: [
    {
      id: 1,
      name: "Lasanha de Siri",
      description:
        " feita com camadas delicadas de massa intercaladas com um recheio cremoso de carne de siri fresca, refogada com ervas aromáticas e leve toque de pimenta.",
      price: "R$ 18,90",
      image: "img-marlonista/lasanha-carangueijo.jpg",
    },
    {
      id: 2,
      name: "Camarão ao Molho",
      description:
        "Uma explosão de sabores do litoral: camarões suculentos mergulhados em um molho cremoso e aromático, enriquecido com pimentões coloridos e ervas frescas.",
      price: "R$ 32,50",
      image: "img-marlonista/camarao-molho.jpg",
    },
    {
      id: 3,
      name: "Peixe Frito",
      description:
        "Filés de peixe frescos, pescados nas águas do litoral potiguar, temperados com especiarias da casa e fritos até atingirem o ponto perfeito de crocância dourada. Servidos sobre uma cama de folhas verdes e acompanhados por rodelas de cebola, tomate e limão.",
      price: "R$ 24,90",
      image: "img-marlonista/peixe-frito.jpg",
    },
  ],
  "pratos-principais": [
    {
      id: 4,
      name: "Macarrão com Frutos do Mar",
      description:
        "Uma sinfonia de sabores marinhos: camarões, lulas e polvo cuidadosamente selecionados, salteados com ervas frescas e pimentões coloridos, envoltos em um molho cremoso e aromático.",
      price: "R$ 68,90",
      image: "img-marlonista/macarrao-frutos-mar.jpg",
    },
    {
      id: 5,
      name: "Lagosta com Arroz Refogado",
      description:
        "Duas generosas lagostas grelhadas com manteiga de ervas, servidas sobre um arroz refogado com açafrão, camarões e temperos frescos da costa. O prato é finalizado com folhas aromáticas e pimentões salteados, criando uma explosão de cores e sabores.",
      price: "R$ 52,50",
      image: "img-marlonista/lagosta-arroz.jpg",
    },
    {
      id: 6,
      name: "Polvo ao Molho Verde",
      description:
        "Tentáculos de polvo grelhados com maestria, servidos sobre um cremoso molho verde à base de ervas frescas e azeite extravirgem. A textura macia e o sabor marcante do polvo se harmonizam com o frescor do molho, criando uma experiência gastronômica única.",
      price: "R$ 58,90",
      image: "img-marlonista/polvo-molho.jpg",
    },
  ],
  massas: [
    {
      id: 7,
      name: "Peixe e Camarão com Arroz",
      description:
        "Uma combinação clássica e irresistível da culinária litorânea: filés de peixe dourados e camarões suculentos, servidos sobre arroz refogado com temperos frescos, pimentões e ervas aromáticas. Acompanhado por guarnições especiais e molhos da casa,.",
      price: "R$ 42,90",
      image: "img-marlonista/peixe-camarao.jpg",
    },
    {
      id: 8,
      name: "Camarão Grelhado com Batata Frita",
      description:
        "Espetinhos de camarão grelhado no ponto ideal, com leve toque de limão e ervas frescas, servidos sobre filés de peixe dourados e acompanhados por batatas fritas crocantes. ",
      price: "R$ 48,50",
      image: "img-marlonista/fritas-camarao.jpg",
    },
    {
      id: 9,
      name: "Frutos do Mar com Arroz Refogado",
      description:
        "Uma celebração dos sabores oceânicos: camarões, lagosta, polvo e outros frutos do mar selecionados, preparados com temperos frescos e servidos sobre um arroz refogado com açafrão, pimentões e ervas da casa. Acompanhado por molhos especiais e guarnições tropicais.",
      price: "R$ 38,90",
      image: "img-marlonista/frutos-mar.jpg",
    },
  ],
  sobremesas: [
    {
      id: 10,
      name: "Vieiras Peruanas",
      description:
        "Delicadas vieiras servidas em suas conchas naturais, com toque cítrico de limão fresco e folhas de hortelã para realçar o sabor do mar.",
      price: "R$ 22,90",
      image: "img-marlonista/vieras-peruanas.jpg",
    },
    {
      id: 11,
      name: "Polvo com Lagosta",
      description:
        "Uma combinação exuberante dos sabores mais nobres do mar: tentáculos de polvo grelhados com textura macia e sabor intenso, acompanhados por caudas de lagosta suculentas, douradas na manteiga de ervas. ",
      price: "R$ 24,50",
      image: "img-marlonista/polvo-lagosta.jpg",
    },
    {
      id: 12,
      name: "Camarão com Arroz Refogado",
      description:
        "Camarões frescos salteados com alho, cebola e ervas aromáticas, envolvidos em um arroz refogado com açafrão, pimentões e temperos da casa. ",
      price: "R$ 18,90",
      image: "img-marlonista/camarao-arroz-refogado.jpg",
    },
  ],
  bebidas: [
    {
      id: 13,
      name: "Suco Natural de Laranja",
      description: "Suco de laranja fresco espremido na hora.",
      price: "R$ 12,90",
      image:
        "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 14,
      name: "Caipirinha de Limão",
      description:
        "Tradicional caipirinha brasileira com limão e cachaça premium.",
      price: "R$ 18,90",
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 15,
      name: "Refrigerante Artesanal",
      description: "Refrigerante artesanal sabor limão siciliano.",
      price: "R$ 14,50",
      image:
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ],
  vinhos: [
    {
      id: 16,
      name: "Vinho Tinto Reserva",
      description:
        "Vinho tinto reserva, safra 2018, harmoniza com carnes vermelhas.",
      price: "R$ 89,90",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 17,
      name: "Vinho Branco Sauvignon Blanc",
      description:
        "Vinho branco seco, ideal para acompanhar peixes e frutos do mar.",
      price: "R$ 75,50",
      image:
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 18,
      name: "Espumante Brut",
      description: "Espumante brut nacional, ideal para celebrações.",
      price: "R$ 62,90",
      image:
        "https://images.unsplash.com/photo-1568216651129-ead9c19e6d33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
  ],
};

// Elementos DOM
const categoryItems = document.querySelectorAll(".category-item");
const categoryTitle = document.getElementById("categoryTitle");
const productsTable = document.getElementById("productsTable");
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");

// Função para carregar produtos de uma categoria
function loadCategory(category) {
  // Atualizar título da categoria
  categoryTitle.textContent =
    categoryItems[getCategoryIndex(category)].textContent.trim();

  // Limpar tabela de produtos
  productsTable.innerHTML = "";

  // Obter produtos da categoria selecionada
  const products = menuData[category];

  // Adicionar produtos à tabela
  products.forEach((product) => {
    const productRow = document.createElement("div");
    productRow.className = "product-row";

    productRow.innerHTML = `
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <span class="product-price">${product.price}</span>
                    </div>
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                `;

    productsTable.appendChild(productRow);
  });
}

// Função auxiliar para obter o índice da categoria
function getCategoryIndex(category) {
  const categories = Array.from(categoryItems).map(
    (item) => item.dataset.category
  );
  return categories.indexOf(category);
}

// Adicionar event listeners para as categorias
categoryItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Remover classe active de todos os itens
    categoryItems.forEach((i) => i.classList.remove("active"));

    // Adicionar classe active ao item clicado
    this.classList.add("active");

    // Carregar produtos da categoria selecionada
    loadCategory(this.dataset.category);

    // Fechar menu lateral em dispositivos móveis
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("active");
    }
  });
});

// Event listener para o botão de menu móvel
menuToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// Fechar menu lateral ao clicar fora dele em dispositivos móveis
document.addEventListener("click", function (event) {
  if (
    window.innerWidth <= 768 &&
    !sidebar.contains(event.target) &&
    !menuToggle.contains(event.target) &&
    sidebar.classList.contains("active")
  ) {
    sidebar.classList.remove("active");
  }
});

function openModal(imageSrc, productName) {
  modalImage.src = imageSrc;
  modalCaption.textContent = productName;
  imageModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Previne scroll da página
}

// Função para fechar o modal
function closeImageModal() {
  imageModal.classList.remove("active");
  document.body.style.overflow = ""; // Restaura scroll da página
}

// Event listener para fechar modal
closeModal.addEventListener("click", closeImageModal);

// Fechar modal ao clicar fora da imagem
imageModal.addEventListener("click", function (event) {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

// Fechar modal com tecla ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && imageModal.classList.contains("active")) {
    closeImageModal();
  }
});

// Modificar a função loadCategory para adicionar event listeners às imagens
function loadCategory(category) {
  // Atualizar título da categoria
  categoryTitle.textContent =
    categoryItems[getCategoryIndex(category)].textContent.trim();

  // Limpar tabela de produtos
  productsTable.innerHTML = "";

  // Obter produtos da categoria selecionada
  const products = menuData[category];

  // Adicionar produtos à tabela
  products.forEach((product) => {
    const productRow = document.createElement("div");
    productRow.className = "product-row";

    productRow.innerHTML = `
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <span class="product-price">${product.price}</span>
                </div>
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="product-thumbnail">
                </div>
            `;

    productsTable.appendChild(productRow);
  });

  // Adicionar event listeners para as imagens dos produtos
  setTimeout(() => {
    const productImages = document.querySelectorAll(".product-thumbnail");
    productImages.forEach((img, index) => {
      img.addEventListener("click", function () {
        const product = products[index];
        openModal(product.image, product.name);
      });

      // Adicionar cursor pointer para indicar que é clicável
      img.style.cursor = "pointer";

      // Efeito de hover na imagem
      img.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
      });

      img.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  }, 0);
}

// Carregar categoria inicial
loadCategory("entradas");
