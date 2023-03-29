function generate() {
    let hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let newColor1 = "#";
    let newColor2 = "#";
    let deg = Math.ceil(Math.random() * 36) * 10
    
    // document.getElementById("colors-text").style.display = "block"
    
    for (let i = 0; i < 6; i++) {
        let x = Math.round(Math.random() * 15)
        let a = Math.round(Math.random() * 15)
        let y = hexValues[x]
        let b = hexValues[a]
        newColor1 += y
        newColor2 += b
    }
    document.getElementById("container").style.backgroundImage = `linear-gradient(${deg}deg, ${newColor1}, ${newColor2})`
    // document.getElementById("output").innerHTML = newColor1 
    // document.getElementById("output2").innerHTML = newColor2
    document.getElementById("result").innerHTML = `
    linear-gradient(${deg}deg, ${newColor1}, ${newColor2});`
    
}
