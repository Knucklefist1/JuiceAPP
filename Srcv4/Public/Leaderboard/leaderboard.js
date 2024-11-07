// Sample data structure for juices and votes
const juices = [
    { name: "Green Detox", votes: 10, creator: "Alice" },
    { name: "Tropical Bliss", votes: 8, creator: "Bob" },
    { name: "Berry Boost", votes: 15, creator: "Charlie" }
];

function displayJuices() {
    const juicesList = document.getElementById("juices-list");
    juicesList.innerHTML = "";
    juices.forEach((juice, index) => {
        const juiceItem = document.createElement("div");
        juiceItem.classList.add("juice-item");
        juiceItem.innerHTML = `
            <h3>${juice.name}</h3>
            <p>Created by: ${juice.creator}</p>
            <p>Votes: <span id="votes-${index}">${juice.votes}</span></p>
            <button class="vote-button" onclick="vote(${index})">Vote</button>
        `;
        juicesList.appendChild(juiceItem);
    });
}

function vote(index) {
    // Increase the vote count
    juices[index].votes += 1;
    // Update the displayed vote count for the clicked item
    document.getElementById(`votes-${index}`).textContent = juices[index].votes;
    // Refresh the podium leaderboard based on updated votes
    updateLeaderboard();
}

function updateLeaderboard() {
    // Sort juices by votes in descending order
    const sortedJuices = [...juices].sort((a, b) => b.votes - a.votes);

    // Get the podium element to display top 3 juices
    const podium = document.getElementById("podium");
    podium.innerHTML = "";

    // Display top 3 ranked juices in the podium
    const ranks = ["1", "2", "3"];
    sortedJuices.slice(0, 3).forEach((juice, index) => {
        const podiumItem = document.createElement("div");
        podiumItem.classList.add("podium-item");
        podiumItem.style.height = `${180 + index * 20}px`; // Adjust height for visual effect

        podiumItem.innerHTML = `
            <span class="rank">${ranks[index]}</span>
            <div class="avatar"></div>
            <p>${juice.creator}</p>
            <p>Votes: ${juice.votes}</p>
        `;
        podium.appendChild(podiumItem);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayJuices();
    updateLeaderboard();
});
