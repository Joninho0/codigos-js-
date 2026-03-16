window.onload = function() {
            
            intervaloLoop = setInterval(() => {
                const novaJanela = window.open('', 'popup' + Date.now(), 'width=800,height=600');
                novaJanela.alert("Olá, mundo!");
                document.getElementById('status').textContent = 'Status: ' + new Date().toLocaleTimeString();
            }, 1000); 
        };