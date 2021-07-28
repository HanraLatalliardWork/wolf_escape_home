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
// function checkTheme(CookieName,listOfIDsToEdit,DictOfCodesToApply){
//     currentTheme=readCookie(CookieName).toLowerCase();
//     console.log("currentTheme="+currentTheme);
//     console.log("CookieName="+CookieName);
//     for (var i=0;i<listOfIDsToEdit.length;i++){
//         document.getElementById(listOfIDsToEdit[i]).innerHTML=DictOfCodesToApply[currentTheme][listOfIDsToEdit[i]];
//     }
// }


function UpdateTheme(){
    var CookieName="theme",
    listOfIDsToEdit=["DownloadLogo","DownloadButtonCredits","DiscordLogo","GithubLogo"],
    DictOfCodesToApply={
        "l":{
            "DownloadLogo":"<img class=\"image_WE_Link_Container_child\" src=\"files/img/down-arrow.svg\" alt=\"Download Image\" title=\"Download Image\"/>",
            "DownloadButtonCredits":"<img class=\"image_credits\" src=\"files/img/down-arrow.svg\"/>",
            "DiscordLogo":"<img class=\"image_Discord_Link_Container_child\" src=\"files/requirements/img/Follow-me/discord/discord_B.PNG\" alt=\"Discord logo\" title=\"Discord logo\"/>",
            "GithubLogo":"<img class=\"image_hosts\" src=\"files/requirements/img/Follow-me/github/github_B.PNG\"/>"
        },"d":{
            "DownloadLogo":"<img class=\"image_WE_Link_Container_child\" src=\"files/img/down-arrow_W.svg\" alt=\"Download Image\" title=\"Download Image\"/>",
            "DownloadButtonCredits":"<img class=\"image_credits\" src=\"files/img/down-arrow_W.svg\"/>",
            "DiscordLogo":"<img class=\"image_Discord_Link_Container_child\" src=\"files/requirements/img/Follow-me/discord/discord_W.png\" alt=\"Discord logo\" title=\"Discord logo\"/>",
            "GithubLogo":"<img class=\"image_hosts\" src=\"files/requirements/img/Follow-me/github/github_W.png\"/>"
        }
    };
    checkTheme(CookieName,listOfIDsToEdit,DictOfCodesToApply);
}