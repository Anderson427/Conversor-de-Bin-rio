(function(win,doc){
    "use strict";
    let btn = doc.querySelector("#btn");

    function convert(){
        let bin = doc.querySelector("#binary").value;
        let dec = doc.querySelector("#decimal");
        
        if(bin === ""){
            alert("Digite algo!")
        }

        bin.split("").map((char => {
            if(char !== "1" && char !== "0"){
                alert("Digite 0 e 1!")
            }
        }));

        dec.value = parseInt(bin,2);
    }

    btn.addEventListener("click",convert,false)
})(window,document)