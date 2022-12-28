//bài 1
document.getElementById("play").onclick=function(){
    let so1=+document.getElementById("so1").value;
    let so2=+document.getElementById("so2").value;
    let so3=+document.getElementById("so3").value;
    if(so1>so2)
    {
        let temp=+so1;
         so1=so2;
         so2=temp

    }
    if(so1>so3)
    {
        let temp=+so1;
        so1=so3;
        so3=temp

    }
    if(so2>so3)
    {
        let temp=+so2;
        so2=so3;
        so3=temp

    }
    document.getElementById("result-wr").style.display="block";
    console.log(so1, "<", so2,  "<", so3);
    document.getElementById("result").innerHTML=so1 + "<" + so2 +  "<" + so3;
}



// bài 2
alert("hello, may I ask who is using the device?");
let rep=prompt("người sử dụng?");
if(rep==="B")
{
    alert("chào bố già ạ")
}
if(rep==="M")
{
    alert("chào mẹ ạ")
}
if(rep==="A")
{
    alert("chào anh nhó")
}
if(rep==="E")
{
    alert("lại xài máy đấy à em?")
}


//bài 3
document.getElementById("played").onclick=function(){
    let so1=+document.getElementById("so1.").value;
    let so2=+document.getElementById("so2.").value;
    let so3=+document.getElementById("so3.").value;
    let so=[so1,so2,so3];
    let chan=+0;
    let le=+0;
   for(let i=0;i<so.length;i++){
    if(so[i]%2==0)
    {
        chan++;
    }
    else
    {
        le++;
    }
   }
    document.getElementById("result-w").style.display="block";
    document.getElementById("resultt").innerHTML="tổng số chẵn: " + chan + "<br>" +"tổng số lẻ: "+ le;
}



//bài 4
document.getElementById("click").onclick=function(){
    let canh1=+document.getElementById("canh1").value;
    let canh2=+document.getElementById("canh2").value;
    let canh3=+document.getElementById("canh3").value;
if(((canh1==canh2)&&(canh1==canh3)))
{
    document.getElementById("resullt").innerHTML="đây là tam giác đều";
}
    else if((canh1==canh2)||(canh3==canh1)||(canh2==canh3)){
document.getElementById("resullt").innerHTML="đây là tam giác cân";
}
else if((canh1*canh1)==(canh2*canh2)+(canh3*canh3)||(canh2*canh2)==(canh1*canh1)+(canh3*canh3)||(canh3*canh3)==(canh1*canh1)+(canh2*canh2))
{
     document.getElementById("resullt").innerHTML="đây là tam giác vuông";
}
else
{
    document.getElementById("resullt").innerHTML="đây là tam giác thường";
}

document.getElementById("result-wra").style.display="block";
}