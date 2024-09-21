const teamMembers = [
  {
    name: "Ian Agustin Lionetti",
    img: "./img/ian.jpeg",
    portfolioLink: "https://ianlio-git.github.io/Portfolio-UADE/",
    figmaLink:
      "https://www.figma.com/design/CnpTpsKwSZuE2ClMp8SzSs/Portfolio?node-id=6-74&m=dev",
    career: "Licenciatura en Informática",
    year: "2° año",
  },
  {
    name: "Nombre 2",
    img: "member2.jpg",
    portfolioLink: "#",
    figmaLink: "https://www.figma.com/file/prototype2",
    career: "Nombre de Carrera",
    year: "2° año",
  },
  {
    name: "Nombre 3",
    img: "member3.jpg",
    portfolioLink: "#",
    figmaLink: "https://www.figma.com/file/prototype3",
    career: "Nombre de Carrera",
    year: "2° año",
  },
  {
    name: "Nombre 4",
    img: "member4.jpg",
    portfolioLink: "#",
    figmaLink: "https://www.figma.com/file/prototype4",
    career: "Nombre de Carrera",
    year: "2° año",
  },
  {
    name: "Nombre 5",
    img: "member5.jpg",
    portfolioLink: "#",
    figmaLink: "https://www.figma.com/file/prototype5",
    career: "Nombre de Carrera",
    year: "2° año",
  },
];

const teamContainer = document.getElementById("team-members");

teamMembers.forEach((member) => {
  const cardHTML = `
            <div class="col-md-4 mb-4">
              <div class="card shadow border-0 rounded overflow-hidden" style="background-color: #f0f0f0;"> <!-- Color gris claro -->
                <div class="d-flex justify-content-center mt-3">
                  <a href="${member.portfolioLink}" target="_blank" style="text-decoration: none;">
                    <img src="${member.img}" class="rounded-circle" alt="${member.name}" style="width: 150px; height: 150px; object-fit: cover;"/>
                  </a>
                </div>
                <div class="card-body text-center">
                  <h5 class="card-title" style="color: #343a40;">${member.name}</h5>
                  <p style="color: #6c757d;">${member.career}, ${member.year}</p>
                  <div class="d-flex justify-content-center mt-2">
                    <a href="${member.figmaLink}" target="_blank" class="btn btn-secondary" style="background-color: #6c757d; border-color: #6c757d;">
                      <img src="./img/figmalogo.png" alt="Figma Logo" class="me-1 rounded" width="25" />
                      Prototipo Figma
                    </a>
                  </div>
                </div>
              </div>
            </div>
          `;
  teamContainer.insertAdjacentHTML("beforeend", cardHTML);
});

function closeNavbar() {
  const navbarCollapse = document.getElementById("navbarNav");
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }
}

// Si deseas que el menú se cierre al hacer clic en un enlace
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeNavbar);
});
