(function () {
    const countdown = (num, callback) => {
      if (num > 0) {
        const countdownElement = document.getElementById("countdown");
        countdownElement.innerText = num;
        setTimeout(() => {
          countdown(num - 1, callback);
        }, 1000);
      } else {
        callback();
      }
    };

    const showMessage = () => {
      const countdownContainer = document.getElementById("countdown-container");
      const messageElement = document.getElementById("message"); 
      countdownContainer.style.display = "none";
      messageElement.innerText = "HAPPY INDEPENDENCE DAY!!";
    };

    countdown(10, showMessage);
  })(); 
