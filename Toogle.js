function menuToogle(){
    var x = document.querySelector("#navbarMenu");
    var icon = document.getElementById("navbarMenuButtonIcon");
    if (x.style.top === "0em") {
        x.style.top = "4.5em";
        x.style.marginBottom = "7em";
        icon.classList.replace("fa-bars", "fa-xmark");
    } 
    else {
        x.style.setProperty("top", "0em");
        x.style.setProperty("margin-bottom", "2.5em");
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}

function changeTheme(){
    var themeButtonIcon = document.getElementById("themeButtonIcon");
    var header = document.querySelector("header");
    var body = document.querySelector("body");
    var navbarMenu = document.querySelector("#navbarMenu");
    var navbarMenuLink = document.querySelectorAll(".navbarMenuLink");
    var navbarButton = document.querySelector(".navbarButton");
    var frameScreen = document.getElementById("frameScreen");
    var slide = document.querySelectorAll(".slide");
    var section = document.querySelectorAll(".section");
    var frame = document.querySelectorAll(".frame");
    var photoTooltip = document.getElementById("photoTooltip");
    var projectLink = document.querySelectorAll(".projectLink");
    var skillImage = document.querySelectorAll(".skillImage");
    var footer = document.querySelector("footer");
    
    if (body.style.backgroundColor === "black") {
        themeButtonIcon.classList.replace("fa-moon", "fa-sun");
        header.style.background = "white";
        body.style.backgroundColor = "#EEE";    
        navbarMenu.style.backgroundColor = "#EEE";
        // navbarButton.style.color = "white";
        frameScreen.style.backgroundColor = "white";
        // slide[0].setAttribute("style", "-webkit-mask-box-image : linear-gradient(to top, rgba(255,255,255, 0.8) 20%, rgba(255,255,255, 0.2) 80% )");
        section[0].style.backgroundColor = "white";
        section[1].style.backgroundColor = "white";
        section[2].style.backgroundColor = "white";
        section[3].style.backgroundColor = "white";
        section[4].style.backgroundColor = "white";
        frame[0].style.color = "#222";
        frame[1].style.color = "#222";
        frame[2].style.color = "#222";
        frame[3].style.color = "#222";
        frame[4].style.color = "#222";

        projectLink[0].style.color = "#222";
        projectLink[1].style.color = "#222";
        projectLink[2].style.color = "#222";
        projectLink[3].style.color = "#222";
        projectLink[4].style.color = "#222";
        projectLink[5].style.color = "#222";

        photoTooltip.style.backgroundColor = "#DDD";
        for(var i = 0; i < skillImage.length; i++)
        {
            skillImage[i].style.backgroundColor = "#222";
        }
        
        
        footer.style.backgroundColor = "#222";
        footer.style.color = "#EEE";
        footer.style.boxShadow = "inset 0 4px 6px 4px black";
    }
    else{
        themeButtonIcon.classList.replace("fa-sun", "fa-moon");
        header.style.background = "#222";
        body.style.backgroundColor = "black";  
        navbarMenu.style.backgroundColor = "black"; 
        frameScreen.style.backgroundColor = "#222";
        // slide[0].setAttribute("style", "-webkit-mask-box-image : linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 20%,rgba(255, 255, 255, 0.9) 90%)");
        section[0].style.backgroundColor = "#222";
        section[1].style.backgroundColor = "#222";
        section[2].style.backgroundColor = "#222";
        section[3].style.backgroundColor = "#222";
        section[4].style.backgroundColor = "#222";
        frame[0].style.color = "#EEE";
        frame[1].style.color = "#EEE";
        frame[2].style.color = "#EEE";
        frame[3].style.color = "#EEE";
        frame[4].style.color = "#EEE";
        photoTooltip.style.backgroundColor = "#444";

        projectLink[0].style.color = "#EEE";
        projectLink[1].style.color = "#EEE";
        projectLink[2].style.color = "#EEE";
        projectLink[3].style.color = "#EEE";
        projectLink[4].style.color = "#EEE";
        projectLink[5].style.color = "#EEE";

        for(var i = 0; i < skillImage.length; i++)
        {
            skillImage[i].style.backgroundColor = "white";
        }

        
        footer.style.backgroundColor = "white";
        footer.style.color = "#222";
        footer.style.boxShadow = "inset 0 3px 6px 3px grey";
    }
    
}

var lang = "en";
function changeLanguage(){
    if(lang === "fr")
    {
        lang = "en";
        LoadLanguage()
    }
    else
    {
        lang = "fr";
        LoadLanguage()
    }   
}

function LoadLanguage(){
    switch(lang)
    {
        case "en":
            fetch('./language.json')
                .then((response) => response.json())
                .then((json) => 
                {
                    $('.profilText').text(json["en"]["profilText"])
                    $('.educationText').text(json["en"]["educationText"])
                    $('.experiencesText').text(json["en"]["experiencesText"])
                    $('.projectsText').text(json["en"]["projectsText"])
                    $('.skillsText').text(json["en"]["skillsText"])
                    $('.languageText').text(json["en"]["languageText"])
                    $('.themeText').text(json["en"]["themeText"])

                    $('#frameScreenJobText').text(json["en"]["frameScreenJobText"])

                    $('#photoTooltipText').text(json["en"]["photoTooltipText"])
                    $('#aboutMeText').text(json["en"]["aboutMeText"])
                    $('#ageText').text(json["en"]["ageText"])
                    $('#driverLicenceText').text(json["en"]["driverLicenceText"])

                    $('#autoiciExperienceLabel').text(json["en"]["autoiciExperienceLabel"])
                    $('#autoiciExperienceText_1').text(json["en"]["autoiciExperienceText_1"])
                    $('#autoiciExperienceText_2').text(json["en"]["autoiciExperienceText_2"])
                    $('#autoiciExperienceText_3').text(json["en"]["autoiciExperienceText_3"])
                    $('#insy2sExperienceLabel').text(json["en"]["insy2sExperienceLabel"])
                    $('#insy2sExperienceText_1').text(json["en"]["insy2sExperienceText_1"])
                    $('#insy2sExperienceText_2').text(json["en"]["insy2sExperienceText_2"])
                    $('#insy2sExperienceText_3').text(json["en"]["insy2sExperienceText_3"])
                    $('#insy2sExperienceText_4').text(json["en"]["insy2sExperienceText_4"])
                    $('#rougegorgeExperienceLabel').text(json["en"]["rougegorgeExperienceLabel"])
                    $('#rougegorgeExperienceText_1').text(json["en"]["rougegorgeExperienceText_1"])
                    $('#rougegorgeExperienceText_2').text(json["en"]["rougegorgeExperienceText_2"])
                    $('#rougegorgeExperienceText_3').text(json["en"]["rougegorgeExperienceText_3"])
                    $('#rougegorgeExperienceText_4').text(json["en"]["rougegorgeExperienceText_4"])

                    $('#cesiEducationLabel').text(json["en"]["cesiEducationLabel"])
                    $('#cesiEducationText').text(json["en"]["cesiEducationText"])
                    $('#afpaEducationLabel').text(json["en"]["afpaEducationLabel"])
                    $('#afpaEducationText').text(json["en"]["afpaEducationText"])
                    $('#epsiEducationLabel').text(json["en"]["epsiEducationLabel"])
                    $('#epsiEducationText').text(json["en"]["epsiEducationText"])
                    $('#btsEducationLabel').text(json["en"]["btsEducationLabel"])
                    $('#btsEducationText').text(json["en"]["btsEducationText"])

                    $('#pLabel').text(json["en"]["pLabel"])
                    $('#pText').text(json["en"]["pText"])
                    $('#fLabel').text(json["en"]["fLabel"])
                    $('#fText').text(json["en"]["fText"])
                    $('#dwaLabel').text(json["en"]["dwaLabel"])
                    $('#dwaText').text(json["en"]["dwaText"])
                    $('#aswaLabel').text(json["en"]["aswaLabel"])
                    $('#aswaText').text(json["en"]["aswaText"])
                    $('#bLabel').text(json["en"]["bLabel"])
                    $('#bText').text(json["en"]["bText"])
                    $('#cbLabel').text(json["en"]["cbLabel"])
                    $('#cbText').text(json["en"]["cbText"])
                });
            break;
        case "fr":
            fetch('./language.json')
                .then((response) => response.json())
                .then((json) => 
                {
                    $('.profilText').text(json["fr"]["profilText"])
                    $('.educationText').text(json["fr"]["educationText"])
                    $('.experiencesText').text(json["fr"]["experiencesText"])
                    $('.projectsText').text(json["fr"]["projectsText"])
                    $('.skillsText').text(json["fr"]["skillsText"])
                    $('.languageText').text(json["fr"]["languageText"])
                    $('.themeText').text(json["fr"]["themeText"])
                    
                    $('#frameScreenJobText').text(json["fr"]["frameScreenJobText"])

                    $('#photoTooltipText').text(json["fr"]["photoTooltipText"])
                    $('#aboutMeText').text(json["fr"]["aboutMeText"])
                    $('#ageText').text(json["fr"]["ageText"])
                    $('#driverLicenceText').text(json["fr"]["driverLicenceText"])

                    $('#autoiciExperienceLabel').text(json["fr"]["autoiciExperienceLabel"])
                    $('#autoiciExperienceText_1').text(json["fr"]["autoiciExperienceText_1"])
                    $('#autoiciExperienceText_2').text(json["fr"]["autoiciExperienceText_2"])
                    $('#autoiciExperienceText_3').text(json["fr"]["autoiciExperienceText_3"])
                    $('#insy2sExperienceLabel').text(json["fr"]["insy2sExperienceLabel"])
                    $('#insy2sExperienceText_1').text(json["fr"]["insy2sExperienceText_1"])
                    $('#insy2sExperienceText_2').text(json["fr"]["insy2sExperienceText_2"])
                    $('#insy2sExperienceText_3').text(json["fr"]["insy2sExperienceText_3"])
                    $('#insy2sExperienceText_4').text(json["fr"]["insy2sExperienceText_4"])
                    $('#rougegorgeExperienceLabel').text(json["fr"]["rougegorgeExperienceLabel"])
                    $('#rougegorgeExperienceText_1').text(json["fr"]["rougegorgeExperienceText_1"])
                    $('#rougegorgeExperienceText_2').text(json["fr"]["rougegorgeExperienceText_2"])
                    $('#rougegorgeExperienceText_3').text(json["fr"]["rougegorgeExperienceText_3"])
                    $('#rougegorgeExperienceText_4').text(json["fr"]["rougegorgeExperienceText_4"])

                    $('#cesiEducationLabel').text(json["fr"]["cesiEducationLabel"])
                    $('#cesiEducationText').text(json["fr"]["cesiEducationText"])
                    $('#afpaEducationLabel').text(json["fr"]["afpaEducationLabel"])
                    $('#afpaEducationText').text(json["fr"]["afpaEducationText"])
                    $('#epsiEducationLabel').text(json["fr"]["epsiEducationLabel"])
                    $('#epsiEducationText').text(json["fr"]["epsiEducationText"])
                    $('#btsEducationLabel').text(json["fr"]["btsEducationLabel"])
                    $('#btsEducationText').text(json["fr"]["btsEducationText"])

                    $('#pLabel').text(json["fr"]["pLabel"])
                    $('#pText').text(json["fr"]["pText"])
                    $('#fLabel').text(json["fr"]["fLabel"])
                    $('#fText').text(json["fr"]["fText"])
                    $('#dwaLabel').text(json["fr"]["dwaLabel"])
                    $('#dwaText').text(json["fr"]["dwaText"])
                    $('#aswaLabel').text(json["fr"]["aswaLabel"])
                    $('#aswaText').text(json["fr"]["aswaText"])
                    $('#bLabel').text(json["fr"]["bLabel"])
                    $('#bText').text(json["fr"]["bText"])
                    $('#cbLabel').text(json["fr"]["cbLabel"])
                    $('#cbText').text(json["fr"]["cbText"])
                });
            break;

    }

}



function rotatePhoto(){
    var photo = document.getElementById("photo");
    var photoToolTip = document.getElementById("photoTooltip");
    
    photoToolTip.classList.remove("photoTooltipRotationReverse");
    photo.classList.remove("photoRotationReverse");

    photoToolTip.classList.add("photoTooltipRotation");
    photo.classList.add("photoRotation");
}

function rotateReversePhoto(){
    var photo = document.getElementById("photo");
    var photoToolTip = document.getElementById("photoTooltip");
    
    photoToolTip.classList.remove("photoTooltipRotation");
    photo.classList.remove("photoRotation");

    photoToolTip.classList.add("photoTooltipRotationReverse");
    photo.classList.add("photoRotationReverse");
}

LoadLanguage();