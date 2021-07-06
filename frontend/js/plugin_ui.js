var background = chrome.extension.getBackgroundPage();
var colors = {
    "-1":"#58bc8a",
    "0":"#ffeb3c",
    "1":"#ff8b66"
};
var featureList = document.getElementById("features");

chrome.tabs.query({ currentWindow: true, active: true }, function(tabs){
    var result = background.results[tabs[0].id];
    var isPhish = background.isPhish[tabs[0].id];
    var legitimatePercent = background.legitimatePercents[tabs[0].id];
    var res;
    
    

    

    for(var key in result){
        var newFeature = document.createElement("li");
        //console.log(key);
        newFeature.textContent = key;
        //newFeature.className = "rounded";
        newFeature.style.backgroundColor=colors[result[key]];
        featureList.appendChild(newFeature);
    }
     

    
     $("#site_score").text("No Threat Detected");
    
    if(isPhish){
        $("#res-circle").css("background", "#ff8b66");
        $("#site_msg").text("Warning!! You're being phished.");  
        if (parseInt((legitimatePercent)-20) <= 45) {
            $("#site_score").text("Level of severity : High");
            }
            else if (parseInt((legitimatePercent)-20) <= 60) {
                $("#site_score").text("Level of severity : Mild");
            }
            else if (parseInt((legitimatePercent)-20) <= 65) {
                $("#site_score").text("Level of severity :  Low");
            }
            
        }
            
});

 