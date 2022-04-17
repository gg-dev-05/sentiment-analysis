const URL = "https://g14-analyzer.herokuapp.com";
const sentimentContainer = document.getElementById("sentiment-container");
let interval;
document
  .querySelector(".sentiment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    // sentimentContainer.style.display = "block";
    sentimentContainer.classList.remove("invisiblity");
    // sentimentContainer.classList.add("not-invisiblity");
    document.getElementById("sentiment").innerHTML = "<i>Analysing...</i>";
    const formData = new FormData(e.target);
    const sentence = formData.get("sentence");
    if (!sentence) return;
    const response = await fetch(`${URL}/api`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sentence,
      }),
    });
    const data = await response.json();
    const sentiment = data["sentiment"];
    toggleSentiment(sentiment);
    interval = setTimeout(() => {
      // sentimentContainer.style.display = "none";
      sentimentContainer.classList.add("invisiblity");
      // sentimentContainer.classList.remove("not-invisiblity");
    }, 5000);
  });

function toggleSentiment(sentiment) {
  clearTimeout(interval);
  // sentimentContainer.style.display = "block";
  sentimentContainer.classList.remove("invisiblity");
  // sentimentContainer.classList.add("not-invisiblity");
  document.getElementById("sentiment").innerText = sentiment;
}
