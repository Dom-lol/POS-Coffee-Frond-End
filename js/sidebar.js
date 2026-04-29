document.addEventListener("DOMContentLoaded", function () {
  let sidebarHTML = `
  <nav id="sidebar"
    class="w-64 h-screen bg-[#2c2c2c] text-white fixed left-0 top-0 z-50
           transition-all duration-300 flex flex-col p-4">

    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <i class="fa-solid fa-mug-hot text-[24px]"></i>
        <p class="font-bold text-lg nav-text">POS Coffee</p>
      </div>

      <button id="toggle-sidebar"
        class="w-8 h-8 bg-[#6b4f4f] rounded-full flex items-center justify-center hover:bg-[#5a3f3f]">
        <i id="toggle-icon" class="fas fa-chevron-left text-xs"></i>
      </button>
    </div>

    <!-- Menu -->
    <div class="flex-grow space-y-2">

      <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#6b4f4f] transition" title="Dashboard">
        <i class="fa-solid fa-house w-5 text-center"></i>
        <span class="nav-text">Dashboard</span>
      </a>

      <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#6b4f4f] transition" title="POS / Orders">
        <i class="fa-solid fa-cash-register w-5 text-center"></i>
        <span class="nav-text">POS / Orders</span>
      </a>

      <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#6b4f4f] transition" title="Products">
        <i class="fa-solid fa-box w-5 text-center"></i>
        <span class="nav-text">Products</span>
      </a>

      <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#6b4f4f] transition" title="Reports">
        <i class="fa-solid fa-chart-line w-5 text-center"></i>
        <span class="nav-text">Reports</span>
      </a>

      <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#6b4f4f] transition" title="Users">
        <i class="fa-solid fa-users w-5 text-center"></i>
        <span class="nav-text">Users</span>
      </a>

    </div>

    <!-- Logout -->
    <div>
      <a href="#" class="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500 transition" title="Logout">
        <i class="fa-solid fa-right-from-bracket w-5 text-center"></i>
        <span class="nav-text">Logout</span>
      </a>
    </div>

  </nav>
  `;

  // Inject safely
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

  // Toggle Sidebar
  toggleBtn.addEventListener("click", () => {
    const expanded = sidebar.classList.contains("w-64");

    if (expanded) {
      sidebar.classList.replace("w-64", "w-20");

      if (mainContent) {
        mainContent.classList.replace("ml-64", "ml-20");
      }

      navTexts.forEach((el) => el.classList.add("hidden"));
      toggleIcon.classList.replace("fa-chevron-left", "fa-chevron-right");
    } else {
      sidebar.classList.replace("w-20", "w-64");

      if (mainContent) {
        mainContent.classList.replace("ml-20", "ml-64");
      }

      navTexts.forEach((el) => el.classList.remove("hidden"));
      toggleIcon.classList.replace("fa-chevron-right", "fa-chevron-left");
    }
  });
});
