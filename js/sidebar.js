document.addEventListener("DOMContentLoaded", function () {
  let sidebarHTML = `
  <nav id="sidebar"
    class="w-64 h-screen bg-[#2c2c2c] text-white fixed left-0 top-0 z-50
           transition-all duration-300 flex flex-col p-4">

    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3 overflow-hidden">
        <i class="fa-solid fa-mug-hot text-[24px] shrink-0"></i>
        <p class="font-bold text-lg nav-text transition-all duration-300 whitespace-nowrap">POS Coffee</p>
      </div>

      <button id="toggle-sidebar"
        class="w-8 h-8 bg-[#6b4f4f] rounded-full flex items-center justify-center hover:bg-[#5a3f3f] shrink-0">
        <i id="toggle-icon" class="fas fa-chevron-left text-xs transition-transform duration-300"></i>
      </button>
    </div>        

    <div class="flex-grow space-y-2 overflow-y-auto no-scrollbar">

      <a href="index.html" class="nav-item flex items-center gap-3 p-3 rounded-lg transition group" title="Dashboard">
        <i class="fa-solid fa-house w-5 text-center shrink-0"></i>
        <span class="nav-text transition-all duration-300 whitespace-nowrap">Dashboard</span>
      </a>

      <a href="" class="nav-item flex items-center gap-3 p-3 rounded-lg transition group" title="POS / Orders">
        <i class="fa-solid fa-cash-register w-5 text-center shrink-0"></i>
        <span class="nav-text transition-all duration-300 whitespace-nowrap">POS / Orders</span>
      </a>

      <a href="" class="nav-item flex items-center gap-3 p-3 rounded-lg transition group" title="Products">
        <i class="fa-solid fa-box w-5 text-center shrink-0"></i>
        <span class="nav-text transition-all duration-300 whitespace-nowrap">Products</span>
      </a>

      <a href="" class="nav-item flex items-center gap-3 p-3 rounded-lg transition group" title="Reports">
        <i class="fa-solid fa-chart-line w-5 text-center shrink-0"></i>
        <span class="nav-text transition-all duration-300 whitespace-nowrap">Reports</span>
      </a>

      <a href="" class="nav-item flex items-center gap-3 p-3 rounded-lg transition group" title="Users">
        <i class="fa-solid fa-users w-5 text-center shrink-0"></i>
        <span class="nav-text transition-all duration-300 whitespace-nowrap">Users</span>
      </a>

    </div>

    <div>
      <a href="" class="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500 transition grid-flow-col" title="Logout">
        <i class="fa-solid fa-right-from-bracket w-5 text-center shrink-0"></i>
        <span class="nav-text transition-all duration-300 whitespace-nowrap">Logout</span>
      </a>
    </div>

  </nav>
  `;

  const container = document.getElementById("sidebar-container");
  if (container) {
    container.innerHTML = sidebarHTML;
  }

  // Elements
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggle-sidebar");
  const toggleIcon = document.getElementById("toggle-icon");
  const navTexts = document.querySelectorAll(".nav-text");
  const mainContent = document.getElementById("main-content");
  const navItems = document.querySelectorAll(".nav-item");

  //  ACTIVE NAV LINK
  const activeClasses = ["bg-[#6b4f4f]", "text-white", "shadow-sm"];
  const normalClasses = [
    "text-gray-400",
    "hover:bg-[#6b4f4f]/10",
    "hover:text-white",
  ];

  function handleActiveNav() {
    const currentPath = window.location.pathname;

    navItems.forEach((item) => {
      const itemHref = item.getAttribute("href");

      if (
        currentPath.endsWith(itemHref) &&
        itemHref !== "#" &&
        itemHref !== ""
      ) {
        item.classList.add(...activeClasses);
        item.classList.remove(...normalClasses);
      } else {
        item.classList.add(...normalClasses);
        item.classList.remove(...activeClasses);
      }
    });
  }

  handleActiveNav();

  // ២. LOGIC សម្រាប់ TOGGLE SIDEBAR (EXPAND / COLLAPSE)

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("w-64");
    sidebar.classList.toggle("w-20");

    if (mainContent) {
      mainContent.classList.toggle("ml-64");
      mainContent.classList.toggle("ml-20");
    }

    navTexts.forEach((el) => {
      el.classList.toggle("opacity-0");
      el.classList.toggle("pointer-events-none");
      setTimeout(() => {
        el.classList.toggle("hidden");
      }, 150);
    });

    toggleIcon.classList.toggle("rotate-180");
  });
});
