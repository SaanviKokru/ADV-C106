p1 = "";
p2 = "";
Webcam.attach('#camera');
function capture() {
    Webcam.snap(function (Data_uri) {
        document.getElementById("Result").innerHTML = '<img src="' + Data_uri + '" id="snapshot">'

    })
}
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelloaded);
function modelloaded() {
}
function predicte() {
    img = document.getElementById("snapshot");
    classifier.classify(img, gotResult);

}
function gotResult(error, Result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(Result)
        document.getElementById("emotion_name").innerHTML = Result[0].label;
        document.getElementById("emotion_name-2").innerHTML = Result[1].label;
        p1 = Result[0].label;
        p2 = Result[1].label;
        speak();
        if(p1=="happy")
        {
        document.getElementById("emoji").innerHTML= "&#128512";
        }

        if(p1=="angry")
        {
        document.getElementById("emoji").innerHTML= "&#128544";
        }
        if(p1=="sad")
        {
        document.getElementById("emoji").innerHTML= "&#128524";
        }

        if(p2=="happy")
        {
        document.getElementById("emoji-2").innerHTML= "&#128512";
        }

        if(p2=="angry")
        {
        document.getElementById("emoji-2").innerHTML= "&#128544";
        }
        if(p2=="sad")
        {
        document.getElementById("emoji-2").innerHTML= "&#128524";
        }


    }

    
}


function speak()
 {
      var synth = window.speechSynthesis;
       speak_data_1 = "The first prediction is " + p1; speak_data_2 = "And the second prediction is " + p2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
         synth.speak(utterThis);
         }

