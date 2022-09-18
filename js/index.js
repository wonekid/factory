function hello(){

   alert("hello world!")
}

function sendMessage(){

      var name = document.getElementById("name").value
      var email = document.getElementById("email").value
      var message = document.getElementById("message").value

      alert("Commited:\n"+"Your name="+name+"\n"+"Your email="+email+"\n"+"Your message="+message+"\n")

}

function sayHello(){
   var colorBox=["blue","orange","yellow"]
   var hello = document.getElementById("hello")

   for(var i=0;i<colorBox.length;i++){
      hello.style.color = colorBox[i]
      
      
   }
   // if(hello.style.color == "blue" ){
   //    hello.style.color = "orange"
   //    document.getElementById("text").innerHTML = "当前颜色orange"

   // }else{
   //    hello.style.color = "blue"
   //    document.getElementById("text").innerHTML = "当前颜色blue"
   // }


}