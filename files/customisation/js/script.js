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
