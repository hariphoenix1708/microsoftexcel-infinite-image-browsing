import{d as F,r as w,C as G,E as V,y as B,o as E,l as N,c as l,m as o,n as s,p as k,q as x,t as y,K as U,aQ as $,a1 as q,W as D}from"./index-f85c2dbf.js";import{u as Q,e as R,i as O,g as H,c as K,l as W,m as j,t as J,S as L}from"./FileItem-14b9de82.js";import{a as P,M as X}from"./db-9d80b1a6.js";import"./index-624d569a.js";import"./_baseIteratee-da3485ca.js";import"./button-3c6fce50.js";const Y={class:"hint"},Z=F({__name:"MatchedImageGrid",props:{tabIdx:null,paneIdx:null,selectedTagIds:null,id:null},setup(h){const u=h,n=w(),m=G(new V(-1,0,-1,"throw"));B(()=>u.selectedTagIds,async()=>{var e;const{res:a}=m.pushAction(()=>P(u.selectedTagIds));n.value=await a,(e=p.value)==null||e.scrollToItem(0)},{immediate:!0});const p=w(),f={tabIdx:-1,target:"local",paneIdx:-1},{stackViewEl:M,multiSelectedIdxs:v}=Q().toRefs(),{itemSize:g,gridItems:b}=R(f),{showMenuIdx:c}=O(),{showGenInfo:d,imageGenInfo:I,q:C,onContextMenuClick:S}=H(f,{openNext:$}),T=async(a,e,i)=>{if(await S(a,e,i),a.key==="deleteFiles"){const r=v.value.includes(i)?v.value:[i];n.value=n.value.filter((_,t)=>!r.includes(t))}};return(a,e)=>{const i=q,r=X,_=L;return E(),N("div",{class:"container",ref_key:"stackViewEl",ref:M},[l(_,{size:"large",spinning:!m.isIdle},{default:o(()=>[l(r,{visible:s(d),"onUpdate:visible":e[1]||(e[1]=t=>k(d)?d.value=t:null),width:"70vw","mask-closable":"",onOk:e[2]||(e[2]=t=>d.value=!1)},{cancelText:o(()=>[]),default:o(()=>[l(i,{active:"",loading:!s(C).isIdle},{default:o(()=>[x("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:e[0]||(e[0]=t=>s(K)(s(I),"copied"))},[x("div",Y,y(a.$t("doubleClickToCopy")),1),U(" "+y(s(I)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),l(s(W),{ref_key:"scroller",ref:p,class:"file-list",items:n.value||[],"item-size":s(g).first,"key-field":"fullpath","item-secondary-size":s(g).second,gridItems:s(b)},{default:o(({item:t,index:z})=>[l(j,{idx:z,file:t,"show-menu-idx":s(c),"onUpdate:showMenuIdx":e[3]||(e[3]=A=>k(c)?c.value=A:null),"full-screen-preview-image-url":s(J)(t),onContextMenuClick:T},null,8,["idx","file","show-menu-idx","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])]),_:1},8,["spinning"])],512)}}});const oe=D(Z,[["__scopeId","data-v-add906fc"]]);export{oe as default};