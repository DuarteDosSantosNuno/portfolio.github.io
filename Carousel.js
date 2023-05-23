const slide = document.querySelector(".slide");
const frameScreenContainer = document.querySelector("#frameScreenContainer");
var frameScreenTechno = document.getElementById("frameScreenTechno")
var slideWidth = slide.clientWidth;
frameScreenContainer.scrollLeft = 0; 
var timer = 4000;
var s = 0;
var screenImages = ['wave.jpg', 'coffee.jpg', 'python.jpg', 'atom.jpg', 'symphony.jpg'];
var screenTechno = [".NET", "Java", "Python", "Front-end", "Back-end"];
const images = frameScreenContainer.querySelectorAll("img");

function ScreenCarousel(){
    slideWidth = slide.clientWidth;
    frameScreenContainer.style.scrollBehavior = "smooth";
    frameScreenContainer.scrollLeft = slideWidth + 2; 

    setTimeout(() => 
    {
        frameScreenTechno.textContent = screenTechno[s+1];
        switch(frameScreenTechno.textContent)
        {
            case screenTechno[0]:
                frameScreenTechno.style.color = "#80F";
                break;
            case screenTechno[1]:
                frameScreenTechno.style.color = "red";
                break;
            case screenTechno[2]:
                frameScreenTechno.style.color = "#08F";
                break;
            case screenTechno[3]:
                frameScreenTechno.style.color = "white";
                break;
            case screenTechno[4]:
                frameScreenTechno.style.color = "lime";
                break;
        }
    }, 500);

    setTimeout(() => 
    {    
        s++;
        frameScreenContainer.style.scrollBehavior = "auto";
        frameScreenContainer.scrollLeft = 0;
        images.item(0).src = "images/" + screenImages[s];
        

        if(s == 4)
        {
            s = -1;
            images.item(1).src = "images/" + screenImages[s+1];
            
        }
        else
        {
            images.item(1).src = "images/" + screenImages[s+1];
        }   
    }, 1000);  
}

setInterval(() => ScreenCarousel(), timer);




