var i = 0;
var txt1 =
  "Hi Love.....! <<🎂 happy birthday my dr greeshu🎂 😘 <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                     >                  << Now You are the only person  whom I love equally with my parents....!                                          >I Love U <SweetHeart.....                  Give me One chance to Prove my Love .......<ನನ್ನವಳು ಮೌನಿ..... ನಾನವಳ ಧ್ಯಾನಿ....!";
var speed = 50;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
