// CreateNow.js

document.addEventListener("DOMContentLoaded", () => {
    const ingredients = [
        "Æble", "Ingefær", "Gulerod", "Ananas", "Banan", "Citron", 
        "Spinat", "Agurk", "Grønkål", "Seleri", "Kiwi", 
        "Jordbær", "Avocado", "Passionsfrugt"
    ];

    const ingredientContainer = document.getElementById("ingredientContainer");
    const percentageDisplay = document.getElementById("percentageDisplay");
    const createBtn = document.querySelector(".create-btn");

    const updateTotalPercentage = () => {
        const sliders = document.querySelectorAll('input[type="range"]');
        let total = 0;
        
        sliders.forEach(slider => {
            total += parseInt(slider.value, 10);
        });

        percentageDisplay.textContent = `${total}%`;
        createBtn.disabled = (total !== 100);
    };

    ingredients.forEach(ingredient => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("ingredient-slider");

        const label = document.createElement("label");
        label.innerText = ingredient;
        
        const slider = document.createElement("input");
        slider.type = "range";
        slider.min = "0";
        slider.max = "100";
        slider.value = "0";
        slider.addEventListener("input", updateTotalPercentage);

        wrapper.appendChild(label);
        wrapper.appendChild(slider);
        ingredientContainer.appendChild(wrapper);
    });

    updateTotalPercentage();

    const form = document.getElementById("juiceForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the juice name
        const juiceName = document.getElementById("juiceName").value;

        // Get the selected ingredients and their percentages
        const selectedIngredients = {};
        document.querySelectorAll('.ingredient-slider input[type="range"]').forEach(slider => {
            if (parseInt(slider.value, 10) > 0) {
                const ingredientName = slider.previousElementSibling.textContent;
                selectedIngredients[ingredientName] = `${slider.value}%`;
            }
        });

        showResultModal(juiceName, selectedIngredients);
    });

    const showResultModal = (juiceName, ingredients) => {
        const modal = document.getElementById("resultModal");
        const modalContent = document.getElementById("modalContent");

        // Display juice name in the modal
        modalContent.innerHTML = `<h2>${juiceName}</h2>`;
        for (const [ingredient, percentage] of Object.entries(ingredients)) {
            modalContent.innerHTML += `<p><strong>${ingredient}:</strong> ${percentage}</p>`;
        }
        
        modal.style.display = "block";
    };

    // Close modal on "X" button click
    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("resultModal").style.display = "none";
    });

    // Close modal if clicking outside of the modal content
    window.addEventListener("click", (event) => {
        const modal = document.getElementById("resultModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
