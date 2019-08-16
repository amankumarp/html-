pos_top=395;
scr=0;
myword = "";
var i=0,x,y,b=0,p=0,g=0;
user_name="";
function rand()
{
if(pos_top>175)
{
j=Math.round(Math.random()*70)
$("#main").append("<div class='word'style='left:172px;top:8px;'>"+arr[j]+"</div>");
i+=1;
g=0;
myword = "";
$("#wrd_status").html(myword);
}
else if(pos_top == 152)
{
$("#main").append("<div id='gm_over'>Game Over<br><button onclick='restart()'>restart</button></div>");
if(scr>Number(localStorage.getItem(user_name)))
localStorage.setItem(user_name,scr);
}
}
function move()
{
word=$('.word');
tp=word[i-1].style.top;
tp1=tp.split("px");
if(tp1[0]<pos_top)
{
tp1[0]++;
word[i-1].style.top=tp1[0]+"px";
}
else
{
word[i-1].style.background="red";
pos_top-=27;
rand();
}
}
function matchWord(t)
{
if(t.keyCode==8&& b==0)
{
str=myword
str1="";
for (l=0;l<+myword.length-1;l++)
{
str1=str1+str[l];
}
myword=str1;
$("#wrd_status").html(myword);
}
else if(t.keyCode==13&&p==0)
{
getName();
}
else if(t.keyCode==13&&p==1)
{
restart();
}
else if(t.keyCode==32&&p==1)
{
if(b==0)
{
window.clearInterval(y)
$("#main").append("<h2>Pause</h2>")
b=1;
}
else if(b==1)
{
b=0;
$("#main h2").remove();
y=setInterval(move,10);
}
}
else if(b==0)
{
x = arr[j].toLowerCase();
key=String.fromCharCode(t.keyCode).toLowerCase();
if(x[g]==key)
{
myword+=key;
$("#wrd_status").html(myword);
g++;
}
if(x ==myword)
{
word[i-1].style.display = "none";
scr+=10;
$("#scr_brd").html("user:"+user_name+"<br>score:"+scr);
g=0;
myword = "";
rand();
}
}
}
function restart()
{
$("#gm_over").remove();
$(".word").remove();
pos_top=395;
scr=0;
i=0;
$("#scr_brd").html("user:"+user_name+"<br>score:"+scr);
$("#history").empty();
set();
rand();
}
function popup()
{
$("#main").html("");
$("#main").append("<input type='text' id='name' placeholder='Enter your name' style='width:450px; height:30px;position:absolute;left:100px;top:200px;font-weight:bold;border:groove;' required>");
$("#main").append("<input type='submit' value='submit'  onclick='getName()' style='width:70px;height:30px;position:absolute;left:100px;top:240px;font-weight:bold;'>");
$("#name").focus();
}
function getName()
{
txt_fild=document.getElementById("name");
user_name=txt_fild.value;
if(user_name!="")
{
$("#main").html("");
$("#main").append('<div id="box" style="position: absolute;left: 80px;top:-25px"><div id="wall" style="left:70px;top:200px;"></div><div id="wall" style="left:350px;top:200px;"></div><div id="wall" style="left:212px;top:323px;transform: rotate(90deg);"></div></div><div id="scr_brd">user:'+user_name+"<br>score:"+scr+'</div><div id="wrd_status"></div><div id="history"><h2>Previous Score</h2></div>');
set();
p=1;
rand();
}
y=setInterval(move,10)
}
function set()
{
lt="";
stri=JSON.stringify(localStorage);
for(let p=2;p<stri.length-2;p++)
{
lt+=stri[p];
}
sub_str=lt.split('","')
for(let o=0;o<sub_str.length;o+=1)
{
let arr=sub_str[o].split('":"')
$("#history").append("<h3>"+arr[0]+":"+arr[1]+"</h3>")
}
}
