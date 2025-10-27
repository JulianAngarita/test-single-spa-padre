// src/root-config.js
console.log('✅ root-config.js cargado');

System.import('single-spa').then(function(singleSpa) {
    console.log('✅ single-spa cargado');
    
    singleSpa.registerApplication({
        name: "test-single-spa-hijo",
        app: function() {
            return System.import("http://localhost:4000/main.single-spa.js");
        },
        activeWhen: ["/hijo"]
    });
    
    singleSpa.start();
    console.log('✅ single-spa iniciado');
}).catch(function(err) {
    console.error('❌ Error:', err);
});