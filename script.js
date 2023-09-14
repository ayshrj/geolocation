function getKanyeQuote() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const quote = data.quote;
      const quoteContainer = document.createElement("div");
      const italicQuote = document.createElement("em");
      italicQuote.classList.add("kanye");
      italicQuote.innerText = `"${quote}"`;

      // Append the quote container below the main container
      const container = document.querySelector("body");
      italicQuote.appendChild(quoteContainer);
      container.appendChild(italicQuote);

      const kanye = document.createElement("div");
      kanye.classList.add("kanye");
      kanye.classList.add("kanye-name");
      kanye.innerText = `-Kanye West`;

      // Append the quote container below the main container
      container.appendChild(kanye);
    })
    .catch((error) => {
      console.error("Error fetching Kanye quote:", error);
    });
}

window.onload = function () {
  getKanyeQuote();
};

function shareLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        function isMobileDevice() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        }

        let url;

        if (isMobileDevice()) {
          url = `https://maps.google.com/?q=${latitude},${longitude}`;
        } else {
          url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        }
        const message = `Check out my location: ${url}`;

        if (navigator.share) {
          navigator
            .share({
              title: "My Location",
              text: message,
              //   url: url,
            })
            .then(() => console.log("Shared successfully"))
            .catch((error) => console.error("Error sharing:", error));
        } else {
          console.log("Web Share API not supported.");
          alert(
            "Web Share API is not supported in this browser. You can manually copy the link and share it."
          );
        }
      },
      function (error) {
        console.error("Error getting location:", error);
        alert("Error getting location. Please try again later.");
      }
    );
  } else {
    console.log("Geolocation is not available in this browser.");
    alert("Geolocation is not available in this browser.");
  }
}
