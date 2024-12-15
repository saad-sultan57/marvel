// script.js
const characters = [
    {
        name: "Iron Man",
        image: "assets/images/ironman.jpg",
        alias: "Tony Stark",
        weapon: "Mark 85 Armor",
        actor: "Robert Downey Jr."
    },
    {
        name: "Thor",
        image: "assets/images/thor.jpg",
        alias: "God of Thunder",
        weapon: "Mjolnir/Stormbreaker",
        actor: "Chris Hemsworth"
    },
    {
        name: "Black Widow",
        image: "assets/images/blackwidow.jpg",
        alias: "Natasha Romanoff",
        weapon: "Combat Skills & Widow's Bite",
        actor: "Scarlett Johansson"
    },
    {
        name: "Captain America",
        image: "assets/images/captain.jpg",
        alias: "Steve Rogers",
        weapon: "Vibranium Shield",
        actor: "Chris Evans"
    }
];

// Menu Button Functionality
document.getElementById('menuButton').addEventListener('mouseover', function() {
    document.getElementById('expandedMenu').classList.remove('hidden');
});

document.querySelector('.column-left').addEventListener('mouseleave', function() {
    document.getElementById('expandedMenu').classList.add('hidden');
});

// Image Change on Hover
const changeImage = document.getElementById('changeImage');
const originalSrc = changeImage.src;
const hoverSrc = changeImage.getAttribute('data-hover');

changeImage.addEventListener('mouseover', function() {
    this.src = hoverSrc;
});

changeImage.addEventListener('mouseout', function() {
    this.src = originalSrc;
});

// Rating Functionality
document.getElementById('rating').addEventListener('input', function() {
    const value = this.value;
    let text = '';
    
    switch(true) {
        case (value <= 2):
            text = "Even Hulk can do better!";
            break;
        case (value <= 3):
            text = "Not bad, young Avenger!";
            break;
        case (value <= 4):
            text = "Now that's heroic!";
            break;
        case (value == 5):
            text = "Worthy of Mjolnir!";
            break;
    }
    
    document.getElementById('ratingText').textContent = text;
});

// Display Favorite Character
function displayFavorite() {
    const input = document.getElementById('favoriteChar').value.trim(); 
    
    if (!input) {
        alert('Please enter a character name!');
        return;
    }
    
    const display = document.getElementById('userChoice');
    
    // Check if the input matches any character name (case-insensitive)
    const matchedCharacter = characters.find(character => 
        character.name.toLowerCase() === input.toLowerCase()
    );

    if (matchedCharacter) {
        // If there's a match, show winning message and character info
        display.innerHTML = `
            <span style="color: #00ff00; font-size: 1.5em; text-shadow: 1px 1px 2px black;">
                🎉 Congratulations! You Win! 🎉
            </span><br>
            <span style="color: #ff0000; font-size: 1.3em; text-shadow: 1px 1px 2px black;">
                ${matchedCharacter.name} is one of the Avengers!
            </span><br>
        `;
    } else {
        // If no match, show regular message
        display.innerHTML = `Your favorite Avenger is: <span style="color: #ff0000; font-size: 1.3em; text-shadow: 1px 1px 2px black;">${input}</span><br>
        <span style="font-size: 0.9em;">(This character is not in our Avengers database)</span>`;
    }
}

// Random Character Selection
document.getElementById('playButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    
    // Add fade-out effect
    // document.querySelector('.character-info').style.opacity = '0';
    
    setTimeout(() => {
        document.getElementById('charName').textContent = character.name;
        document.getElementById('charImage').src = character.image;
        document.getElementById('charAlias').textContent = `Alias: ${character.alias}`;
        document.getElementById('charWeapon').textContent = `Weapon: ${character.weapon}`;
        document.getElementById('charActor').textContent = `Actor: ${character.actor}`;
        
        // Add fade-in effect
        document.querySelector('.character-info').style.opacity = '1';
    }, 100);
});

let menuOpen = false;
document.getElementById('menuButton').addEventListener('click', function() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        document.getElementById('expandedMenu').classList.remove('hidden');
    } else {
        document.getElementById('expandedMenu').classList.add('hidden');
    }
});

