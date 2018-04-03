// banner
{
	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagerbox li");
	let banner=document.querySelector("#banner");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	console.log(imgs,pagers);

	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("action");
				pagers[i].classList.remove("action");

			}
			// this/ele/pagers[]
			
			this.classList.add('action');
			imgs[index].classList.add('action');
			n=index;
		}
	});

	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		if(n===imgs.length){
				n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){

			imgs[i].classList.remove("action");
			pagers[i].classList.remove("action");
		}
		imgs[n].classList.add("action");
		pagers[n].classList.add("action");
	};

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}

	var flag=true;
	next.onclick=function (){
		if(flag){
			flag=false;
			move();
		}
		
	}
	prev.onclick=function (){
		if(flag){
			flag=false;
			n-=2;//n++ n--
			move();
		}
		
	}

	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
	});
}
// 出现顶部
{
	let top=document.querySelector(".tobar");
	let leftbar=document.querySelector(".leftbar");
	let totop=document.querySelector(".tip_totop")

	console.log(top);

	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>1100){
			top.style.display="block";
		}else{
			top.style.display="none";
		}
		
		if(st>2500){
			leftbar.style.display="block";
		}else{
			leftbar.style.display="none";
		}

		console.log(document.documentElement.scrollTop);
	}

	{
		let tips=document.querySelectorAll(".tip");
		let contains=document.querySelectorAll(".containor");

		tips.forEach(function(ele,index){
			ele.onclick=function(){
				let ot=contains[index].offsetTop-70;
				let now=document.documentElement.scrollTop
				let speed=(ot-now)/8;
				let time=0;
				let t=setInterval(function(){
					time+=25;
					now+=speed;
					if(time===200){
						// clearInterval(ot)
						document.documentElement.scrollTop=now;
					}

					contains.style.transition="all 1s linear";
				},25);
                // contains.style.transition="all 0.5s linear";
			}

            window.addEventListener("scroll", function(){

                let st=document.documentElement.scrollTop;

                for(let i=0;i<contains.length;i++){

                    if(st>contains[i].offsetTop-120){

                        for(let i=0;i<tips.length;i++){
                            tips[i].classList.remove("active3");
                        }
                        tips[i].classList.add("active3");
                    }
                }
            });

		});


		totop.onclick=function(){
		document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);

			}
			document.documentElement.scrollTop=st;
		},25);
		// console.log(t);

		
	}
	}
}
// 旁边导航
{
	let lables=document.querySelectorAll(".banner_topl_item");
	let menus=document.querySelectorAll(".banner_itemtan");
	let sidebar=document.querySelectorAll(".banner_topl");
	// console.log(lables,menus);

	let obj=menus[0]
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){

			obj.classList.remove("active");
			menus[index].classList.add("active");
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			obj.classList.remove("active");
		}
	})
}
//banner头部导航
{
	let title=document.querySelectorAll(".daohang_wenzi a");
	let menus=document.querySelectorAll(".daohang_wenzi span");
	let topdaohang=document.querySelectorAll(".daohang_wenzi");
	// console.log(title,menus);

	let obj=menus[0]
	title.forEach(function(ele,index){
		ele.onmouseenter=function(){

			obj.classList.remove("top_active");
			menus[index].classList.add("top_active");
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			obj.classList.remove("top_active");
		}
	})
}
//大聚惠
{
	const prev=document.querySelector(".dajuhui_image_lbtn");
	const next=document.querySelector(".dajuhui_image_rbtn");
	const inner=document.querySelector(".dajuhui_imgs");
	let item=document.querySelectorAll(".dajuhui_limg_item");

	let n=1;
	let flag=true;

		next.onclick=function(){
			if(flag){
				flag=false;
				n++;
				inner.style.transition="all 1s"
				inner.style.marginLeft=-1000*n+"px";
			}
		}

		prev.onclick=function(){
			if(flag){
				flag=false;
				n--;
				inner.style.transition="all 1s"
				inner.style.marginLeft=-1000*n+"px";
			}

		}

		inner.addEventListener("transitionend", function(){
			flag=true;
			if(n===4){
				inner.style.transition="none";
				inner.style.marginLeft="-1000px";
				n=1;
			}

			if(n===0){
				inner.style.transition="none";
				inner.style.marginLeft="-3000px";
				n=3;
			}
		})


		

}
//头部
{
	let lables=document.querySelectorAll(".head_left_wenzi");
	let menus=document.querySelectorAll(".head_tan");
	let head=document.querySelectorAll(".head_left");
	// console.log(lables,menus);

	let obj=menus[0]
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){

			obj.classList.remove("head_active");
			menus[index].classList.add("head_active");
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			obj.classList.remove("head_active");
		}
	})
}
//旁边shopping
{
{
	let lables=document.querySelectorAll(".sideshopping");
	let menus=document.querySelectorAll(".shopping_tan");
	let sidebar=document.querySelectorAll(".shopping li");
	// console.log(lables,menus);

	let obj=menus[0]
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){

			obj.classList.remove("shopping_active");
			menus[index].classList.add("shopping_active");
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			obj.classList.remove("shopping_active");
		}
	})
}


{
	let lables=document.querySelectorAll(".sideshopping2");
	let menus=document.querySelectorAll(".shopping_tan2");
	// let sidebar=document.querySelectorAll(".shopping li");
	// console.log(lables,menus);

	let obj=menus[0]
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){

			obj.classList.remove("shopping_active2");
			menus[index].classList.add("shopping_active2");
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			obj.classList.remove("shopping_active2");
		}
	})
}

{
	let lables=document.querySelectorAll(".sideshopping3");
	let menus=document.querySelectorAll(".shopping_tan3");
	// let sidebar=document.querySelectorAll(".shopping li");
	// console.log(lables,menus);

	let obj=menus[0]
	lables.forEach(function(ele,index){
		ele.onmouseenter=function(){

			obj.classList.remove("shopping_active3");
			menus[index].classList.add("shopping_active3");
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			obj.classList.remove("shopping_active3");
		}
	})
}
//点击回到顶部
{
	let totop1=document.querySelector(".shopping_totop");
	console.log(totop1);
	// let contains=document.querySelectorAll(".containor");

		totop1.onclick=function(){
		document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);

			}
			document.documentElement.scrollTop=st;
		},25)
		
		
	}
}
}



