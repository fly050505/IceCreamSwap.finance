(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{767:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var c=n(3),r=n.n(c),a=n(7),o=n(87),s=n.n(o),i=n(69),l=function(e,t){return new(new s.a(e).eth.Contract)(i,t)},b=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l(t,n),e.prev=1,e.next=4,a.methods.balanceOf(c).call();case 4:return o=e.sent,e.abrupt("return",o);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return","0");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,c){return e.apply(this,arguments)}}()},777:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ze}));var c,r=n(18),a=n(0),o=n(31),s=n(30),i=n(8),l=n.n(i),b=n(68),j=n(16),d=n(205),u=n(344),x=n(125),p=n(76),O=n(149),m=n(35),h=n(22),f=n(32),k=n(19),y=n(11),g=n(2),v=n(201),T=n(1),S=g.e.div(c||(c=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),C=function(e){var t=e.onClick,n=e.expanded;return Object(T.jsxs)(S,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return t()},children:[Object(T.jsx)(j.B,{color:"primary",bold:!0,children:n?"Hide":"Details"}),n?Object(T.jsx)(j.l,{}):Object(T.jsx)(j.k,{})]})};C.defaultProps={expanded:!1};var w,A,B,I,q,P,L,Q,D,E,N,z,F,M,R,V,U,G,H=C,W=function(e){var t,n=e.numberOfDays,c=e.farmApy/100,r=n/365,a=1e3/e.cakePrice,o=a*Math.pow(1+c/365,365*r);return t=o-a,Math.round(100*t)/100},K=function(e){var t=e.amountEarned,n=e.amountInvested;return X(t/n*100)},X=function(e){if(!e)return"???";var t=e,n=t<1?0:Math.floor(Math.log10(t)/3),c=["","k","M","B","T","Q","Q","S","S"],r=t/Math.pow(1e3,n);return"".concat(r.toFixed(2)).concat(c[n]?c[n]:"")},$=function(e){var t=e.quoteTokenAdresses,n=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===n?"ETH":t[56],a=c[56];return"".concat(r,"/").concat(a)},J=g.e.div(w||(w=Object(y.a)(["\n  margin-top: 24px;\n"]))),Y=Object(g.e)(j.s)(A||(A=Object(y.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),_=function(e){var t=e.bscScanAddress,n=e.removed,c=e.totalValueFormated,r=e.lpLabel,a=e.quoteTokenAdresses,o=e.quoteTokenSymbol,s=e.tokenAddresses,i=Object(f.a)(),l=$({quoteTokenAdresses:a,quoteTokenSymbol:o,tokenAddresses:s});return Object(T.jsxs)(J,{children:[Object(T.jsxs)(j.n,{justifyContent:"space-between",children:[Object(T.jsxs)(j.B,{children:[i(316,"Stake"),":"]}),Object(T.jsx)(Y,{href:"https://exchange.icecreamswap.finance/#/add/".concat(l),children:r})]}),!n&&Object(T.jsxs)(j.n,{justifyContent:"space-between",children:[Object(T.jsxs)(j.B,{children:[i(23,"Total Liquidity"),":"]}),Object(T.jsx)(j.B,{children:c})]}),Object(T.jsx)(j.n,{justifyContent:"flex-start",children:Object(T.jsx)(j.r,{external:!0,href:t,bold:!1,children:i(356,"View on BscScan")})})]})},Z=n(104),ee=Object(g.e)(j.n)(B||(B=Object(y.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),te=Object(g.e)(j.A)(I||(I=Object(y.a)(["\n  margin-left: 4px;\n  background-color: #850085;\n  border: 1px solid #850085;\n  border-radius: 6px;\n"]))),ne=function(e){var t=e.lpLabel,n=e.multiplier,c=e.isCommunityFarm,r=e.farmImage,a=e.tokenSymbol;return Object(T.jsxs)(ee,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(T.jsx)(j.q,{src:"/images/farms/".concat(r,".svg"),alt:a,width:64,height:64}),Object(T.jsxs)(j.n,{flexDirection:"column",alignItems:"flex-end",children:[Object(T.jsx)(j.o,{mb:"4px",children:t}),Object(T.jsxs)(j.n,{justifyContent:"center",children:[c?Object(T.jsx)(Z.b,{}):Object(T.jsx)(Z.c,{}),Object(T.jsx)(te,{variant:"secondary",children:n})]})]})]})},ce=n(3),re=n.n(ce),ae=n(7),oe=n(767),se=n(206),ie=n(345),le=n(347),be=n(348),je=n(49),de=n(97),ue=n(143),xe=function(e){var t=e.max,n=e.onConfirm,c=e.onDismiss,r=e.tokenName,o=void 0===r?"":r,s=Object(a.useState)(""),i=Object(k.a)(s,2),l=i[0],b=i[1],d=Object(a.useState)(!1),u=Object(k.a)(d,2),x=u[0],p=u[1],O=Object(f.a)(),m=Object(a.useMemo)((function(){return Object(je.b)(t)}),[t]),h=Object(a.useCallback)((function(e){b(e.currentTarget.value)}),[b]),y=Object(a.useCallback)((function(){b(m)}),[m,b]);return Object(T.jsxs)(j.w,{title:"".concat(O(316,"Deposit")," ").concat(o," Tokens"),onDismiss:c,children:[Object(T.jsx)(ue.a,{value:l,onSelectMax:y,onChange:h,max:m,symbol:o}),Object(T.jsxs)(de.a,{children:[Object(T.jsx)(j.e,{variant:"secondary",onClick:c,children:O(462,"Cancel")}),Object(T.jsx)(j.e,{disabled:x,onClick:Object(ae.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,n(l);case 3:p(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:x?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})},pe=function(e){var t=e.onConfirm,n=e.onDismiss,c=e.max,r=e.tokenName,o=void 0===r?"":r,s=Object(a.useState)(""),i=Object(k.a)(s,2),l=i[0],b=i[1],d=Object(a.useState)(!1),u=Object(k.a)(d,2),x=u[0],p=u[1],O=Object(f.a)(),m=Object(a.useMemo)((function(){return Object(je.b)(c)}),[c]),h=Object(a.useCallback)((function(e){b(e.currentTarget.value)}),[b]),y=Object(a.useCallback)((function(){b(m)}),[m,b]);return Object(T.jsxs)(j.w,{title:"Withdraw ".concat(o),onDismiss:n,children:[Object(T.jsx)(ue.a,{onSelectMax:y,onChange:h,value:l,max:m,symbol:o}),Object(T.jsxs)(de.a,{children:[Object(T.jsx)(j.e,{variant:"secondary",onClick:n,children:O(462,"Cancel")}),Object(T.jsx)(j.e,{disabled:x,onClick:Object(ae.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,t(l);case 3:p(!1),n();case 5:case"end":return e.stop()}}),e)}))),children:x?O(488,"Pending Confirmation"):O(464,"Confirm")})]})]})},Oe=g.e.div(q||(q=Object(y.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),me=function(e){var t=e.stakedBalance,n=e.tokenBalance,c=e.tokenName,r=e.pid,a=Object(f.a)(),o=Object(le.a)(r).onStake,s=Object(be.a)(r).onUnstake,i=Object(je.a)(t),l=i.toLocaleString(),b=Object(j.F)(Object(T.jsx)(xe,{max:n,onConfirm:o,tokenName:c})),d=Object(k.a)(b,1)[0],u=Object(j.F)(Object(T.jsx)(pe,{max:t,onConfirm:s,tokenName:c})),x=Object(k.a)(u,1)[0];return Object(T.jsxs)(j.n,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(j.o,{color:0===i?"textDisabled":"text",children:l}),0===i?Object(T.jsx)(j.e,{onClick:d,children:a(999,"Stake LP")}):Object(T.jsxs)(Oe,{children:[Object(T.jsx)(j.p,{variant:"tertiary",onClick:x,mr:"6px",children:Object(T.jsx)(j.v,{color:"primary"})}),Object(T.jsx)(j.p,{variant:"tertiary",onClick:d,children:Object(T.jsx)(j.a,{color:"primary"})})]})]})},he=n(207),fe=Object(g.e)(j.e)(P||(P=Object(y.a)(["\n  border-radius: 6px;\n"]))),ke=function(e){var t=e.earnings,n=e.pid,c=Object(f.a)(),r=Object(a.useState)(!1),o=Object(k.a)(r,2),s=o[0],i=o[1],l=Object(he.b)(n).onReward,b=Object(je.a)(t),d=b.toLocaleString();return Object(T.jsxs)(j.n,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(j.o,{color:0===b?"textDisabled":"text",children:d}),Object(T.jsx)(fe,{disabled:0===b||s,onClick:Object(ae.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,l();case 3:i(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})},ye=g.e.div(L||(L=Object(y.a)(["\n  padding-top: 16px;\n"]))),ge=function(e){var t=e.farm,n=e.ethereum,c=e.account,r=Object(f.a)(),o=Object(a.useState)(!1),s=Object(k.a)(o,2),i=s[0],l=s[1],b=Object(p.a)(t.lpSymbol),d=b.pid,u=b.lpAddresses,x=Object(p.b)(d),O=x.allowance,m=x.tokenBalance,h=x.stakedBalance,y=x.earnings,g=u[56],v=t.lpSymbol.toUpperCase(),S=c&&O&&O.isGreaterThan(0),C=Object(a.useMemo)((function(){return Object(oe.a)(n,g)}),[n,g]),w=Object(ie.a)(C).onApprove,A=Object(a.useCallback)(Object(ae.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,w();case 4:l(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[w]);return Object(T.jsxs)(ye,{children:[Object(T.jsxs)(j.n,{children:[Object(T.jsx)(j.B,{bold:!0,color:"secondary",fontSize:"12px",pr:"3px",children:"Gelato"}),Object(T.jsx)(j.B,{bold:!0,color:"textSubtle",fontSize:"12px",children:r(999,"Earned")})]}),Object(T.jsx)(ke,{earnings:y,pid:d}),Object(T.jsxs)(j.n,{children:[Object(T.jsx)(j.B,{bold:!0,color:"secondary",fontSize:"12px",pr:"3px",children:v}),Object(T.jsx)(j.B,{bold:!0,color:"textSubtle",fontSize:"12px",children:r(999,"Staked")})]}),c?S?Object(T.jsx)(me,{stakedBalance:h,tokenBalance:m,tokenName:v,pid:d}):Object(T.jsx)(j.e,{mt:"8px",fullWidth:!0,disabled:i,onClick:A,children:r(999,"Approve Contract")}):Object(T.jsx)(se.a,{mt:"8px",fullWidth:!0})]})},ve=g.e.div(Q||(Q=Object(y.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Te=g.e.div(D||(D=Object(y.a)(["\n  margin-bottom: '10px';\n"]))),Se=Object(g.e)(j.B)(E||(E=Object(y.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),Ce=function(e){var t=e.onDismiss,n=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,o=e.cakePrice,s=e.apy,i=Object(f.a)(),b=$({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),d=s.times(new l.a(100)).toNumber(),u=1e3/o.toNumber(),x=W({numberOfDays:1,farmApy:d,cakePrice:o}),p=W({numberOfDays:7,farmApy:d,cakePrice:o}),O=W({numberOfDays:30,farmApy:d,cakePrice:o}),m=W({numberOfDays:365,farmApy:d,cakePrice:o});return Object(T.jsxs)(j.w,{title:"ROI",onDismiss:t,children:[Object(T.jsxs)(ve,{children:[Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Gelato per $1000")})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:"1d"})}),Object(T.jsx)(Te,{children:Object(T.jsxs)(j.B,{children:[K({amountEarned:x,amountInvested:u}),"%"]})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:x})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:"7d"})}),Object(T.jsx)(Te,{children:Object(T.jsxs)(j.B,{children:[K({amountEarned:p,amountInvested:u}),"%"]})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:p})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:"30d"})}),Object(T.jsx)(Te,{children:Object(T.jsxs)(j.B,{children:[K({amountEarned:O,amountInvested:u}),"%"]})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:O})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:"365d(APY)"})}),Object(T.jsx)(Te,{children:Object(T.jsxs)(j.B,{children:[K({amountEarned:m,amountInvested:u}),"%"]})}),Object(T.jsx)(Te,{children:Object(T.jsx)(j.B,{children:m})})]}),Object(T.jsx)(Se,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(T.jsx)(j.n,{justifyContent:"center",children:Object(T.jsxs)(j.s,{href:"https://exchange.icecreamswap.finance/#/add/".concat(b),children:[i(999,"Get")," ",n]})})]})},we=function(e){var t=e.lpLabel,n=e.quoteTokenAdresses,c=e.quoteTokenSymbol,r=e.tokenAddresses,a=e.cakePrice,o=e.apy,s=Object(j.F)(Object(T.jsx)(Ce,{lpLabel:t,quoteTokenAdresses:n,quoteTokenSymbol:c,tokenAddresses:r,cakePrice:a,apy:o})),i=Object(k.a)(s,1)[0];return Object(T.jsx)(j.p,{onClick:i,variant:"text",size:"sm",ml:"4px",children:Object(T.jsx)(j.h,{})})},Ae=Object(g.f)(N||(N=Object(y.a)(["\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n"]))),Be=g.e.div(z||(z=Object(y.a)(["\n  // background: linear-gradient(\n  //   45deg,\n  //   rgba(255, 0, 0, 1) 0%,\n  //   rgba(255, 154, 0, 1) 10%,\n  //   rgba(208, 222, 33, 1) 20%,\n  //   rgba(79, 220, 74, 1) 30%,\n  //   rgba(63, 218, 216, 1) 40%,\n  //   rgba(47, 201, 226, 1) 50%,\n  //   rgba(28, 127, 238, 1) 60%,\n  //   rgba(95, 21, 242, 1) 70%,\n  //   rgba(186, 12, 248, 1) 80%,\n  //   rgba(251, 7, 217, 1) 90%,\n  //   rgba(255, 0, 0, 1) 100%\n  // );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Ae),Ie=g.e.div(F||(F=Object(y.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 6px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),qe=g.e.div(M||(M=Object(y.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Pe=g.e.div(R||(R=Object(y.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Le=function(e){var t=e.farm,n=e.removed,c=e.cakePrice,r=e.bnbPrice,o=e.ethereum,s=e.account,i=(Object(f.a)(),Object(a.useState)(!1)),b=Object(k.a)(i,2),d=b[0],u=b[1],x=v.a.includes(t.tokenSymbol),p=t.lpSymbol.split(" ")[0].toLocaleLowerCase(),O=Object(a.useMemo)((function(){return t.lpTotalInQuoteToken?t.quoteTokenSymbol===h.b.BNB?r.times(t.lpTotalInQuoteToken):t.quoteTokenSymbol===h.b.CAKE?c.times(t.lpTotalInQuoteToken):t.lpTotalInQuoteToken:null}),[r,c,t.lpTotalInQuoteToken,t.quoteTokenSymbol]),m=O?"$".concat(Number(O).toLocaleString(void 0,{maximumFractionDigits:0})):"-",y=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("Gelato",""),g=(t.dual&&t.dual.earnLabel,t.apy&&t.apy.times(new l.a(100))),S=t.apy&&W({numberOfDays:1,farmApy:g,cakePrice:c}),C=t.apy&&W({numberOfDays:30,farmApy:g,cakePrice:c}),w=1e3/c.toNumber(),A=t.quoteTokenAdresses,B=t.quoteTokenSymbol,I=t.tokenAddresses,q=t.apy&&t.apy.times(new l.a(100)),P=X(q);return Object(T.jsxs)(Ie,{children:["GLTO-BNB ICLP"===t.lpSymbol&&Object(T.jsx)(Be,{}),Object(T.jsx)(ne,{lpLabel:y,multiplier:t.multiplier,isCommunityFarm:x,farmImage:p,tokenSymbol:t.tokenSymbol}),!n&&Object(T.jsxs)(j.n,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(j.B,{children:"APR (daily):"}),Object(T.jsx)(j.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(we,{lpLabel:y,quoteTokenAdresses:A,quoteTokenSymbol:B,tokenAddresses:I,cakePrice:c,apy:t.apy}),K({amountEarned:S,amountInvested:w}),"%"]}):Object(T.jsx)(j.z,{height:24,width:80})})]}),!n&&Object(T.jsxs)(j.n,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(j.B,{children:"APY (monthly):"}),Object(T.jsx)(j.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(we,{lpLabel:y,quoteTokenAdresses:A,quoteTokenSymbol:B,tokenAddresses:I,cakePrice:c,apy:t.apy}),K({amountEarned:C,amountInvested:w}),"%"]}):Object(T.jsx)(j.z,{height:24,width:80})})]}),!n&&Object(T.jsxs)(j.n,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(j.B,{children:"APR (yearly):"}),Object(T.jsx)(j.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apy?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(we,{lpLabel:y,quoteTokenAdresses:A,quoteTokenSymbol:B,tokenAddresses:I,cakePrice:c,apy:t.apy}),P,"%"]}):Object(T.jsx)(j.z,{height:24,width:80})})]}),Object(T.jsx)(ge,{farm:t,ethereum:o,account:s}),Object(T.jsx)(qe,{}),Object(T.jsx)(H,{onClick:function(){return u(!d)},expanded:d}),Object(T.jsx)(Pe,{expanded:d,children:Object(T.jsx)(_,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.lpAddresses[56]),totalValueFormated:m,lpLabel:y,quoteTokenAdresses:A,quoteTokenSymbol:B,tokenAddresses:I})})]})},Qe=n(53),De=function(){var e=Object(o.h)(),t=e.url,n=e.isExact,c=Object(f.a)();return Object(T.jsx)(Ee,{children:Object(T.jsxs)(j.f,{activeIndex:n?0:1,size:"sm",variant:"subtle",children:[Object(T.jsx)(j.g,{as:Qe.b,to:"".concat(t),children:c(999,"Active")}),Object(T.jsx)(j.g,{as:Qe.b,to:"".concat(t,"/history"),children:c(999,"Inactive")})]})})},Ee=g.e.div(V||(V=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),Ne=(Object(g.e)(j.i)(U||(U=Object(y.a)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n\n  "," {\n    margin: 0;\n    max-width: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Object(g.e)(j.o).attrs({size:"xl"})(G||(G=Object(y.a)(["\n  line-height: 44px;\n"]))),function(){Object(f.a)();var e=Object(p.c)(),t=Object(p.f)(),n=Object(p.g)(),c=(Object(a.useRef)(Number.MIN_VALUE),Object(a.useRef)(Number.MIN_VALUE)),r=function(){var t=e.filter((function(e){return"0X"!==e.multiplier}));return c.current=0,o(t),c.current.toLocaleString("en-US").slice(0,-1)},o=Object(a.useCallback)((function(e){e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var r=new l.a(0);return e.quoteTokenSymbol===h.b.BNB&&(r=t.times(e.lpTotalInQuoteToken)),e.quoteTokenSymbol===h.b.CAKE&&(r=n.times(e.lpTotalInQuoteToken)),c.current+=r.toNumber(),r}))}),[t,n]);return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:r()?Object(T.jsxs)(j.B,{mt:"16px",color:"secondary",mb:"10px",style:{textAlign:"center",background:"#2c2c2f",border:"1px solid gray",padding:10,borderRadius:3,color:"white",fontSize:20,lineHeight:"20px"},children:["TVL: $",r()]}):Object(T.jsx)(j.z,{animation:"pulse",variant:"rect",height:"44px"})})})}),ze=function(){var e=Object(o.h)().path,t=Object(f.a)(),n=Object(p.c)(),c=Object(p.g)(),i=Object(p.f)(),k=Object(b.j)(),y=k.account,g=k.ethereum,v=Object(s.b)(),S=Object(O.a)().fastRefresh;Object(a.useEffect)((function(){y&&v(Object(m.a)(y))}),[y,v,S]);var C=n.filter((function(e){return 0!==e.pid&&"0X"!==e.multiplier})),w=n.filter((function(e){return 0!==e.pid&&"0X"===e.multiplier})),A=Object(a.useCallback)((function(e,t){var a,o=new l.a((null===(a=n.find((function(e){return e.pid===d.c})))||void 0===a?void 0:a.tokenPriceVsQuote)||0);return e.map((function(e){if(!e.tokenAmount||!e.lpTotalInQuoteToken||!e.lpTotalInQuoteToken)return e;var t=d.b.times(e.poolWeight),n=t.times(d.a),c=o.times(n).div(e.lpTotalInQuoteToken);if(e.quoteTokenSymbol===h.b.BUSD||e.quoteTokenSymbol===h.b.UST)c=o.times(n).div(e.lpTotalInQuoteToken).times(i);else if(e.quoteTokenSymbol===h.b.CAKE)c=n.div(e.lpTotalInQuoteToken);else if(e.dual){var a=e&&o.times(t).times(d.a).div(e.lpTotalInQuoteToken),s=e.tokenPriceVsQuote&&new l.a(e.tokenPriceVsQuote).times(e.dual.rewardPerBlock).times(d.a).div(e.lpTotalInQuoteToken);c=a&&s&&a.plus(s)}return Object(r.a)(Object(r.a)({},e),{},{apy:c})})).map((function(e){return Object(T.jsx)(Le,{farm:e,removed:t,bnbPrice:i,cakePrice:c,ethereum:g,account:y},e.pid)}))}),[i,n,y,c,g]);return Object(T.jsxs)(x.a,{children:[Object(T.jsxs)(j.o,{as:"h1",size:"lg",color:"primary",mb:"20px",style:{textAlign:"center"},children:[t(999,"Stake ICLP tokens to earn Gelato"),Object(T.jsx)(Ne,{})]}),Object(T.jsx)(j.B,{style:{textAlign:"center"},mb:"20px",color:"#e901e9",children:t(9991,"\ud83d\udd25 FEES HARVEST: 10% TO BE BURNED \ud83d\udd25")}),Object(T.jsx)(j.B,{mt:"16px",color:"#e901e9",mb:"50px",style:{textAlign:"center"},children:t(9991,"\ud83c\udf89 \ud83c\udf66 IceCream Party! 4 rewards per block for the next 72 hours! \u23f3")}),Object(T.jsx)("div",{children:Object(T.jsxs)(u.a,{children:[Object(T.jsx)(o.b,{exact:!0,path:"".concat(e),children:A(C,!1)}),Object(T.jsx)(o.b,{exact:!0,path:"".concat(e,"/history"),children:A(w,!0)})]})}),Object(T.jsx)(De,{})]})}}}]);
//# sourceMappingURL=7.6fe13822.chunk.js.map