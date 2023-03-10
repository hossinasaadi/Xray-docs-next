import{c as n,p as t}from"./constant.4f073c13.js";import{ah as a,ai as r,ag as c,aj as e,ak as o,al as u,am as i,an as y,ao as l,ap as f,aq as s,ar as p,as as x}from"./mermaid.core.dd74ef8a.js";function h(n){return n.innerRadius}function v(n){return n.outerRadius}function d(n){return n.startAngle}function g(n){return n.endAngle}function m(n){return n&&n.padAngle}function T(n,t,a,c,e,o,u,i){var y=a-n,l=c-t,f=u-e,s=i-o,p=s*y-f*l;if(!(p*p<r))return[n+(p=(f*(t-o)-s*(n-e))/p)*y,t+p*l]}function A(n,t,a,r,c,e,o){var u=n-a,i=t-r,y=(o?e:-e)/l(u*u+i*i),f=y*i,p=-y*u,x=n+f,h=t+p,v=a+f,d=r+p,g=(x+v)/2,m=(h+d)/2,T=v-x,A=d-h,R=T*T+A*A,j=c-e,k=x*d-v*h,q=(A<0?-1:1)*l(s(0,j*j*R-k*k)),P=(k*A-T*q)/R,b=(-k*T-A*q)/R,w=(k*A+T*q)/R,z=(-k*T+A*q)/R,B=P-g,C=b-m,D=w-g,E=z-m;return B*B+C*C>D*D+E*E&&(P=w,b=z),{cx:P,cy:b,x01:-f,y01:-p,x11:P*(c/j-1),y11:b*(c/j-1)}}function R(){var s=h,R=v,j=n(0),k=null,q=d,P=g,b=m,w=null;function z(){var n,h,v=+s.apply(this,arguments),d=+R.apply(this,arguments),g=q.apply(this,arguments)-a,m=P.apply(this,arguments)-a,z=i(m-g),B=m>g;if(w||(w=n=t()),d<v&&(h=d,d=v,v=h),d>r)if(z>c-r)w.moveTo(d*e(g),d*o(g)),w.arc(0,0,d,g,m,!B),v>r&&(w.moveTo(v*e(m),v*o(m)),w.arc(0,0,v,m,g,B));else{var C,D,E=g,F=m,G=g,H=m,I=z,J=z,K=b.apply(this,arguments)/2,L=K>r&&(k?+k.apply(this,arguments):l(v*v+d*d)),M=u(i(d-v)/2,+j.apply(this,arguments)),N=M,O=M;if(L>r){var Q=p(L/v*o(K)),S=p(L/d*o(K));(I-=2*Q)>r?(G+=Q*=B?1:-1,H-=Q):(I=0,G=H=(g+m)/2),(J-=2*S)>r?(E+=S*=B?1:-1,F-=S):(J=0,E=F=(g+m)/2)}var U=d*e(E),V=d*o(E),W=v*e(H),X=v*o(H);if(M>r){var Y,Z=d*e(F),$=d*o(F),_=v*e(G),nn=v*o(G);if(z<y&&(Y=T(U,V,_,nn,Z,$,W,X))){var tn=U-Y[0],an=V-Y[1],rn=Z-Y[0],cn=$-Y[1],en=1/o(x((tn*rn+an*cn)/(l(tn*tn+an*an)*l(rn*rn+cn*cn)))/2),on=l(Y[0]*Y[0]+Y[1]*Y[1]);N=u(M,(v-on)/(en-1)),O=u(M,(d-on)/(en+1))}}J>r?O>r?(C=A(_,nn,U,V,d,O,B),D=A(Z,$,W,X,d,O,B),w.moveTo(C.cx+C.x01,C.cy+C.y01),O<M?w.arc(C.cx,C.cy,O,f(C.y01,C.x01),f(D.y01,D.x01),!B):(w.arc(C.cx,C.cy,O,f(C.y01,C.x01),f(C.y11,C.x11),!B),w.arc(0,0,d,f(C.cy+C.y11,C.cx+C.x11),f(D.cy+D.y11,D.cx+D.x11),!B),w.arc(D.cx,D.cy,O,f(D.y11,D.x11),f(D.y01,D.x01),!B))):(w.moveTo(U,V),w.arc(0,0,d,E,F,!B)):w.moveTo(U,V),v>r&&I>r?N>r?(C=A(W,X,Z,$,v,-N,B),D=A(U,V,_,nn,v,-N,B),w.lineTo(C.cx+C.x01,C.cy+C.y01),N<M?w.arc(C.cx,C.cy,N,f(C.y01,C.x01),f(D.y01,D.x01),!B):(w.arc(C.cx,C.cy,N,f(C.y01,C.x01),f(C.y11,C.x11),!B),w.arc(0,0,v,f(C.cy+C.y11,C.cx+C.x11),f(D.cy+D.y11,D.cx+D.x11),B),w.arc(D.cx,D.cy,N,f(D.y11,D.x11),f(D.y01,D.x01),!B))):w.arc(0,0,v,H,G,B):w.lineTo(W,X)}else w.moveTo(0,0);if(w.closePath(),n)return w=null,n+""||null}return z.centroid=function(){var n=(+s.apply(this,arguments)+ +R.apply(this,arguments))/2,t=(+q.apply(this,arguments)+ +P.apply(this,arguments))/2-y/2;return[e(t)*n,o(t)*n]},z.innerRadius=function(t){return arguments.length?(s="function"==typeof t?t:n(+t),z):s},z.outerRadius=function(t){return arguments.length?(R="function"==typeof t?t:n(+t),z):R},z.cornerRadius=function(t){return arguments.length?(j="function"==typeof t?t:n(+t),z):j},z.padRadius=function(t){return arguments.length?(k=null==t?null:"function"==typeof t?t:n(+t),z):k},z.startAngle=function(t){return arguments.length?(q="function"==typeof t?t:n(+t),z):q},z.endAngle=function(t){return arguments.length?(P="function"==typeof t?t:n(+t),z):P},z.padAngle=function(t){return arguments.length?(b="function"==typeof t?t:n(+t),z):b},z.context=function(n){return arguments.length?(w=null==n?null:n,z):w},z}export{R as a};
