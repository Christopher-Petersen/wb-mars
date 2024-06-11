alert("Welcome Astronaut!");
alert("Starting your Mars Adventure!");
alert("Booting up. . . ");
alert("All Systems Go!");
alert("Let's Start!");

const username = prompt("Hi there. What's your name?");

alert(
  "Hello, " +
    username +
    "!" +
    " Welcome to the Mars Adventure Game! Yesterday, you received a call from your good friend at Nasa. They need someone to go to Mars this weekend, and YOU'VE been chosen!"
);

let excited = prompt("Are you excited? Type Y or N");
excited = excited.toUpperCase();

if (excited === "Y") {
  alert("I knew you'd say that. Who wouldn't want to go to Mars?!");
} else if (excited === "N") {
  alert(
    "Well, it's too late to back out now. Guess we'll make the best of it."
  );
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt("How many suitcases do you plan to bring?");

numSuitcases = Number(numSuitcases);
if (numSuitcases > 2) {
  alert("That's way too many! You'll have to pack more lightly.");
} else if (numSuitcases <= 2) {
  alert("Perfect. You'll certainly fit in the spaceship!");
}

alert("You're allowed to bring one companion animal with you.");
const companionType = prompt(
  "What kind of companion animal would you like to bring?"
);
let companionName = prompt("What is your companion's name?");
let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

alert(
  "Cool, so you're bringing " + companionName + " the " + companionType + "!"
);

alert("NASA has an interior design team offering to outfit your spaceship!");
alert(
  "You have a couple of options for the interior decor of your ship. Your options are: A. Sleek, Modern Minimalism, B. Retro/Vintage Space Age, or C. Victorian-era Steampunk."
);
let decorChoice = prompt("Which decor would you like? Choose A, B, or C.");
let decor;
decorChoice = decorChoice.toUpperCase();
if (decorChoice === "A") {
  decor = "Modern Minimalist";
  alert("You chose: Modern Minimmalist");
  alert("Keeping it simple. I like it!");
} else if (decorChoice === "B") {
  decor = "Retro";
  alert("You chose: Retro");
  alert("Old school! It doesn't get better than that!");
} else if (decorChoice === "C") {
  decor = "Steampunk";
  alert("You chose: Steampunk");
  alert(
    "Some Pumpkins! You're no Wooden Spoon like some of the people I've dealt with."
  );
} else {
  decor = "Space Junk";
  alert(
    "Fine! If you're gonna be like that, the theme will be Space Junk! You'll fit right in."
  );
}

alert(
  `${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship!`
);

let timer = 5;
while (timer > 0) {
  alert(`${timer}. . .`);
  timer = timer - 1;
}
alert(`***LIFTOFF***`);
