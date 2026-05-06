( function(window){
   var yaahkeGerrter = {};
   yaahkeGerrter.name = "Ahmed";
   var greeting = "speaker with: ";
   yaahkeGerrter.sayhi = function (){
    console.log(greeting  + yaahkeGerrter.name );
   }
   window.yaahkeGerrter = yaahkeGerrter
})(window);
