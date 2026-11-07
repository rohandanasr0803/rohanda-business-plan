'use strict';

const phases = [
  {
    eyebrow:'PHASE 01 / MONTH 01 / DAYS 1–30',title:'Business diagnostic & commercial foundation',
    objective:'Understand the business, identify immediate opportunities and establish a practical commercial foundation.',
    milestone:'Commercial foundation established',
    weeks:[
      ['W01','Business & capability assessment','Review services, project credentials and management priorities.','Company/service assessment · Portfolio review · Stakeholder map · Immediate follow-ups'],
      ['W02','Client & pipeline assessment','Review existing clients, open proposals and commercial follow-ups.','Client opportunity map · Preliminary pipeline · Reactivation list · Sales-process review'],
      ['W03','Market & competitor intelligence','Research priority sectors, Saudi Arabia, Oman and potential partners.','Market intelligence · Competitor benchmark · Market priorities · Partnership shortlist'],
      ['W04','Strategic account activation','Segment accounts, map decision-makers and initiate tailored outreach.','Target account database · Engagement plan · Initial outreach report · Execution priorities']
    ]
  },
  {
    eyebrow:'PHASE 02 / MONTH 02 / DAYS 31–60',title:'Market activation & client acquisition',
    objective:'Turn market research and account mapping into relevant relationships and qualified opportunities.',
    milestone:'Qualified commercial pipeline developed',
    weeks:[
      ['W05','Target account engagement','Engage Tier 1 and Tier 2 accounts and schedule executive meetings.','Active account pipeline · Outreach tracker · Meeting schedule · Tailored presentations'],
      ['W06','Client discovery & qualification','Understand development pipelines, requirements and buying processes.','Meeting reports · Qualified lead register · Qualification assessments · Updated pipeline'],
      ['W07','Strategic partnership development','Explore complementary local and international consultancy relationships.','Partnership shortlist · Meeting reports · Joint opportunity register · Collaboration models'],
      ['W08','Opportunity & proposal development','Advance qualified opportunities and initiate suitable prequalifications.','Qualified pipeline · Prequalification submissions · Initial proposals · Engagement plans']
    ]
  },
  {
    eyebrow:'PHASE 03 / MONTH 03 / DAYS 61–90',title:'Opportunity conversion & commercial optimization',
    objective:'Move qualified opportunities toward proposals, negotiations and potential award while improving the commercial process.',
    milestone:'90-day assessment completed; 12-month growth roadmap defined',
    weeks:[
      ['W09','Commercial opportunity advancement','Refine requirements and develop project-specific propositions.','Advanced opportunity register · Updated propositions · Proposal tracker'],
      ['W10','Proposal & negotiation management','Manage submissions, clarifications, fee discussions and follow-up.','Proposal status report · Negotiation tracker · Weighted pipeline'],
      ['W11','Pipeline performance review','Analyze stalled and lost pursuits; reprioritize accounts.','Pipeline analysis · Win/loss review · Revised priorities · Improvement actions'],
      ['W12','Management review & forward planning','Review results, KPIs, forecasts and resources for the next period.','90-day report · Commercial forecast · Partnership progress · 12-month roadmap']
    ]
  }
];
let activePhase = 0;
function escapeHTML(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function renderPhase(i){
  activePhase=i;
  const p=phases[i];
  document.getElementById('phase-eyebrow').textContent=p.eyebrow;
  document.getElementById('phase-title').textContent=p.title;
  document.getElementById('phase-objective').textContent=p.objective;
  document.getElementById('phase-milestone-text').textContent=p.milestone;
  document.getElementById('weeks-grid').innerHTML=p.weeks.map(w=>`<article class="week-card"><span>${escapeHTML(w[0])}</span><h4>${escapeHTML(w[1])}</h4><p>${escapeHTML(w[2])}</p><button type="button" class="week-detail-toggle" aria-expanded="false">View deliverables +</button><div class="week-detail" hidden><strong>KEY DELIVERABLES</strong>${escapeHTML(w[3])}</div></article>`).join('');
  document.querySelectorAll('.phase-chip').forEach((button,n)=>{button.classList.toggle('is-active',n===i);button.setAttribute('aria-pressed',String(n===i));});
  document.getElementById('next-phase').innerHTML=i===2?'Return to phase 01 <span aria-hidden="true">↺</span>':'Next phase <span aria-hidden="true">→</span>';
  document.querySelectorAll('.week-detail-toggle').forEach(btn=>btn.addEventListener('click',()=>{const panel=btn.nextElementSibling;const open=panel.hidden;panel.hidden=!open;btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'Hide deliverables −':'View deliverables +';}));
}
document.querySelectorAll('.phase-chip').forEach(btn=>btn.addEventListener('click',()=>renderPhase(Number(btn.dataset.phase))));
document.getElementById('next-phase').addEventListener('click',()=>renderPhase((activePhase+1)%3));
renderPhase(0);

const markets = {
  saudi:{title:'Saudi Arabia',kicker:'SELECTED MARKET / 01',intro:'Priority focus areas include Riyadh, Jeddah and the Eastern Province, with relevance across residential, master-planned, commercial, mixed-use, hospitality and institutional developments.',stat:'3',statCaption:'Initial geographical areas for targeted account mapping',bullets:['Prospective research: ROSHN Group, Diriyah Company, Red Sea Global, New Murabba, National Housing Company and Jabal Omar.','Research project maturity and consultancy packages before developing tailored, sector-specific outreach.','Assess local licensing, registration, procurement and qualified partner routes before any formal pursuit.'],emphasis:'Market scale should not be confused with accessible consultancy fees. Commercial viability and delivery fit determine whether to pursue.'},
  oman:{title:'Oman',kicker:'SELECTED MARKET / 02',intro:'Initial assessment focuses on integrated communities, urban development, hospitality and tourism, mixed-use assets, institutional buildings and public realm.',stat:'4',statCaption:'Potential routes to market: direct, partner-based, joint pursuit and subconsultancy',bullets:['Prospective research: OMRAN Group, Al Mouj, Muriya, selected private developers and organizations linked to Sultan Haitham City.','Map active development phases, client stakeholders, consultancy packages and possible local partners.','Verify relevant registration, engineering consultancy rules and specific procurement requirements before bidding.'],emphasis:'Selectivity matters: commercial relevance, procurement accessibility and appropriate contracting arrangements must be established.'}
};
function renderMarket(key){
 const m=markets[key]; const container=document.getElementById('market-panel');
 container.setAttribute('aria-labelledby',key==='saudi'?'tab-saudi':'tab-oman');
 container.innerHTML=`<div><span class="market-kicker">${m.kicker}</span><h3>${m.title}</h3><p>${m.intro}</p><div class="market-stat"><strong>${m.stat}</strong><small>${m.statCaption}</small></div><p>${m.emphasis}</p></div><div><span class="market-kicker">COMMERCIAL APPROACH</span><ul>${m.bullets.map(b=>`<li>${escapeHTML(b)}</li>`).join('')}</ul></div>`;
 document.querySelectorAll('.market-tab').forEach(b=>{const selected=b.dataset.market===key;b.classList.toggle('selected',selected);b.setAttribute('aria-selected',String(selected));});
}
document.querySelectorAll('.market-tab').forEach(b=>b.addEventListener('click',()=>renderMarket(b.dataset.market)));
renderMarket('saudi');

const pipeline=[
 ['01','Market mapping','Account & project research'],['02','Lead generation','Relevant prospect access'],['03','Qualification','Commercial and technical fit'],['04','Client discovery','Requirements & buying process'],['05','Opportunity development','Tailored service proposition'],['06','Prequalification / RFP','Compliant submission'],['07','Proposal & negotiation','Commercial agreement'],['08','Award & handover','Contract and delivery transition'],['09','Account development','Repeat-business growth']
];
document.getElementById('pipeline').innerHTML=pipeline.map(p=>`<div class="pipeline-step"><span class="step-id">STAGE ${p[0]}</span><strong>${p[1]}</strong><small>${p[2]}</small></div>`).join('');

const criteria=[
 ['Strategic fit with DCI PLUS',20],['Decision-maker accessibility',15],['Project maturity & timing',15],['Technical & delivery fit',15],['Consultancy fee potential',15],['Competitive positioning',10],['Commercial & payment risk',10]
];
let ratings=[3,3,3,3,3,3,3];
document.getElementById('score-criteria').innerHTML=criteria.map(([label,weight],i)=>`<div class="criterion"><label for="criterion-${i}">${escapeHTML(label)}</label><div class="criterion-range"><input id="criterion-${i}" type="range" min="0" max="5" step="1" value="3" data-criterion="${i}" aria-label="${escapeHTML(label)} score from 0 to 5"><span class="rating" id="criterion-rating-${i}">3/5</span></div><span class="weight">${weight}%</span></div>`).join('');
function updateScore(){const score=Math.round(criteria.reduce((sum,c,i)=>sum+ratings[i]/5*c[1],0));document.getElementById('score-output').textContent=score+'%';document.getElementById('score-fill').style.width=score+'%';document.getElementById('score-status').textContent=score>=70?'Priority consideration — subject to review':'Below initial 70% prioritization guideline';}
document.querySelectorAll('[data-criterion]').forEach(el=>el.addEventListener('input',()=>{const i=Number(el.dataset.criterion);ratings[i]=Number(el.value);document.getElementById('criterion-rating-'+i).textContent=el.value+'/5';updateScore();}));updateScore();

const menuButton=document.getElementById('menu-toggle');const mobileNav=document.getElementById('mobile-nav');
menuButton.addEventListener('click',()=>{const willOpen=mobileNav.hidden;mobileNav.hidden=!willOpen;menuButton.setAttribute('aria-expanded',String(willOpen));menuButton.setAttribute('aria-label',willOpen?'Close navigation':'Open navigation');});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');}));

const previewButton=document.getElementById('preview-open');const previewWrap=document.getElementById('pdf-panel-wrap');const iframe=document.getElementById('pdf-frame');
previewButton.addEventListener('click',()=>{previewWrap.hidden=false;if(!iframe.src)iframe.src=iframe.dataset.src;previewWrap.scrollIntoView({behavior:'smooth',block:'start'});});
document.getElementById('pdf-close').addEventListener('click',()=>{previewWrap.hidden=true;previewButton.focus();});
