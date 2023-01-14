import{_ as B,n as G,i as R,g as u,R as F,B as I,E as M,c as n,a as t,b as a,w as c,q as S,e as j,t as p,s as y,F as N,j as k,P as g,l as v,u as C,d as E,r as l,o as r,v as D,h as b,p as P,f as V}from"./index.2e563e42.js";const A={setup(){const o=G({}),d=D();async function h(){try{await k.getOneGoal(d.params.goalId)}catch(s){g.error(s.message),v.error(s)}}async function e(){try{await C.getRhythmsByGoalId(d.params.goalId)}catch(s){g.error(s.message),v.error(s)}}return R(()=>{h(),e()}),{editable:o,goal:u(()=>b.activeGoal),getRhythmsByGoalId:u(()=>b.rhythmsByGoalId)}},components:{RhythmForm:F,BeatForm:I,EditGoalForm:M}},m=o=>(P("data-v-48aba60c"),o=o(),V(),o),q={class:"container-fluid"},H={class:"row"},O=m(()=>t("h1",{class:"col-3 d-flex justify-content-start text-white",title:"Home"},[t("i",{class:"mdi mdi-home-circle-outline"})],-1)),z=m(()=>t("h1",{class:"col-3 d-flex justify-content-start text-white",title:"DailyRhythm"},[t("i",{class:"mdi mdi-bullseye-arrow"})],-1)),T=m(()=>t("div",{class:"col d-flex justify-content-end"},[t("h1",{class:"text-white",title:"Edit Goal"},[t("button",{"data-bs-toggle":"modal","data-bs-target":"#editGoalModal"},[t("i",{class:"mdi mdi-pencil-circle-outline"})])])],-1)),J={key:0,class:"row p-3 justify-content-evenly text-white text-shadow opaque-bg"},K={class:"col-10 text-center"},L={key:0},Q=E('<div class="col-5 text-center" data-v-48aba60c><h5 data-v-48aba60c>Rhythms</h5><div class="col d-flex justify-content-end" data-v-48aba60c><h3 class="text-white" title="Add New Rhythm" data-v-48aba60c><button data-bs-toggle="modal" data-bs-target="#RhythmModal" data-v-48aba60c><i class="mdi mdi-plus-circle-outline" data-v-48aba60c></i></button></h3></div></div><div class="col-5 text-center" data-v-48aba60c><h5 data-v-48aba60c>Beats</h5><div class="col d-flex justify-content-end" data-v-48aba60c><h3 class="text-white" title="Add New Beat" data-v-48aba60c><button data-bs-toggle="modal" data-bs-target="#BeatModal" data-v-48aba60c><i class="mdi mdi-plus-circle-outline" data-v-48aba60c></i></button></h3></div></div>',2);function U(o,d,h,e,s,W){const _=l("router-link"),f=l("EditGoalForm"),i=l("ModalComponent"),x=l("BeatForm"),w=l("RhythmForm");return r(),n(N,null,[t("div",q,[t("div",H,[a(_,{class:"col-1",to:{name:"Home"}},{default:c(()=>[O]),_:1}),a(_,{class:"col-1",to:{name:"DailyRhythmPage"}},{default:c(()=>[z]),_:1}),T]),e.goal?(r(),n("section",J,[t("div",K,[t("h3",null,[t("span",{class:S(["mdi",e.goal.icon])},null,2),j(p(e.goal.name),1)]),e.goal.description?(r(),n("p",L,p(e.goal.description),1)):y("",!0)]),Q])):y("",!0),a(i,{id:"editGoalModal"},{default:c(()=>[a(f)]),_:1})]),a(i,{id:"BeatModal"},{default:c(()=>[a(x)]),_:1}),a(i,{id:"RhythmModal"},{default:c(()=>[a(w)]),_:1})],64)}const Y=B(A,[["render",U],["__scopeId","data-v-48aba60c"]]);export{Y as default};
