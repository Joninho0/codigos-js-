window.onload = function() {
            
            intervaloLoop = setInterval(() => {
                const window.open('', 'popup' + Date.now(), 'width=800,height=600');
                
                document.getElementById('status').textContent = 'Status: ' + new Date().toLocaleTimeString();
            }, 1000); 
        };