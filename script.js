$(document).ready(function () {
    $("#btn1").click(function () {
        let p = $(this).prev().find("p")
        p.toggle()
        //    console.log($(this).text()); 
        //     if($(this).text() == "Hide"){
        //     $(this).text("Show")
        //     }
        //     if($(this).text() == "Show"){
        //         $(this).text("Hide") 
        //     }
    })
    $("#btn2").click(function () {
        let p = $(this).prev().find("p")
        p.fadeToggle()
        // $(this).attr("title","n")
        // if($(this).attr("title") == "n"){
        //     // $(this).text("Fade In")
        //     p.fadeIn()
        // }else{
        //     // $(this).text("Fade Out")
        //     // p.fadeIn()
        // }
    })
    $("#btn3").click(function () {
        let p = $(this).prev().find("p")
        p.fadeTo(100, 0.25)
        if (p.css("opacity") == 0.25) {
            p.fadeTo(100, 1)
        }
    })
    $("#btn4").click(function () {
        let p = $(this).prev().find("p")
        p.slideToggle()
    })
    $("#btn5").click(function () {
        let p = $(this).prev().find("p")
        p.animate({
            top: "540px",
            left: "280px"

        }, 1000)
    })
    $("#btn6").click(function () {
        let p = $(this).prev().prev().find("p")
        p.animate({
            top: "510px",
            left: "200px"

        }, 1000)
    })
    $("#btn7").click(function () {
        let div = $(this).prev()
        // console.log(div);
        div.animate({
            width: "1px"
        }, 5000)
    })
    $("#btn8").click(function () {
        let div = $(this).prev().prev()
        //console.log(div);
        div.stop()
    })
    $("#btn9").click(function(){
        let p = $(this).prev().find("p")
        p.hide("slow", function(){
          alert("The paragraph is now hidden");
        });
      });
      $("#btn10").click(function(){
        let p = $(this).prev().prev().find("p")
        p.show("slow", function(){
          alert("The paragraph is now shown");
        });
      });
})