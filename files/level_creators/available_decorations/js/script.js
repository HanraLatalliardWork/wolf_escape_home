/* titles
ends
Social

*/
function showContent(ID, ID2) {
    var state = document.getElementById(ID).style.display;
    // subInfo = $(ID2);
    if (state === "block") {
        document.getElementById(ID).style.display = "none";
        document.getElementById(ID2).innerHTML = "+";
        document.getElementById(ID2).style.backgroundColor = "transparent";
        // subInfo.slideUp(300);
    } else {
        document.getElementById(ID).style.display = "block";
        document.getElementById(ID2).innerHTML = "-";
        document.getElementById(ID2).style.backgroundColor = "aqua";
        // subInfo.slideDown(300);
    }

}

function initialiseMenus() {
    AllTheIDS = [
        'default-content',
        'ends-content',
        'Social-content',
        'start-content',
        'Walls-content',
        'backgrounds-content',
        'GameIcon-content',
        'wolf-content',
        'Guard-content',
        'Caps-content',
        'lowercases-content',
        'accents-content',
        'digits-content',
        'temperature-content',
        'arrows-content',
        'currency-content',
        'hearts-content',
        'common_symbols-content',
        'maths-content',
        'micelanicious_(not_places)-content'
    ]
    for (var i = 0; i < AllTheIDS.length; i++) {
        document.getElementById(AllTheIDS[i]).style.display = "none";
    }
}