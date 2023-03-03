function generate() {
    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    var newColor1 = "#";
    var newColor2 = "#";
    var degArr = ["20", "40", "45", "60", "55", "90", "180", "240"]
    
    rndmNum = Math.floor((Math.random() * degArr.length))
    num = degArr[rndmNum]
    
    
    for (let i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 15)
        var a = Math.round(Math.random() * 15)
        var y = hexValues[x]
        var b = hexValues[a]
        newColor1 += y
        newColor2 += b
    }
    document.getElementById("container").style.backgroundImage = `linear-gradient(${num}deg, ${newColor1}, ${newColor2})`
    document.getElementById("output").innerHTML = newColor1 
    document.getElementById("output2").innerHTML = newColor2
    document.getElementById("result").innerHTML = `
    linear-gradient(${num}deg, ${newColor1}, ${newColor2});`


       
    
}
