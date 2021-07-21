function theme(ID = "darkOrLight", ID2 = "theme") {
    var WasChecked = document.getElementById(ID).checked,
        home = "https://hanralatalliardwork.github.io/wolf_escape_home/";
        //var home="./";
    if (WasChecked === false) {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
        createCookie('theme',"L","","/");
    } else {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/boostrap_dark.css\">";
        createCookie('theme',"D","","/");
    }
}

function initialiseTheme(ID,IDRead) {
    var home = "https://hanralatalliardwork.github.io/wolf_escape_home/";
    // var home="./";
    try {
        e=readCookie("theme")
        if (e==="L"){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
            document.getElementById(IDRead).checked=false;
            createCookie("theme","L","","/")
        }
        if (e==="D"){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap_dark.css\">";
            document.getElementById(IDRead).checked=true;
            createCookie("theme","D","","/")
        }
        if (e===""){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
            document.getElementById(IDRead).checked=false;
            createCookie("theme","L","","/")
        }
    } catch(err) {
        document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
        // document.cookie="theme=L";
        createCookie("theme","L","","/");
    }
}