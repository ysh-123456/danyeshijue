function $(id){
   return document.getElementById(id);
}
 var ulBox = $("yshpage");
var ulBoxLi = ulBox.children;
var oltopBox = $("yshtu");
var oltopBoxLi = oltopBox.children;
 var olBox = $("yshyoufixd");
 var olBoxLi = olBox.children;
 var leader=0;
 var target=0;
 var timer=null;
 var sanjiaoxing=oltopBoxLi.children;

var bgColor = ["skyblue","purple","orange","blue","green"];
// 右边小圆圈
 for(var i= 0; i<ulBoxLi.length; i++)
      {
        olBoxLi[i].index = i;  // 记录当前的索引号
        olBoxLi[i].onclick = function() {
                clearInterval(timer);

                target = ulBoxLi[this.index].offsetTop; // 核心语句
                timer = setInterval(function() {
                    leader = leader + (target - leader ) /10;
                       ulBox.style.top=-leader+"px";
                },30)
// 实现联动
        for(var i=0;i<ulBoxLi.length;i++){
         olBoxLi[i].style.backgroundColor = "";
         }
        olBoxLi[this.index].style.backgroundColor = bgColor[this.index];
          for(var i=0;i<yshdiv.length;i++){
                      yshdiv[i].style.display="none";
                 }
          yshdiv[this.index].style.display="block";
        }
      }
var yshdiv=$("yshtu").getElementsByTagName("div");

for(var i= 0; i<ulBoxLi.length; i++)
            {
                oltopBoxLi[i].index = i;  // 记录当前的索引号
                oltopBoxLi[i].onclick = function() {
                        clearInterval(timer);
                        target = ulBoxLi[this.index].offsetTop; // 核心语句
                        timer = setInterval(function() {
                            leader = leader + (target - leader ) /10;
                               ulBox.style.top=-leader+"px";
                               var that=this.index;
                       
                        },30)
               //实现联动 
          for(var i=0;i<yshdiv.length;i++){
               yshdiv[i].style.display="none";
          }
          yshdiv[this.index].style.display="block";
         for(var i=0;i<ulBoxLi.length;i++){
         olBoxLi[i].style.backgroundColor = "";
         }
        olBoxLi[this.index].style.backgroundColor = bgColor[this.index];
                    
                }

            }
// 小手的使用以及文字的颜色使用
// var yshi=oltopBoxLi.children[1];
var current=0;
for(var i= 0; i<ulBoxLi.length; i++){
   // oltopBoxLi[i].index = i;
  oltopBoxLi[i].onmouseover = function(){
     oltopBoxLi[this.index].style.cursor="pointer";
     oltopBoxLi[this.index].style.color="blue";

  } 
  olBoxLi[i].onmouseover = function(){
    olBoxLi[this.index].style.cursor="pointer";

  }
oltopBoxLi[i].onmouseout = function(){
     // oltopBoxLi[this.index].style.cursor="pointer";
     oltopBoxLi[this.index].style.color="black";
  } 

}


 // 背景图片的使用

for(var i=0;i<ulBoxLi.length;i++){
  ulBoxLi[i].style.background="url(img/bg"+(i+1)+".jpg)";
}
//  音乐动图的；
var gif=$("yshgif");
gif.style.backgroundImage="url(img/musicon.gif)";
gif.onmouseover=function(){
  
   gif.style.backgroundImage="url(img/musicoff.gif)";
}
gif.onmouseout=function(){
   gif.style.backgroundImage="url(img/musicon.gif)";
}
// 第一个页面
var ypage1=["skyblue","yellow","white","pink"];
var yshlayerbox=$("yshlayerbox");
var laye=yshlayerbox.children;
var ysholfour=$("ysholfour");
var ysholfourli=ysholfour.children;

// var zIndex=4;
//   for(var i=0;i<ylione.length;i++){
//     ylione[i].style.backgroundColor=ypage1[i];
//     ylione[i].style.zIndex=zIndex--;
//   }
// 旋转木马轮播
  // var yshjson=[
  // {z:4,left:200,trans:rotateY(-45deg),background:skyblue},
  // {z:3,left:-200,trans:rotateY(45deg),background:yellow},
  // {z:2,left:200,trans:rotateY(-45deg),background:white},
  // {z:1,left:-200,trans:rotateY(45deg),background:pink}
  // ];
// var yshjson=[
// {z:4},{z:3},{z:2},{z:1}
// ]

//   for(var i=0;i<ylione.length;i++){
//     json.push(json.shift());
//      animate(ylione[i],transform:yshjson[i].transform,
//       transform:yshjson[i].trans,zIndex:yshjson[i].z,
//       backgroundColor:yshjson[i].background);
//   }
// 主页面轮播
function yshlunbo(){
  for(var i=0;i<ylione.length;i++){
    ylione[i].style.backgroundColor=ypage1[i];
    ylione[i].style.zIndex=zIndex--;

    var yshtimer=setInterval(function(){
    if(i==3){
      i=0;
      for(var j=0;j<ylione.length;j++){
        ylione[j].style.display = "none";
      }
      ylione[i].style.display = "block";
      ylione[i+3].style.display = "block";
      ylione[i].style.animation = "yshright 2s linear 0s 1";
      ylione[i + 3].style.animation = "yshleft 2s linear 0s 1";
    }
    else {
            i = i + 1;
//            console.log(i);
            for(var j = 0; j < ylione.length; j++) {
              ylione[j].style.display = "none";
            }
         
            ylione[i].style.display = "block";
            ylione[i - 1].style.display = "block";
            ylione[i].style.animation = "yshright 2s linear 0s 1";
            ylione[i - 1].style.animation = "yshleft 2s linear 0s 1";
          }
  },2000)
  }
  
}








// 四个小圆圈点击事件

  for(var i=0;i<ysholfourli.length;i++){
    ysholfourli[i].index=i;
    ysholfourli[i].onclick=function(){
        // ysholfourli[this.index].style.animation="box 3s ease 0s infinite";
      
    }
      // 小圆点颜色的跳动
   ysholfourli[i].onmousemove=function(){
     for(var i=0;i<ysholfourli.length;i++){
         ysholfourli[i].style.backgroundColor="";
      }
      ysholfourli[this.index].style.backgroundColor="yellowgreen";
      ysholfourli[this.index].style.cursor="pointer";
    }
   }
// 日期
var date=new Date();
var yshchengyuan=document.getElementsByClassName("yshchengyuan")[0];
var yshriqi=document.getElementsByClassName("yshriqi")[0];
var a=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日";
 $("yshtime").innerHTML=a;
  yshriqi.onmouseover=function(){
    yshchengyuan.style.display="block";
    yshriqi.style.cursor="help";
  }
  yshriqi.onmouseout=function(){
    yshchengyuan.style.display="none";
  }

// 第二个页面
var ysh_page2=document.getElementsByClassName("ysh_page2")[0];
var yshxiaoplane=$("yshxiaoplane");
ysh_page2.onmousemove=function(){
  $("yshdaplane").style.animation="ydaplane 8s ease 0s alternate";
  $("yshmiddleplane").style.animation="ymiddleplane 8s ease 0s alternate";
// 第三个飞机动画利用json对象 
   animate(yshxiaoplane,{left:500,bottom:100},
    function(){animate(yshxiaoplane,{left:600,bottom:200},
      function(){animate(yshxiaoplane,{left:500,bottom:100})
    })}
    )
}
// 九宫格
var yshjiugongge=document.getElementsByClassName("yshjiugongge")[0];
var yshxiaoge=document.createElement("div");
yshjiugongge.appendChild(yshxiaoge);
yshxiaoge.className="yshxiaoge";
// var yshxiaogecontent=document.createElement("span");
// yshxiaoge.appendChild(yshxiaogecontent);
var ysharrxiaoge=["img/binoli.png","img/bks.png","img/gu.png","img/hlx.png",
"img/leonberg.png","img/leonberg.png","img/pcwelt.png","img/binoli.png",
"img/bks.png","img/gu.png","img/leonberg.png"];
var yshbeimian=["img/modeo03.jpg","img/modeo04.jpg","img/modeo05.jpg",
"img/modeo06.jpg","img/modeo07.jpg","img/modeo03.jpg",
"img/modeo04.jpg","img/modeo05.jpg",
"img/modeo06.jpg","img/modeo07.jpg","img/modeo03.jpg"];


for(var i=0;i<11;i++){
  var yshxiaogediv=yshxiaoge.cloneNode(true);
  yshjiugongge.appendChild(yshxiaogediv);
  var yshjiugonggechild=yshjiugongge.children;
  yshjiugonggechild[i].style.backgroundColor="rgb(54,122,161)";
   yshjiugonggechild[i].style.backgroundImage="url("+ysharrxiaoge[i]+")";
  // yshjiugonggechild[i].className="yshtrue";
 yshjiugonggechild[i].style.backgroundRepeat="no-repeat";
  yshjiugonggechild[i].style.backgroundPosition="center";
  yshjiugongge.style.perspective="600px";
 
}











































  




