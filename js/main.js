

const ractangle = document.createElement('div');
document.body.appendChild(ractangle);



const ractangleWidth = 100;// szerokość prostokąta
let ractangleHeight = 20;// wysokość prostokąta
ractangle.style.width = ractangleWidth +"%";
//100 + "px" ->"100" + "px" ->"100px"
ractangle.style.height = ractangleHeight +"px";

let grow = true;
let size = 100;












window.addEventListener("scroll",function(){
    
    // size = size + 10;
    

    if (size >= this.window.innerHeight ){
        grow = false
        //grow = !grow to również jest bardzo poprawny zapis
    }
    else if(size <= 0){
        grow = true;
    }
    if(grow == true){
        size += 5
        
        ractangle.style.height = size + "px";
        ractangle.style.backgroundColor = "#15ff00";
        }
    
        else{
            size -= 5
            
            ractangle.style.height = size + "px";
            ractangle.style.backgroundColor = "#bd1313";
        }
})