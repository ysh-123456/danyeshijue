function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var flag=true;
		for(var attr in json){
          var current=parseInt(getstyle(obj,attr));
          var step=(json[attr]-current)/10;

          step=step>0?Math.ceil(step):Math.floor(step);
          obj.style[attr]=current+step+"px";

          if(current!=json[attr]){
          	flag=false;
          }
      }

          if(flag){
          	clearInterval(obj.timer);
          	if(fn){
          		fn();
          		// fn();

          	}
          }
		
	},30)
}





function getstyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return window.getComputedStyle(obj,null)[attr];
	}
}