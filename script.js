const compliments = [
    "Your face is the cutest w those dimples",
    "You look sexy in that purple",
    "Youre so beautiful i could watch you all day",
    "Youre so confident i admire you for it",
    "Youre funny man",
    "You make me feel content in life",
    "Your music taste is very relaxing",
    "You are my favorite person sab bolte hai ik",
    "THROW AWAY YOUR OTHER HOESSSS",
    "You inspire(adarsh) me to be better every day",
    "Your curls are very attractive",
    "TALK TO MEEEEEEEEEEE ILL DIE IF YOU GO ONE MORE SEC WITHOUT TALKINGGGG"

];

document.getElementById("complimentButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById("compliment").innerText = compliments[randomIndex];
});