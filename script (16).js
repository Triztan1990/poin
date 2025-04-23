  
    window.setTimeout(function() {  
      var splash = document.getElementById('splashScreen');  
      var mainApp = document.getElementById('mainApp');  
      if (splash && splash.style.display !== 'none') {  
        splash.style.display = 'none';  
        if (mainApp) mainApp.style.display = 'block';  
        console.log("Splash screen dihapus oleh failsafe timer");  
      }  
    }, 3500);  
  