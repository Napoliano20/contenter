function welcomeMessage() {
    alert("Welcome to Contenter!");
  }
  function ConfirmNavigation(link) {
    if (confirm("Are you sure you want to leave this page?")) {
      window.location.href = link.href;
    }
  }
  timesChangedWindows=0
function checkgoing(link){
    timesChangedWindows += 1;
    ConfirmNavigation(link);
}
  window.onload = welcomeMessage;
  window.onload = getBrowserInfo();
  function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const charset = [];
    if (includeUppercase) charset.push(...Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
    if (includeLowercase) charset.push(...Array.from('abcdefghijklmnopqrstuvwxyz'));
    if (includeNumbers) charset.push(...Array.from('0123456789'));
    if (includeSymbols) charset.push(...Array.from('!@#$%^&*()_+-=[]{}|;:\'\",<.>/?'));
    
    const password = [];
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password.push(charset[randomIndex]);
    }
    alert("Random Password:" + password);
    return password.join('');
  }

  function promptForInput(message, defaultValue) {
    const userInput = prompt(message, defaultValue);
    if (userInput) {
      alert("You entered: " + userInput);
    } else {
      alert("Input cancelled.");
    }
  }
  function showSuccessMessage() {
    alert("Successfully created the account! ");
  }
  function getBrowserInfo() {
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    alert("Your browser: " + browserName + " - Version: " + browserVersion);
  }

  function detectMobileDevice() {
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i.test(navigator.userAgent);
    alert(isMobile ? "You are browsing on a mobile device." : "You are likely browsing on a desktop device.");
  }
  function calculatePageLoadTime() {
    const startTime = performance.now(); 
  
    window.onload = function() {
      const endTime = performance.now(); 
      const loadTime = Math.round((endTime - startTime) / 1000);
      alert(`Page load time: ${loadTime} seconds`);
    };
  }
  function detectAdBlocker() {
    const testElement = document.createElement("div");
    testElement.style.display = "none";
    document.body.appendChild(testElement);
  
    const isAdBlocked = !testElement.offsetHeight; 
  
    document.body.removeChild(testElement);
  
    const message = isAdBlocked ? "Ad blocker detected. Please consider supporting us by disabling it for this site." : "No ad blocker detected.";
    alert(message);
  }  
  function checkBatteryLevel() {
    if (navigator.battery) {
      navigator.battery.then(battery => {
        const level = Math.floor(battery.level * 100); 
        alert(`Battery level: ${level}%`);
      }).catch(error => alert("Battery level information not available."));
    } else {
      alert("Battery level information not supported by this browser.");
    }
  }
  function checkLocalStorageUsage() {
    try {
      const totalUsage = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        totalUsage += (key.length + value.length) * 2; 
      }
      const formattedSize = totalUsage > 1024 ? `${Math.round(totalUsage / 1024)} KB` : `${totalUsage} bytes`;
      alert(`Local Storage usage: ${formattedSize}`);
    } catch (error) {
      alert("Error accessing Local Storage.");
    }
  }
  function checkForServiceWorkers() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistration().then(registration => {
        const message = registration ? "Service worker registration found." : "No service worker registered.";
        alert(message);
      }).catch(error => alert("Error checking service worker registration."));
    } else {
      alert("Service workers not supported by this browser.");
    }
  }
  function checkBrowserLanguagePreference() {
    const language = navigator.language || navigator.languages[0];
    alert(`Preferred browser language: ${language}`);
  }

  $(document).ready(function() {
    $("#hoverText").hover(function() {
      $(this).text("Hovering!");
    }, function() {
      $(this).text("This text changes on hover.");
    });
  });

  $(document).ready(function() {
    $("#myForm").submit(function(event) {
      if ($("#nameInput").val() === "") {
        alert("Please enter the password!");
        event.preventDefault();
      }
    });
  });

  $(document).ready(function() {
    let currentImage = 1;
  
    $("#nextButton").click(function() {
      if (currentImage === 1) {
        $("#image1").fadeOut(function() {
          $("#image2").fadeIn();
          currentImage = 2;
        });
      } else {
        $("#image2").fadeOut(function() {
          $("#image1").fadeIn();
          currentImage = 1;
        });
      }
    });
  
    
  });
  $(document).ready(function() {
    $("#myForm").submit(function(event) {
      let nameValue = $("#nameInput").val();
      if (nameValue === "") {
        $("#nameError").text("Please enter your name!");
        event.preventDefault();
      } else {
        $("#nameError").text(""); 
      }
    });
  });

  $(document).ready(function() {
    $(".box").click(function() {
      $(this).toggleClass("selected");
    });
  });

  $(document).ready(function() {
    $("#getDataButton").click(function() {
      $.get("data.txt", function(data) {
        $("#dataContainer").text(data);
      });
    });
  });

  $(document).ready(function() {
    $("#scrollToButton").click(function() {
      $("html, body").animate({
        scrollTop: $("#targetSection").offset().top
      }, 500);
    });
  });

  $(document).ready(function() {
    let seconds = 5; // Adjust starting seconds
    let timerInterval = setInterval(function() {
      seconds--;
      $("#countdownTimer").text(formatTime(seconds));
      if (seconds === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  
    function formatTime(seconds) {
      let minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      return minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    }
  });

  $(document).ready(function() {
    let preloadImage = new Image();
    preloadImage.src = "image.jpg";
    preloadImage.onload = function() {
      $("#preloadedImage").attr("src", preloadImage.src);
    };
  });

  $(document).ready(function() {
    $("#newQuoteButton").click(function() {
      $.getJSON("https://api.quotable.io/random", function(data) {
        $("#quoteText").text('"' + data.content + '" - ' + data.author);
      });
    });
  });
  