(function(){
    var names = ["Ammar", "Ahmed","Ali","Mustafa","badrya","Frank","Randa","Tareq","jail","jaker"];
    for(var i = 0; i < names.length; i++){
        var firstLetter = names[i].charAt(0).toLowerCase();
        if(firstLetter === 'j'){
            goodbyeSpeaker.sayGoodbye(names[i]);
        }else{
            helloSpeaker.sayhello(names[i]);
        }
    }
})();