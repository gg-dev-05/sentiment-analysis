const URL = "https://g14-analyzer.herokuapp.com";
document
  .querySelector(".sentiment-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
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
    alert(sentiment);
  });
