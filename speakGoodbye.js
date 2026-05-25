(function(window){
    var goodbyeSpeaker = {};
    var  speakWord  = "Goodbye";
    goodbyeSpeaker.sayGoodbye = function (name){
    console.log(speakWord   +"" + name);
    };
    window.goodbyeSpeaker = goodbyeSpeaker;

})(window);

   
