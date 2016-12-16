var ypage1=["skyblue","yellow","white","pink","skyblue"];
var yshlayerbox=$("yshlayerbox");
var laye=yshlayerbox.children;
var ysholfour=$("ysholfour");
var ydd=ysholfour.children;

var zIndex=5;
  for(var i=0;i<laye.length;i++){
    laye[i].style.backgroundColor=ypage1[i];
    laye[i].style.zIndex=zIndex--;
  }
	

		//	主界面动画函数
		function i_fun1() {
			var i=0;
			var time1 = setInterval(function() {
					var a;
					if(i == 3) {
						i = 0;
						//		 排他思想 
						for(var j = 0; j < laye.length; j++) {
							laye[j].style.display = "none";
							// ydd[j].style.background = "white";
						}
						// 拍他思想的应用
						// ydd[i].style.background = "orange";
						laye[i].style.display = "block";
						laye[i + 3].style.display = "block";
						laye[i].style.animation = "yundong2 2s linear 0s 1";
						laye[i + 3].style.animation = "yundong1 2s linear 0s 1";
						var timeLast = setTimeout(function() {
							laye[i + 3].style.display = "none";
							clearTimeout(timeLast);
						}, 2000);
					} else {
						i = i + 1;
//						console.log(i);
						for(var j = 0; j < laye.length; j++) {
							laye[j].style.display = "none";
							// ydd[j].style.background = "white";
						}
						ydd[i].style.background = "orange";
						laye[i].style.display = "block";
						laye[i].style.transformOrign = "0% 100%";
						laye[i - 1].style.display = "block";
						laye[i-1].style.transformOrign = "100% 100%";
						laye[i].style.animation = "yundong2 2s linear 0s 1";
						laye[i - 1].style.animation = "yundong1 2s linear 0s 1";
					}
//							小圆点点击事件
					for(var k = 0; k < ydd.length; k++) {
						// ydd[k].index = k;
						ydd[k].onclick = function() {

							clearInterval(time1);
						  for(var n = 0; n < laye.length; n++) {
							    laye[n].style.display = "none";
								// ydd[n].style.background = "white";
							}
						  if(this.index==0){
						  	// ydd[0].style.background = "orange";
						  	laye[0].style.display = "block";
							laye[3].style.display = "block";
							laye[0].style.animation = "yundong2 2s linear 0s 1";
							laye[3].style.animation = "yundong1 2s linear 0s 1";
							var timeLast1 = setTimeout(function() {
							laye[3].style.display = "none";
							clearTimeout(timeLast1);
						}, 2000);
						}
						  else{
						    // ydd[this.index].style.background = "orange";
							laye[this.index].style.display = "block";
							laye[this.index - 1].style.display = "block";
							laye[this.index].style.animation = "yundong2 2s linear 0s 1";
							laye[this.index - 1].style.animation = "yundong1 2s linear 0s 1";
							}
						i=this.index;
					    var timeLast2 = setTimeout(function() {
							i_fun1();
							clearTimeout(timeLast2);
						},5000);
						}
						
					}
                  }, 5000);
          }
		i_fun1();
//		悬浮暂停函数
	// }


