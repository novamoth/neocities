const quotes = [
  "When I was your age, I always did it for half an hour a day. Why, sometimes I've believed as many as six impossible things before breakfast.\n-The White Queen",
  "I'm afraid I can't explain myself, sir. Because I am not myself, you see?\n-Alice",
  "Now I do not know whether I was then a man dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man.\n-Zhuang Zhou",
  "Everything changes and nothing stands still.\n-Heraclitus",
  "You may say I'm a fool, feelin' the way that I do\nI believe in friends and laughter, and the wonders love can do\nI believe in songs and magic\nAnd that's why I believe in you\n-Pollyanna, Mother 1 Soundtrack",
  "Millions and billions and trillions of stars\nBut I'm down here low\nFussin' over scars on my soul, on my soul\nOn my soul, on my soul\nOn my soul, I am so infinitesimal, oh\n-Infinitesimal, Mother Mother",
  "So here I am\nGrowing older all the time\nLooking older all the time\nFeelin' younger in my mind\n-Superman, Goldfinger",
  "I grew up on the corner of normal and tragedy,\nDreaming of bright lights and energy,\nThere was silver and gold on the path laid in front of me\nBut the shadows seemed more interesting.\n-Dawn, Echo Black",
  "Basically, I bet you'll see\nAt first I'm not quite what I seem\nEvery day is just the same\nPicking names, repeating faces\n-The Chattering Lack of Common Sense, Ghost & Pals",
  "I'm gonna live my life like I'm gonna die young,\nLike it's never enough, like I'm born to run\n-I'm born to run, American Authors",
  "Too many issues, so I wouldn't blame you\nBearer of bad news, I've got no excuse\n… I talk to myself, self\nI think I need help, help\nSo what if I'm na-na-na not okay?\nI'm not Okay, Weathers",
  "Through our eyes, the universe is perceiving itself. Through our ears, the universe is listening to its harmonies. We are the witnesses through which the universe becomes conscious of its glory, of its magnificence.\n-Alan W Watts",
  "Our Sun is a second- or third-generation star. All of the rocky and metallic material we stand on, the iron in our blood, the calcium in our teeth, the carbon in our genes were produced billions of years ago in the interior of a red giant star. We are made of star-stuff.\n-Carl Sagan",
  "The Universe is under no obligation to make sense to you.\nNeil DeGrasse Tyson",
  "Look again at that [pale, blue] dot. That's here. That's us. On it everyone you love, everyone you know, everyone you've ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every superstar, every supreme leader, every saint and sinner in the history of our species lived there, on a mote of dust suspended on a sunbeam.\n-Carl Sagan",
  "In the beginning there was nothing, which exploded.\nTerry Pratchet",
  "Arriving at each new city, the traveler finds again a past of his that he did not know he had: the foreignness of what you no longer are or no longer possess lies in wait for you in foreign, unpossessed places.\n-Invisible Cities",
  "I was walking through my life and feeling sick that's when\nI started plotting out a course to getting free again\nWhile making pennies for some psychopath businessman\nI started thinking that I might be on the verge of something\n-The Verge, Bad Moves",
  "Will I always know this divide?\nLiving host to this war inside\nTake this ghost of me with the tide to die\nAnd release my heart to come alive!\n-Tip Toes, half•alive",
  "Floating in outer space, have I misplaced a part of my soul?\nLost in the in-between, or so it seems, I'm out of control\nFloating in outer space, have I misplaced a part of my soul?\nLost in the in-between, but it can't keep me asleep for long, 'cause\n\nI still feel alive!\n-still feel., half•alive",
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("quote").innerText = randomQuote;
});
