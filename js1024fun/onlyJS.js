n_t=6,w=a.width,h=a.height,l_e=w>h?h/n_t:w/n_t,x=y=0,bo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],le=1,tm=600,gx=gy=0,s=0,mf=Math.floor,mr=Math.random,cI=clearInterval,a.onmouseup=function(e){ex=e.offsetX,ey=e.offsetY,ga(ex,ey)},a.ontouchend=function(e){ex=e.touches[0].clientX,ey=e.touches[0].clientY,ga(ex,ey)},ga=function(e,n){e<=l_e*n_t&&n<=l_e*n_t&&(gx=mf(e/l_e),gy=mf(n/l_e),dT("blue",gx*l_e,gy*l_e),bo[gy*n_t+gx]&&(s--,bo[gy*n_t+gx]=0),s||(cI(loop),lFn()))},dT=function(e,n,t,l){c.beginPath(),c.fillStyle=e,c.fillRect(n,t,l||l_e,l||l_e),c.stroke()},lFn=function(){if(c.font="100px Arial",s==n_t*n_t-1)cI(loop),c.fillStyle="black",c.fillText("LOSE!!!",100,100);else if(s)for(let e=0;e<le;e++)ux=ran(),uy=ran(),uGA(ux,uy);else cI(loop),c.fillStyle="white",c.fillText("WIN!!!",100,100)},uGA=function(e,n){bo[n*n_t+e]?(ux=ran(),uy=ran(),uGA(ux,uy)):(bo[n*n_t+e]=1,s++,dT("orange",e*l_e,n*l_e))},ran=function(){return mf(mr()*(n_t-0))},gC=function(){return{x:ran(),y:ran()}},dT("blue",0,0,l_e*n_t),co=gC(),uGA(co.x,co.y),loop=setInterval(e=>{lFn()},tm);
