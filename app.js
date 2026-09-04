document.addEventListener("DOMContentLoaded", () => {
  const yearNodes = document.querySelectorAll("[data-current-year]");
  const year = new Date().getFullYear();

  yearNodes.forEach((node) => {
    node.textContent = String(year);
  });

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});
