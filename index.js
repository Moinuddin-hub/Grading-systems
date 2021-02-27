function total(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("mat").value);
    var sub3=parseInt(document.getElementById("ban").value);
    var sub4=parseInt(document.getElementById("che").value);
    var sub5=parseInt(document.getElementById("com").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("please Enter mark in range of 100");
    }
    else{
        var total=sub1+sub2+sub3+sub4+sub5;
        document.getElementById("total").innerHTML="English mark:"+sub1+"<br>Mathamatic mark:"+sub2+"<br> bangla mark:"+sub3+"<br> chemistry mark"+sub4+"<br> computer mark:"+sub5+
        "<br>----------------<br>Total mark:"+total;
    }
}
function  Average(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("mat").value);
    var sub3=parseInt(document.getElementById("ban").value);
    var sub4=parseInt(document.getElementById("che").value);
    var sub5=parseInt(document.getElementById("com").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("please Enter mark in range of 100");
    }
    else{
        var total=sub1+sub2+sub3+sub4+sub5;
        var Ave=total/5;
        document.getElementById("ave").innerHTML="your average mark is:"+Ave;
    } 
}
function grade(){
    var sub1=parseInt(document.getElementById("eng").value);
    var sub2=parseInt(document.getElementById("mat").value);
    var sub3=parseInt(document.getElementById("ban").value);
    var sub4=parseInt(document.getElementById("che").value);
    var sub5=parseInt(document.getElementById("com").value);
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100){
        alert("please Enter mark in range of 100");
    }
else  {
    var total=sub1+sub2+sub3+sub4+sub5;
    var ave=total/5;
    if(ave>=80 && ave<=100){
        document.getElementById("grade").innerHTML="your grade is:A+";
    }
    else if(ave>=70 && ave<=80){
        document.getElementById("grade").innerHTML="your grade is:A";
    }
    else  if(ave>=65 && ave<=70){
        document.getElementById("grade").innerHTML="your grade is:A-";
    }
    else if(ave>=60 && ave<=65){
        document.getElementById("grade").innerHTML="your grade is:B";
    }
    else if(ave>=50 && ave<=60){
        document.getElementById("grade").innerHTML="your grade is:C";
    }
    else if(ave>=40 && ave<=50){
        document.getElementById("grade").innerHTML="your grade is:D";
    }
    else{
        document.getElementById("grade").innerHTML="your grade is:F";  
    }
}

}
