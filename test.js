document.addEventListener("DOMContentLoaded", function () {
  let sidebarHTML = `
    <nav
      id="sidebar"
      class="w-64 h-screen bg-[#152131] shadow-xl fixed left-0 top-0 z-50
             transition-all duration-300 flex flex-col p-4 overflow-hidden"
    >

      <!-- Header -->
      <div class="flex items-center pt-2 relative">
      <div class="brand-info flex items-center gap-3">
        <i class="fa-solid fa-laptop-code text-white text-[35px]"></i>
        <p class="font-bold text-white text-[18px] leading-none tracking-wide">
          CodeVault
        </p>
      </div>

        <button
          id="toggle-sidebar"
          class="absolute -right-3 top-1/2 -translate-y-1/2
                w-8 h-8 bg-[#1e293b] text-white rounded-full
                flex items-center justify-center shadow-md
                hover:bg-[#272E5C] transition duration-200"
        >
          <i id="toggle-icon" class="fas fa-chevron-left text-[12px]"></i>
        </button>
      </div>
       <br>

      <!-- Menu -->
      <div class="flex-grow space-y-1 pt-2">

        <a href="New_snippet.html" class="nav-link flex items-center gap-4 p-3  rounded-xl  hover:bg-[#1e293b] transition">
          <i class="fa-solid fa-circle-plus w-6 text-[20px] text-center text-gray-400"></i>
          <span class="nav-text text-gray-200">New Snippet</span>
        </a>

        <hr class="border-gray-700 my-3">
        <br>

        <a href="index.html" class="nav-link flex items-center gap-4 p-3 rounded-xl hover:bg-[#1e293b] transition">
          <i class="fa-solid fa-border-all w-6 text-[20px] text-center text-gray-400"></i>
          <span class="nav-text text-gray-200">All Snippets</span>
        </a>

        <a href="#" class="nav-link flex items-center gap-4 p-3 rounded-xl hover:bg-[#1e293b]">
          <i class="fa-solid fa-code  w-6 text-center text-gray-400"></i>
          <span class="nav-text text-gray-200">Languages</span>
        </a>

        <a href="#" class="nav-link flex items-center gap-4 p-3 rounded-xl hover:bg-[#1e293b]">
          <i class="fa-solid fa-heart-circle-plus w-6 text-center text-gray-400"></i>
          <span class="nav-text text-gray-200">Favorites</span>
        </a>

        <a href="#" class="nav-link flex items-center gap-4 p-3 rounded-xl hover:bg-[#1e293b]">
          <i class="fa-solid fa-hashtag w-6 text-center text-gray-400"></i>
          <span class="nav-text text-gray-200">Tags</span>
        </a>

      </div>
    </nav>
  `;

  // Inject Sidebar
  document.getElementById("sidebar-container").innerHTML = sidebarHTML;

  // Elements
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggle-sidebar");
  const toggleIcon = document.getElementById("toggle-icon");
  const brandInfos = document.querySelectorAll(".brand-info");
  const navTexts = document.querySelectorAll(".nav-text");
  const mainContent = document.getElementById("main-content");

  // Toggle Sidebar
  toggleBtn.addEventListener("click", () => {
    const expanded = sidebar.classList.contains("w-64");

    if (expanded) {
      // COLLAPSE
      sidebar.classList.remove("w-64");
      sidebar.classList.add("w-20");

      if (mainContent) {
        mainContent.classList.remove("ml-64");
        mainContent.classList.add("ml-20");
      }

      brandInfos.forEach((el) => el.classList.add("hidden"));
      navTexts.forEach((el) => el.classList.add("hidden"));

      toggleIcon.classList.remove("fa-chevron-left");
      toggleIcon.classList.add("fa-chevron-right");
    } else {
      // EXPAND
      sidebar.classList.remove("w-20");
      sidebar.classList.add("w-64");

      if (mainContent) {
        mainContent.classList.remove("ml-20");
        mainContent.classList.add("ml-64");
      }

      brandInfos.forEach((el) => el.classList.remove("hidden"));
      navTexts.forEach((el) => el.classList.remove("hidden"));

      toggleIcon.classList.remove("fa-chevron-right");
      toggleIcon.classList.add("fa-chevron-left");
    }
  });
});
