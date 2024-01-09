function toggleDarkMode() {
    document.body.style.backgroundColor = "mediumpurple";
    document.querySelector('.cal-box').style.backgroundColor = "black";
    document.querySelector('.cal-result').style.backgroundColor = "black";
    document.querySelector('.cal-keys').style.backgroundColor = "rgb(34, 33, 33)";

    const buttons = document.querySelectorAll('.key-btn');
    buttons.forEach(button => {
        button.style.backgroundColor = "rgb(34, 33, 33)";
        button.style.color = "#fff";
    });

    document.getElementById('dark-mode').style.display = 'none';
    document.getElementById('light-mode').style.display = 'inline-block';
}

function toggleLightMode() {
    document.body.style.backgroundColor = "#fff";
    document.querySelector('.cal-box').style.backgroundColor = "#fff";
    document.querySelector('.cal-result').style.backgroundColor = "#fff";
    document.querySelector('.cal-keys').style.backgroundColor = "#fff";

    const buttons = document.querySelectorAll('.key-btn');
    buttons.forEach(button => {
        button.style.backgroundColor = "#fff";
        button.style.color = "#000";
    });

    document.getElementById('dark-mode').style.display = 'inline-block';
    document.getElementById('light-mode').style.display = 'none';
}

// Additional code for calculator logic...

// Initial theme
toggleDarkMode(); // Set the initial theme to dark mode
