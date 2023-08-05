	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
			var topScroll =document.documentElement.scrollTop;//滚动的距离,距离顶部的距离
			var header=document.getElementById("header");
			var header_width=header.offsetWidth;
			var nav=document.getElementById("topnav")
			var distance=getElementToPageTop(nav);
            var bignav  = document.getElementById("topnav");//获取到导航栏id
		    console.log(121);
		// 当网页向下滑动 20px 出现"返回顶部" 按钮
		    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("myBtn").style.display = "block";
		} else {
			document.getElementById("myBtn").style.display = "none";
		}
            if(distance<topScroll){  //当滚动距离大于distance时执行下面的东西
                bignav.style.position = 'fixed';
				bignav.style.top = '0';
                bignav.style.zIndex = '0';
				bignav.style.left = '0';
				bignav.style.width='100%';
            }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
                bignav.style.position = 'static';
                }
	}
	function getElementToPageTop(el) {
	  if(el.parentElement) {
	    return this.getElementToPageTop(el.parentElement) + el.offsetTop
	  }
	  return el.offsetTop
	}
// 点击按钮，返回顶部
	function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}
	// var index=0;
	// function ChangeImg() {
	// 	index++;
	// 	var a=document.getElementsByClassName("img-slide");
	// 	if(index>=a.length) index=0;
	// 	for(var i=0;i<a.length;i++){
	// 		a[i].style.display='none';
	// 	}
	// 	a[index].style.display='block';
	// }
	// //设置定时器，每隔两秒切换一张图片
	// setInterval(ChangeImg,3000);