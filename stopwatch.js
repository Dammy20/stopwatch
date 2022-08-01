let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    let time = document.getElementById("time");
    let second = document.getElementById('second');
    let container = document.getElementById("container");
    let timer = null
    let counter = 60;
    let users = 0;
    let ring = new Audio("indian-music-with-sitar-tanpura-and-sarangi-74577.mp3")
    // let array = [
    //           {"message : ",
    //             "minutes: " ,
    //             "seconds:"}
    // ]
    

  
    function start(params) {
        counter = sec.value;
        users = min.value
        
         
        timer = setInterval(() => {
            // second.innerText = counter
            // first.innerText = users
            time.innerHTML = `${users}:${counter}`

            // counter--;
            if(counter > 0){
                counter--
                time.innerHTML = `${users}:${counter}`

            }else if(counter == 0 && users > 0){
                counter = 59
                users--
                time.innerHTML = `${users}:${counter}`

            }else{
               ring.play()
            }
           
            
        }, 1000);

    }
    function end(){
        counter = 0;
        users = 0;
    }
    function stop(){
        clearInterval(timer);
        ring.pause()
    }


    

