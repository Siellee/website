// JavaScript Document - Formative Assessment 4
// Author: 1st Year College Student
// Theme: Wistoria: Wand & Sword To-Do Board

// 1. Array of Objects to store pre-loaded data (Required Structure)
const initialQuests = [
    { id: 1, text: "Sharpen the grand magic sword" },
    { id: 2, text: "Memorize ignis ignition incantations" }
];

// 2. DOM Element References
const questInput = document.getElementById("questInput");
const addBtn = document.getElementById("addBtn");
const questList = document.getElementById("questList");

// 3. Function to display the quests dynamically (DOM Manipulation)
function renderQuests() {
    // Clear out the existing list items to avoid duplication
    questList.innerHTML = "";

    // Loop through our array data structure
    initialQuests.forEach((quest, index) => {
        // Create a new list item element
        const li = document.createElement("li");
        li.textContent = quest.text;

        // Create a remove button for each quest
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Complete ❌";
        deleteBtn.className = "btn-delete";

        // DOM Event: Click handling to remove an item
        deleteBtn.addEventListener("click", function() {
            removeQuest(index);
        });

        // Append the button to the list item, and list item to the list
        li.appendChild(deleteBtn);
        questList.appendChild(li);
    });
}

// 4. Function to add a new quest (Variable usage & logic)
function addQuest() {
    // Storing user input in a local variable
    const currentInput = questInput.value.trim();

    // Basic validation to check if input is empty
    if (currentInput === "") {
        alert("Please write down a valid magic quest!");
        return;
    }

    // Push new object into our array
    initialQuests.push({
        id: Date.now(), // Creates a unique timestamp id
        text: currentInput
    });

    // Clear the input box for the user
    questInput.value = "";

    // Refresh the visible list
    renderQuests();
}

// 5. Function to remove a quest from the data array
function removeQuest(position) {
    // Remove 1 item at the specific index position
    initialQuests.splice(position, 1);
    
    // Refresh the visible list
    renderQuests();
}

// 6. DOM Events: Event Listeners
addBtn.addEventListener("click", addQuest);

// Optional quality of life: allow pressing 'Enter' key to add item
questInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addQuest();
    }
});

// Run the initial setup when the page loads
renderQuests();