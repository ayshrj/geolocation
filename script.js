function shareLocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const message = `Check out my location: ${url}`;

        if (navigator.share) {
          navigator
            .share({
              title: "My Location",
              text: message,
              url: url,
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
