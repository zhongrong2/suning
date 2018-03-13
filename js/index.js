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
					

				},25)
			}

		});

		window.addEventListener("scroll", function(){
			let st=document.documentElement.scrollTop;
			for(let i=0;i<contains.length;i++){
				if(st>contains[i].offsetTop-50){
					for(let i=0;i<tips.length;i++){
						tips[i].classList.remove("active");
					}
					tips[i].classList.add("active");
				}
			}
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
		},25)
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