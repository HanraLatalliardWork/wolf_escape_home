function showHide(IDFrom,IDTo,IDText){
    e=document.getElementById(IDFrom).checked;
    if (e===true){
        document.getElementById(IDTo).style.display="block";
        document.getElementById(IDText).innerHTML="Hide";
    } else {
        document.getElementById(IDTo).style.display="none";
        document.getElementById(IDText).innerHTML="Show";
    }
}
function checkTheme(CookieName,ID1,ID2,ID3){
    currentTheme=readCookie(CookieName);
    if (currentTheme==="L" | currentTheme==="l"){
        document.getElementById(ID1).innerHTML="<img class=\"image_WE_Link_Container_child\" src=\"files/img/down-arrow.svg\" alt=\"Download Image\" title=\"Download Image\"/>";
        document.getElementById(ID2).innerHTML="<img class=\"image_credits\" src=\"files/img/down-arrow.svg\"/>";
        document.getElementById(ID3).innerHTML="<img class=\"image_Discord_Link_Container_child\" src=\"files/requirements/img/Follow-me/discord/discord_B.PNG\" alt=\"Discord logo\" title=\"Discord logo\"/>";
    } else {
        document.getElementById(ID1).innerHTML="<img class=\"image_WE_Link_Container_child\" src=\"files/img/down-arrow_W.svg\" alt=\"Download Image\" title=\"Download Image\"/>";
        document.getElementById(ID2).innerHTML="<img class=\"image_credits\" src=\"files/img/down-arrow_W.svg\"/>";
        document.getElementById(ID3).innerHTML="<img class=\"image_Discord_Link_Container_child\" src=\"files/requirements/img/Follow-me/discord/discord_W.PNG\" alt=\"Discord logo\" title=\"Discord logo\"/>";
    }
}
checkTheme("theme","DownloadLogo","DownloadButtonCredits","DiscordLogo")