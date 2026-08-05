addEventListener("DOMContentLoaded", async (event) => {
  const response = await fetch("/js/random.json");
  const json = await response.json();

  // quote
  const randomQuote =
    json.quotes[Math.floor(Math.random() * json.quotes.length)];
  if (document.getElementById("quote"))
    document.getElementById("quote").innerHTML = randomQuote.quote;
  if (document.getElementById("quote-attribution"))
    document.getElementById("quote-attribution").innerHTML =
      randomQuote.attribution ?? "";

  // graphics
  const alter = document.getElementById("alter")?.text?.trim();
  // buttons
  if (document.getElementById("graphics-buttons")) {
    let buttons = json.graphics.buttons;
    if (alter) {
      buttons = buttons.filter((button) => {
        return button.alters.includes(alter);
      });
    } else {
      buttons = buttons.filter((button) => {
        return !button.alters.includes("no-main");
      });
    }
    for (let i = 0; i < 5; i++) {
      if (!buttons.length) {
        break;
      }
      const random = Math.floor(Math.random() * buttons.length);
      const button = buttons.splice(random, 1)[0];
      if (!button.sourceUrl) {
        document.getElementById("graphics-buttons").innerHTML +=
          `<img src="/images/graphics/${button.file}" />`;
      } else {
        document.getElementById("graphics-buttons").innerHTML +=
          `<a href="${button.sourceUrl}"><img src="/images/graphics/${button.file}" /></a>`;
      }
    }
  }
  // stamps
  if (document.getElementById("graphics-stamps")) {
    let stamps = json.graphics.stamps;
    if (alter) {
      stamps = stamps.filter((stamp) => {
        return stamp.alters.includes(alter);
      });
    } else {
      stamps = stamps.filter((stamp) => {
        return !stamp.alters.includes("no-main");
      });
    }
    for (let i = 0; i < 5; i++) {
      if (!stamps.length) {
        break;
      }
      const random = Math.floor(Math.random() * stamps.length);
      const stamp = stamps.splice(random, 1)[0];
      if (!stamp.sourceUrl) {
        document.getElementById("graphics-stamps").innerHTML +=
          `<img src="/images/graphics/${stamp.file}" />`;
      } else {
        document.getElementById("graphics-stamps").innerHTML +=
          `<a href="${stamp.sourceUrl}"><img src="/images/graphics/${stamp.file}" /></a>`;
      }
    }
  }
});
