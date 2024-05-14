function analyzeNumbers() {
    const inputString = document.getElementById("numbers").value;
    const numbers = inputString.split(",").map(Number);

    // Input Validation
    if (numbers.length !== 25) {
        alert("Please enter exactly 25 numbers!");
        return;
    }
    if (numbers.some(isNaN)) {
        alert("Please enter only valid numbers!");
        return;
    }

    let oddCount = 0;
    let evenCount = 0;
    let sum = 0;

    // Analysis with Visual Feedback
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ''; // Reset content

    numbers.forEach(num => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        resultItem.textContent = (num % 2 === 0) 
                               ?  `${num} is Even` 
                               : `${num} is Odd`;
        resultDiv.appendChild(resultItem);
        sum += num;
    });

    // Display Final Results
    resultDiv.innerHTML += `
        <p class="result-item"><strong>Total Sum:</strong> ${sum}</p>
    `;
    resultDiv.style.opacity = '1'; // Show results with fade-in
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Optional: Store the theme preference in localStorage for persistence
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check for stored preference on page load
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
} 