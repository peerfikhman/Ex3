


window.onload = () => {

    for(let i = 0; i <4;i++)
        document.getElementsByClassName("sqr")[i].onclick =  function(){ 
            this.style.backgroundColor = this.style.backgroundColor === "red"? null : "red"}


    const main = document.getElementById("main");

    for(let i = 0; i< 12 ; i++)
    { 
       
        const container = document.createElement("section");
        container.className = "sqrs_container";
        main.appendChild(container);
        for(let j = 0; j<4; j++){
        const sqr = document.createElement("div");
        sqr.className = "sqr";
        sqr.onclick = () =>{

            let sqrStyle = sqr.style;
          
          sqrStyle.backgroundColor =  sqrStyle.backgroundColor === "red" ?  null:"red";
        } 
        container.appendChild(sqr);
        } 

    }


}



let opt = [ "100%","80%", "60%", "40%", "20%", "0%"];
let img = document.createElement("img");
img.src = "images/reset.png";
let i = 0;
function changeOp(button){


    let d =  document.getElementById("OpacityChange");

    switch(button.innerHTML == "+")
    {
        case true:
            d.style.opacity = opt[++i];
    
                if(i === 5)
                {
                    i = 0;
                    button.innerHTML= "";
                    button.appendChild(img);
                }
                break;

        case false:
            d.style.opacity = opt[i];
             button.innerHTML = "+";
             break;


    }

}
