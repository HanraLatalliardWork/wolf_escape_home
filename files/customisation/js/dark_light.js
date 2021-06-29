function theme(ID = "darkOrLight", ID2 = "theme") {
    var WasChecked = document.getElementById(ID).checked,
        home = "https://hanralatalliardwork.github.io/wolf_escape_home/";
    if (WasChecked === true) {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap.css\">";
    } else {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + "files/customisation/css/bootstrap_dark.css\">";
    }
}