document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const modal = document.getElementById("order-modal");
  const modalBox = modal.querySelector(".transform");
  const closeModalBtn = document.getElementById("close-modal");
  const addToCartBtn = document.getElementById("add-to-cart-btn");

  const qtyDisplay = document.getElementById("item-qty");
  const minusQty = document.getElementById("minus-qty");
  const plusQty = document.getElementById("plus-qty");

  const sweetBtns = document.querySelectorAll(".sweetness-opt");
  const sizeInputs = document.querySelectorAll('input[name="size"]');
  const sizeLabels = document.querySelectorAll(".size-opt");

  let currentQty = 1;
  let basePrice = 0.0;
  let selectedSweetness = "100%";

  window.openOrderModal = function (itemName, price, category) {
    basePrice = parseFloat(price);
    currentQty = 1;
    qtyDisplay.innerText = currentQty;

    document.getElementById("modal-item-name").innerText = itemName;
    document.getElementById("modal-item-category").innerText =
      category || "Coffee";

    resetModalOptions();
    updateModalTotal();
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modalBox.classList.remove("scale-95");
      modalBox.classList.add("scale-100");
    }, 10);
  };

  function closeModal() {
    modal.classList.add("opacity-0");
    modalBox.classList.remove("scale-100");
    modalBox.classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }

  closeModalBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  plusQty.addEventListener("click", () => {
    currentQty++;
    qtyDisplay.innerText = currentQty;
    updateModalTotal();
  });

  minusQty.addEventListener("click", () => {
    if (currentQty > 1) {
      currentQty--;
      qtyDisplay.innerText = currentQty;
      updateModalTotal();
    }
  });

  function updateModalTotal() {
    let extraPrice = 0;

    const selectedSize = document.querySelector(
      'input[name="size"]:checked',
    ).value;
    if (selectedSize === "Large") {
      extraPrice += 0.5;
    }
    let finalTotal = (basePrice + extraPrice) * currentQty;
    document.getElementById("modal-total-price").innerText =
      `$ ${finalTotal.toFixed(2)}`;

    updateSizeDOM();
  }
  sizeInputs.forEach((input) => {
    input.addEventListener("change", updateModalTotal);
  });

  function updateSizeDOM() {
    sizeInputs.forEach((input, index) => {
      const label = sizeLabels[index];
      if (input.checked) {
        label.className =
          "flex items-center justify-between p-3 border border-[#6b4f4f] bg-[#6b4f4f]/5 rounded-xl cursor-pointer size-opt";
      } else {
        label.className =
          "flex items-center justify-between p-3 border border-gray-200 rounded-xl cursor-pointer size-opt hover:bg-gray-50";
      }
    });
  }

  sweetBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      selectedSweetness = this.getAttribute("data-val");
      sweetBtns.forEach((b) => {
        b.className =
          "sweetness-opt border border-gray-200 p-2 rounded-xl text-xs font-semibold hover:border-[#6b4f4f] transition-all text-center";
      });

      // Active
      this.className =
        "sweetness-opt border-[#6b4f4f] bg-[#6b4f4f]/5 text-[#6b4f4f] p-2 rounded-xl text-xs font-bold text-center";
    });
  });

  function resetModalOptions() {
    // Normal
    selectedSweetness = "100%";
    sweetBtns.forEach((b) => {
      if (b.getAttribute("data-val") === "100%") {
        b.className =
          "sweetness-opt border-[#6b4f4f] bg-[#6b4f4f]/5 text-[#6b4f4f] p-2 rounded-xl text-xs font-bold text-center";
      } else {
        b.className =
          "sweetness-opt border border-gray-200 p-2 rounded-xl text-xs font-semibold hover:border-[#6b4f4f] transition-all text-center";
      }
    });

    // Regular Size
    document.querySelector('input[name="size"][value="Regular"]').checked =
      true;
  }

  // Add BTN
  addToCartBtn.addEventListener("click", () => {
    const itemName = document.getElementById("modal-item-name").innerText;
    const itemCategory = document.getElementById(
      "modal-item-category",
    ).innerText;
    const finalPrice = document.getElementById("modal-total-price").innerText;
    const size = document.querySelector('input[name="size"]:checked').value;

    const orderItem = {
      name: itemName,
      category: itemCategory,
      price: finalPrice,
      sweetness: selectedSweetness,
      size: size,
      quantity: currentQty,
    };

    console.log("Order Added:", orderItem);

    // បង្ហាញការជូនដំណឹង ឬហៅទៅកាន់ Function ថែម Order របស់លោក
    alert(
      `Added ${currentQty}x ${itemName} (${size}, Sweet: ${selectedSweetness}) to cart!`,
    );

    closeModal();
  });
});
