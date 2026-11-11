import { createHouse } from './house.js';

const paths = {
  casa:'M3 10 12 3l9 7v10H3z M9 20v-7h6v7', divisoes:'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  seguranca:'M12 22s7-4 7-10V5l-7-3-7 3v7c0 6 7 10 7 10z M9 12l2 2 4-4', energia:'m13 2-9 12h7l-1 8 10-12h-7z',
  atividade:'M4 5h16M4 12h16M4 19h16', luz:'M9 18h6m-5 3h4 M8 15c0-2-3-2-3-6a7 7 0 0 1 14 0c0 4-3 4-3 6z',
  temperatura:'M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z M12 10v6', porta:'M3 21h18M6 21V4h12v17M14 12h.01',
  estore:'M4 4h16v16H4zM4 8h16M4 12h16M4 16h16', noite:'M20 15a8 8 0 0 1-11-11 9 9 0 1 0 11 11z',
  camera:'M3 6h13v12H3zM16 10l5-3v10l-5-3', back:'m15 18-6-6 6-6', next:'m9 18 6-6-6-6',
  tv:'M3 5h18v12H3zM8 21h8m-4-4v4', agua:'M12 2c-2 5-7 8-7 13a7 7 0 1 0 14 0c0-5-5-8-7-13z',
  sol:'M12 4V2m0 20v-2M4 12H2m20 0h-2M6 6 4 4m16 16-2-2M6 18l-2 2M20 4l-2 2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0z',
  carro:'m3 13 2-6h14l2 6v5H3zM3 13h18M6 16h2m8 0h2M5 18v2m14-2v2',
  mais:'M5 12h.01M12 12h.01M19 12h.01', fullscreen:'M8 4H4v4m12-4h4v4M4 16v4h4m8 0h4v-4',
  reset:'M4 12a8 8 0 1 1 2 5M4 12V5m0 7h7', focus:'M8 4H4v4m12-4h4v4M4 16v4h4m8 0h4v-4M9 9h6v6H9z',
};
const icon = (name, size = 20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
const bubble = (name, tone = '') => `<span class="icon-bubble ${tone}">${icon(name)}</span>`;

const rooms = [
  {id:'sala',name:'Sala',icon:'casa'}, {id:'cozinha',name:'Cozinha',icon:'energia'},
  {id:'quarto',name:'Quarto',icon:'noite'}, {id:'entrada',name:'Entrada',icon:'porta'},
  {id:'escritorio',name:'Escritório',icon:'divisoes'}, {id:'exterior',name:'Jardim',icon:'agua'},
  {id:'garagem',name:'Garagem',icon:'carro'}, {id:'tecnica',name:'Lavandaria',icon:'temperatura'},
];
const devices = [
  {id:'rgb',name:'Luz ambiente',room:'sala',type:'switch',icon:'luz',initial:false},
  {id:'bancada',name:'Luz da bancada',room:'cozinha',type:'switch',icon:'luz',initial:false},
  {id:'exaustor',name:'Exaustor',room:'cozinha',type:'switch',icon:'atividade',initial:false},
  {id:'leitura',name:'Luz de leitura',room:'quarto',type:'switch',icon:'luz',initial:false},
  {id:'clima-quarto',name:'Ar condicionado do quarto',room:'quarto',type:'climate',icon:'temperatura',initial:false,min:16,max:28,target:22},
  {id:'presenca',name:'Iluminação automática',room:'entrada',type:'switch',icon:'seguranca',initial:false},
  {id:'secretaria',name:'Candeeiro de secretária',room:'escritorio',type:'switch',icon:'luz',initial:false},
  {id:'tomada',name:'Tomada da secretária',room:'escritorio',type:'switch',icon:'energia',initial:false},
  {id:'terraco',name:'Iluminação do terraço',room:'exterior',type:'switch',icon:'luz',initial:false},
  {id:'rega-auto',name:'Rega programada',room:'exterior',type:'switch',icon:'agua',initial:false},
  {id:'carregador',name:'Carregador elétrico',room:'garagem',type:'switch',icon:'energia',initial:false},
  {id:'portao-auto',name:'Fecho automático do portão',room:'garagem',type:'switch',icon:'seguranca',initial:false},
  {id:'solar',name:'Produção fotovoltaica',room:'tecnica',type:'switch',icon:'sol',initial:false},
  {id:'solar-prioridade',name:'Carregar com excedente solar',room:'tecnica',type:'switch',icon:'energia',initial:false},
  {id:'sala-luz',name:'Luz da sala',room:'sala',type:'switch',icon:'luz',initial:true},
  {id:'sala-estore',name:'Estore da sala',room:'sala',type:'cover',icon:'estore',initial:true},
  {id:'clima',name:'Ar condicionado',room:'sala',type:'climate',icon:'temperatura',initial:false,min:16,max:28,target:22},
  {id:'tv',name:'Televisão',room:'sala',type:'switch',icon:'tv',initial:false},
  {id:'cozinha-luz',name:'Luz da cozinha',room:'cozinha',type:'switch',icon:'luz',initial:true},
  {id:'quarto-luz',name:'Luz do quarto',room:'quarto',type:'switch',icon:'luz',initial:false},
  {id:'quarto-estore',name:'Estore do quarto',room:'quarto',type:'cover',icon:'estore',initial:true},
  {id:'entrada-luz',name:'Luz da entrada',room:'entrada',type:'switch',icon:'luz',initial:false},
  {id:'office-luz',name:'Luz do escritório',room:'escritorio',type:'switch',icon:'luz',initial:false},
  {id:'exterior-luz',name:'Luz do jardim',room:'exterior',type:'switch',icon:'luz',initial:false},
  {id:'rega',name:'Rega do jardim',room:'exterior',type:'switch',icon:'agua',initial:false},
  {id:'garagem-luz',name:'Luz da garagem',room:'garagem',type:'switch',icon:'luz',initial:false},
  {id:'portao',name:'Portão da garagem',room:'garagem',type:'cover',icon:'carro',initial:false},
  {id:'tecnica-luz',name:'Luz da lavandaria',room:'tecnica',type:'switch',icon:'luz',initial:false},
  {id:'agua-quente',name:'Termoacumulador',room:'tecnica',type:'climate',icon:'agua',initial:false,min:40,max:65,target:55},
];
const pages=[['casa','Casa','casa'],['divisoes','Divisões','divisoes'],['seguranca','Segurança','seguranca'],['energia','Energia','energia'],['mais','Mais','mais']];
const scenes=[
  {id:'morning',name:'Bom dia',icon:'sol',apply(values){Object.assign(values,{'quarto-estore':true,'sala-estore':true,'cozinha-luz':true});}},
  {id:'arrival',name:'Cheguei',icon:'casa',apply(values){Object.assign(values,{'entrada-luz':true,'sala-luz':true,'sala-estore':true});}},
  {id:'night',name:'Boa noite',icon:'noite',apply(values){
    for(const device of devices.filter(item=>item.icon==='luz'))values[device.id]=device.id==='quarto-luz';
    Object.assign(values,{'sala-estore':false,'quarto-estore':false,tv:false});
  }},
];
const quickIds=['sala-luz','sala-estore','portao','clima'];
const solarWatts=1460;
// The fixed clock makes the same charging example available at a trade show at any hour.
const demoTime='23:30';
const batteryLevel=62;
function chargingStatus(){
  if(!state.values.carregador)return 'Em pausa';
  const {chargeStart:start,chargeEnd:end,chargeLimit:limit}=state;
  const inside=start===end|| (start<end?demoTime>=start&&demoTime<end:demoTime>=start||demoTime<end);
  if(batteryLevel>=limit)return 'Limite atingido';
  if(state.values['solar-prioridade']&&watts()>=solarWatts)return 'À espera de excedente solar';
  return inside?'A carregar':'A aguardar o horário';
}
const baseline=()=>({
  mode:'home',scene:null,color:'#9875ff',chargeStart:'23:00',chargeEnd:'07:00',chargeLimit:80,door:false,events:[],cameraEvent:null,
  values:Object.fromEntries(devices.map(device=>[device.id,device.initial])),
  targets:Object.fromEntries(devices.filter(device=>device.target).map(device=>[device.id,device.target])),
});
let state=baseline();
let house;
let noticeTimer;
let gateTimer;
let cameraOpen=false;
const mobileView=document.querySelector('#mobile-view');
const shell=document.querySelector('.shell');
function showModel(show){
  shell.classList.toggle('show-model',show);
  mobileView.textContent=show?'Voltar à app':'Ver casa 3D';
  mobileView.setAttribute('aria-pressed',String(show));
}
mobileView.addEventListener('click',()=>showModel(!shell.classList.contains('show-model')));
const view=document.querySelector('#view');
const scroll=document.querySelector('#app-scroll');
const nav=document.querySelector('.app-nav');
const notice=document.querySelector('#security-notification');
const welcome=document.querySelector('#welcome');
const number=value=>new Intl.NumberFormat('pt-PT',{maximumFractionDigits:1}).format(value);
const modeName=()=>state.mode==='away'?'Ausente':'Em casa';
const lightCount=()=>devices.filter(device=>device.icon==='luz'&&state.values[device.id]).length;
const watts=()=>185+lightCount()*22+(state.values.clima?460+Math.max(0,24-state.targets.clima)*42:0)+(state.values['agua-quente']?1350:0)+(state.values.tv?85:0)+(state.values.rega?45:0);
const route=()=>{
  const [page,roomId]=location.hash.slice(1).split('/');
  return {page:[...pages.map(([id])=>id),'atividade'].includes(page)?page:'casa',room:rooms.find(item=>item.id===roomId)};
};
const heading=(title,copy='')=>`<header class="app-heading"><h1>${title}</h1>${copy?`<p>${copy}</p>`:''}</header>`;
const toggle=(id,name,active)=>`<button type="button" class="switch" role="switch" aria-label="${name}" aria-checked="${active}" data-toggle="${id}"><span aria-hidden="true"></span></button>`;
const stat=(image,label,value,tone='')=>`<div class="stat">${bubble(image,tone)}<div><strong>${value}</strong><small>${label}</small></div></div>`;
const row=(visual,title,detail,control='')=>`<div class="row">${visual}<div class="row-text"><strong>${title}</strong><span>${detail}</span></div>${control}</div>`;
function deviceRow(device,compact=false){
  const {id,name,type,icon:visual,min,max}=device;
  const active=state.values[id];
  const tone=visual==='luz'&&active?'warm':visual==='agua'&&active?'green':'';
  if(id==='portao-auto')return row(bubble(visual),name,active?'Fecha 7 s após abrir':'Desativado',toggle(id,name,active));
  if(id==='presenca')return row(bubble(visual),name,active?'Acende ao abrir a porta':'Desativada',toggle(id,name,active));
  if(id==='solar')return row(bubble('sol','green'),name,'Inversor · '+number(solarWatts/1000)+' kW');
  if(id==='rgb')return `<div class="equipment">${row(bubble(visual,tone),name,active?'Ligada':'Desligada',toggle(id,name,active))}
    <div class="color-options" role="group" aria-label="Cor da luz ambiente">${[['#ffc179','Âmbar'],['#9875ff','Lilás'],['#60caff','Azul'],['#ff739e','Rosa']].map(([color,label])=>`<button type="button" aria-label="${label}" aria-pressed="${state.color===color}" data-color="${color}" style="--swatch:${color}"></button>`).join('')}</div></div>`;
  if(id==='carregador')return `<div class="equipment">${row(bubble(visual),name,chargingStatus()+' · bateria '+batteryLevel+'%',toggle(id,name,active))}
    <div class="charge-options"><label>Início<input type="time" data-setting="chargeStart" value="${state.chargeStart}"></label><label>Fim<input type="time" data-setting="chargeEnd" value="${state.chargeEnd}"></label><label>Limite<select data-setting="chargeLimit">${[60,70,80,90,100].map(value=>`<option value="${value}" ${value===state.chargeLimit?'selected':''}>${value}%</option>`).join('')}</select></label></div><p class="charge-clock">Hora da simulação: ${demoTime}</p></div>`;
  if(type==='cover'){
    const verb=active?'Fechar':'Abrir';
    return row(bubble(visual),name,active?'Aberto':'Fechado',`<button class="action cover-action ${active?'close':'open'}" aria-label="${verb} ${name.toLowerCase()}" data-toggle="${id}">${verb}</button>`);
  }
  if(type==='climate'){
    const target=state.targets[id];
    const info=device.id==='agua-quente'?`49 °C no depósito · alvo ${target} °C`:`Alvo ${target} °C`;
    if(compact)return row(bubble(visual,tone),name,(active?'Ligado':'Desligado')+' · '+info,toggle(id,name,active));
    return `<div class="equipment">${row(bubble(visual,tone),name,(active?'Ligado':'Desligado')+' · '+info,toggle(id,name,active))}
      <div class="stepper"><span>Temperatura alvo</span><button class="action" aria-label="Diminuir ${name.toLowerCase()}" data-step="${id}:-1" ${target<=min?'disabled':''}>−</button><output>${target} °C</output><button class="action" aria-label="Aumentar ${name.toLowerCase()}" data-step="${id}:1" ${target>=max?'disabled':''}>+</button></div></div>`;
  }
  const detail=visual==='luz'||id==='tv'?active?'Ligada':'Desligada':active?'Em funcionamento':'Desligada';
  return row(bubble(visual,tone),name,detail,toggle(id,name,active));
}
const group=(list,compact=false)=>`<div class="group">${list.map(device=>deviceRow(device,compact)).join('')}</div>`;
const section=(title,body,action='')=>`<section class="app-section"><div class="section-title"><h2>${title}</h2>${action}</div>${body}</section>`;
const eventList=(events,empty)=>events.length?`<ul class="group events">${events.map(event=>`<li class="row">${bubble(event.alert?'seguranca':'atividade',event.alert?'warm':'')}<div class="row-text"><strong>${event.text}</strong><span>${event.alert?'Aviso simulado':event.kind}</span></div><time>${event.time}</time></li>`).join('')}</ul>`:`<p class="empty group">${empty}</p>`;
function home(){
  return `${heading('Casa')}
    <div class="group mode-control">${row(bubble('seguranca',state.mode==='away'?'warm':'green'),'Modo da casa',modeName(),toggle('away-mode','Modo Ausente',state.mode==='away'))}</div>
    ${section('Favoritos',group(quickIds.map(id=>devices.find(device=>device.id===id)),true),'<a class="text-link" href="#divisoes">Ver divisões</a>')}
    ${section('Cenários',`<div class="tiles scenes">${scenes.map(scene=>`<button class="tile scene" data-scene="${scene.id}" aria-pressed="${state.scene===scene.id}">${bubble(scene.icon,'lilac')}<strong>${scene.name}</strong></button>`).join('')}</div>`)}`;
}
function roomView(room){
  if(room)return `<a class="text-link back" href="#divisoes">${icon('back',16)} Divisões</a>${heading(room.name)}
    ${group(devices.filter(device=>device.room===room.id))}
    ${room.id==='exterior'||room.id==='entrada'?section('Vigilância','<a class="action" href="#seguranca">Abrir câmaras e sensores</a>'):''}`;
  return `${heading('Divisões','Escolhe uma divisão. A casa aproxima-se automaticamente.')}<div class="tiles">
    ${rooms.map(item=>{const count=devices.filter(device=>device.room===item.id).length;return `<a class="tile room" href="#divisoes/${item.id}">${bubble(item.icon)}<strong>${item.name}</strong><span>${count} ${count===1?'controlo':'controlos'}</span></a>`;}).join('')}
  </div>`;
}
function security(){
  const cameraMarkup=cameraOpen?`<div class="camera-preview"><img id="camera-frame" alt="Vista simulada da câmara do jardim"><span>Vista simulada</span></div>`:'';
  return `${heading('Segurança','Experimenta os sensores e a câmara da casa.')}
    ${section('Câmara do jardim',`<div class="group">${cameraMarkup}
      ${row(bubble('camera'),'Câmara exterior','Pré-visualização da maquete',`<button class="action" data-camera>${cameraOpen?'Ocultar':'Ver'}</button>`)}
      ${row(bubble('seguranca','warm'),'Movimento','Simula uma deteção', '<button class="action" data-event="motion">Simular</button>')}
    </div>`)}
    ${section('Entradas',`<div class="group">${row(bubble('porta'),'Porta da entrada',state.door?'Aberta':'Fechada',`<button class="action" data-event="door">${state.door?'Fechar':'Abrir'}</button>`)}${deviceRow(devices.find(device=>device.id==='portao'))}</div>`)}
    ${section('Avisos',eventList(state.events.filter(event=>event.alert),'Os avisos simulados aparecem aqui quando o modo Ausente está ativo.'),'<a class="text-link" href="#atividade">Atividade</a>')}`;
}
function energy(){
  const consumption=watts();
  const samples=[4.3,3.6,4.7,3.1,3.8,4.2,3.2];
  return `${heading('Energia','O consumo estimado muda quando utilizas os equipamentos.')}
    <div class="overview energy-overview">
      ${stat('sol','Produção solar',number(solarWatts/1000)+' kW','green')}
      ${stat('energia','Consumo',consumption+' W','warm')}
      ${stat('casa',consumption>solarWatts?'A importar':'A exportar',Math.abs(consumption-solarWatts)+' W')}
    </div>
    ${section('Últimos 7 dias',`<div class="group chart-panel"><p>Produção solar simulada · kWh</p><div class="chart">
      ${samples.map((value,i)=>`<div class="bar-col" aria-label="${number(value)} kWh"><span class="bar ${i===6?'today':''}" style="--height:${value/5*100}%" title="${number(value)} kWh"></span><span>${['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'][i]}</span></div>`).join('')}
    </div></div>`)}
    ${section('Equipamentos',group(devices.filter(device=>['clima','agua-quente','tv'].includes(device.id))))}`;
}
function more(){
  return `${heading('Mais')}
    ${section('Demonstração',`<div class="group">
      <a class="row menu-row" href="#atividade">${bubble('atividade')}<div class="row-text"><strong>Atividade</strong><span>Comandos, cenários e avisos</span></div>${icon('next',16)}</a>
      ${row(bubble('reset'),'Repor demonstração','Voltar ao estado inicial','<button class="action" data-reset>Repor</button>')}
    </div>`)}
    ${section('Equipamentos compatíveis','<div class="group info"><p>As funções disponíveis numa instalação dependem do modelo de cada equipamento e da compatibilidade com o sistema IntegroLink.</p><p>A produção solar representa a leitura de um inversor compatível. A rega representa o comando de uma zona num controlador compatível.</p><a class="text-link" href="https://integrolink.pt" target="_blank" rel="noopener">Visitar IntegroLink ↗</a></div>')}`;
}
function render(){
  const {page,room}=route();
  const active=page==='atividade'?'mais':page;
  for(const link of nav.querySelectorAll('a')) {
    if(link.dataset.page===active)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  }
  const screens={casa:home,divisoes:()=>roomView(room),seguranca:security,energia:energy,mais:more,
    atividade:()=>`<a class="text-link back" href="#mais">${icon('back',16)} Mais</a>`+heading('Atividade')+eventList(state.events,'Experimenta um comando para ver aqui a atividade desta sessão.')};
  const scrollTop=scroll.scrollTop;
  view.innerHTML=screens[page]();
  scroll.scrollTop=scrollTop;
  state.charging=chargingStatus()==='A carregar';
  house?.update(state,page==='divisoes'?room?.id||null:null);
  document.querySelector('#house-mode').textContent=modeName();
  document.querySelector('.house-mode').classList.toggle('armed',state.mode==='away');
  if(cameraOpen&&page==='seguranca'){
    const image=view.querySelector('#camera-frame');
    const frame=house?.capture();
    if(frame)image.src=frame;
    else image.replaceWith(document.createTextNode('Vista 3D indisponível neste navegador.'));
  }
}
function log(text,kind,alert=false){
  const time=new Intl.DateTimeFormat('pt-PT',{hour:'2-digit',minute:'2-digit'}).format(new Date());
  state.events=[{text,kind,alert,time},...state.events].slice(0,40);
  if(alert)notify(text);
}
function notify(text){
  const label=document.createElement('strong');
  const content=document.createElement('p');
  label.textContent='IntegroLink · Aviso simulado';
  content.textContent=text;
  notice.replaceChildren(label,content);
  notice.classList.add('visible');
  clearTimeout(noticeTimer);
  noticeTimer=setTimeout(()=>notice.classList.remove('visible'),1900);
}
function scheduleGateClose(){
  clearTimeout(gateTimer);
  if(!state.values.portao||!state.values['portao-auto'])return;
  gateTimer=setTimeout(()=>{
    toggleDevice('portao','auto');
    render();
  },7000);
}
function toggleDevice(id,source){
  const device=devices.find(item=>item.id===id);
  if(!device)return;
  const active=state.values[id]=!state.values[id];
  state.scene=null;
  if(id==='portao'||id==='portao-auto')scheduleGateClose();
  if(id==='presenca'&&active&&state.door)state.values['entrada-luz']=true;
  const alert=source==='house'&&device.icon==='luz'&&active&&state.mode==='away';
  const status=device.type==='cover'?(active?'aberto':'fechado'):(active?'ligado':'desligado');
  log(alert?device.name+' ligada durante a ausência':device.name+' · '+status,source==='house'?'Casa 3D':source==='auto'?'Automatização':'App',alert);
}
function simulate(event){
  if(event==='door'){
    state.door=!state.door;
    if(state.door&&state.values.presenca)state.values['entrada-luz']=true;
  }
  else state.cameraEvent=Date.now();
  const text=event==='motion'?'Movimento detetado no jardim':state.door?'Porta da entrada aberta':'Porta da entrada fechada';
  log(text,'Sensor simulado',state.mode==='away'&&(event==='motion'||state.door));
}
function reset(){
  clearTimeout(gateTimer);
  state=baseline();cameraOpen=false;showModel(false);
  clearTimeout(noticeTimer);notice.classList.remove('visible');
  house?.resetView();
  if(location.hash!=='#casa')location.hash='casa';
  scroll.scrollTop=0;
}
nav.innerHTML=pages.map(([id,label,visual])=>`<a href="#${id}" data-page="${id}">${icon(visual,20)}<span>${label}</span></a>`).join('');
const demoReset=document.querySelector('#demo-reset');
demoReset.innerHTML=icon('reset',18);
demoReset.addEventListener('click',()=>{reset();render();if(!welcome.open)welcome.showModal();});
const fullscreen=document.querySelector('#fullscreen');
fullscreen.innerHTML=icon('fullscreen');
fullscreen.hidden=!document.fullscreenEnabled;
fullscreen.addEventListener('click',async()=>{
  try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
  catch{fullscreen.hidden=true;}
});
document.querySelector('#house-overview').innerHTML=icon('focus',18);
house=createHouse({
  host:document.querySelector('#house-viewport'),labels:document.querySelector('#house-labels'),rooms,
  onRoom:id=>{location.hash='divisoes/'+id;showModel(false);},
  onDevice:id=>{toggleDevice(id,'house');render();},
  onDoor:()=>{simulate('door');render();},
  onCamera:()=>{showModel(false);cameraOpen=true;if(location.hash!=='#seguranca')location.hash='seguranca';render();},
});
document.querySelector('#house-overview').addEventListener('click',()=>{
  const current=route();
  if(current.page==='divisoes'&&current.room)location.hash='divisoes';
  house?.resetView();
});
document.querySelector('#house-zoom-in').addEventListener('click',()=>house?.zoom(1.22));
document.querySelector('#house-zoom-out').addEventListener('click',()=>house?.zoom(1/1.22));
view.addEventListener('click',event=>{
  const button=event.target.closest('button');
  if(!button)return;
  const {toggle:deviceId,scene,step,event:eventId,color}=button.dataset;
  if(deviceId==='away-mode'){
    state.mode=state.mode==='away'?'home':'away';
    log('Modo '+modeName().toLowerCase(),'Segurança');
  }else if(deviceId)toggleDevice(deviceId,'app');
  else if(color){
    state.color=color;state.values.rgb=true;state.scene=null;
  }else if(scene){
    const selected=scenes.find(item=>item.id===scene);
    if(state.scene===scene){
      state.scene=null;
      log(selected.name+' · desselecionado','Cenário');
    }else{
      selected.apply(state.values);state.scene=scene;
      log(selected.name,'Cenário');
    }
  }else if(step){
    const [id,delta]=step.split(':');
    const device=devices.find(item=>item.id===id);
    state.targets[id]=Math.max(device.min,Math.min(device.max,state.targets[id]+Number(delta)));
    log(device.name+' · alvo '+state.targets[id]+' °C','App');
  }else if(eventId)simulate(eventId);
  else if(button.hasAttribute('data-camera'))cameraOpen=!cameraOpen;
  else if(button.hasAttribute('data-reset'))reset();
  else return;
  const attr=Object.keys(button.dataset)[0];
  const value=button.dataset[attr];
  render();
  view.querySelector(`[data-${attr}="${value}"]`)?.focus({preventScroll:true});
});
view.addEventListener('change',event=>{
  const field=event.target;
  const key=field.dataset.setting;
  if(!key||!field.value)return;
  state[key]=key==='chargeLimit'?Number(field.value):field.value;
  log('Horário ou limite do carregador atualizado','App');
  render();
  view.querySelector(`[data-setting="${key}"]`)?.focus({preventScroll:true});
});
window.addEventListener('hashchange',()=>{scroll.scrollTop=0;render();});
document.addEventListener('fullscreenchange',()=>fullscreen.setAttribute('aria-label',document.fullscreenElement?'Sair do ecrã inteiro':'Ecrã inteiro'));
render();
welcome.showModal();

