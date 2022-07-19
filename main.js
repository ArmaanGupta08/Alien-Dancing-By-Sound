function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/S5tzi7cnG/model.json', modelready)
}

function modelready(){
    console.log("model est loaded, we did it, yrssir")
    classifier.classify(gotresult) //classify = comparison of sound with the teachable machine audio and stores the result in gotresult function
}

function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        random_red=Math.floor(Math.random()*255)+1
        random_green=Math.floor(Math.random()*255)+1
        random_blue=Math.floor(Math.random()*255)+1
       document.getElementById("i_can_hear").innerHTML= "I can hear : " + result[0].label
       document.getElementById("sound_accuracy").innerHTML= "Accuracy : " + (result[0].confidence*100).toFixed(2)
       document.getElementById("i_can_hear").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
       document.getElementById("sound_accuracy").style.color="rgb("+random_red+","+random_green+","+random_blue+")";
       img1=document.getElementById("first_alien")
       img2=document.getElementById("second_alien")
       img3=document.getElementById("third_alien")
       img4=document.getElementById("fourth_alien")
       if(result[0].label=="Background Noise"){
           img1.src="aliens-01.gif"
           img2.src="aliens-02.png"
           img3.src="aliens-03.png"
           img4.src="aliens-04.png"
       }
       else if(result[0].label=="Bell Sound"){
        img1.src="aliens-02.gif"
        img2.src="aliens-01.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
    }
else if(result[0].label=="Clapping"){
        img1.src="aliens-03.gif"
        img2.src="aliens-02.png"
        img3.src="aliens-01.png"
        img4.src="aliens-04.png"
}
else{
    img1.src="aliens-04.gif"
    img2.src="aliens-02.png"
    img3.src="aliens-03.png"
    img4.src="aliens-01.png"
    }}}