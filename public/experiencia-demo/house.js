import * as THREE from './vendor/three.module.js';

const layout = {
  sala:{x:-4,z:2.3,w:3.85,d:4.05,color:0xdccab1},
  cozinha:{x:-4,z:-2.3,w:3.85,d:4.05,color:0xd9e2df},
  quarto:{x:0,z:-2.3,w:3.85,d:4.05,color:0xdfcfe2},
  entrada:{x:0,z:2.3,w:3.85,d:4.05,color:0xe4ded1},
  escritorio:{x:4,z:-2.3,w:3.85,d:4.05,color:0xd5dfec},
  exterior:{x:4,z:2.3,w:3.85,d:4.05,color:0x859b80},
  garagem:{x:8,z:-2.3,w:3.85,d:4.05,color:0x9ba3a6},
  tecnica:{x:8,z:2.3,w:3.85,d:4.05,color:0xc6c2b7},
};
const lightIds={
  sala:'sala-luz',cozinha:'cozinha-luz',quarto:'quarto-luz',
  entrada:'entrada-luz',escritorio:'office-luz',exterior:'exterior-luz',garagem:'garagem-luz',tecnica:'tecnica-luz',
};

export function createHouse({host,labels,rooms,onRoom,onDevice,onDoor,onCamera}){
  let renderer;
  try {
    renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,powerPreference:'low-power'});
  }catch{
    document.querySelector('#house-loading').textContent='A vista 3D precisa de WebGL neste navegador. Podes experimentar todos os controlos na app.';
    return {update(){},resetView(){},zoom(){},capture(){return null;}};
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.07;
  renderer.setClearColor(0x000000,0);
  renderer.domElement.setAttribute('aria-label','Casa 3D interativa. Usa os botões de divisão e luz para explorar.');
  host.prepend(renderer.domElement);
  document.querySelector('#house-loading').hidden=true;

  const scene=new THREE.Scene();
  const camera=new THREE.OrthographicCamera(-10,10,8,-8,.1,100);
  const target=new THREE.Vector3(2,0,0);
  const desiredTarget=new THREE.Vector3(2,0,0);
  const offset=new THREE.Vector3();
  const initialYaw=.62;
  const initialPitch=.95;
  let yaw=initialYaw,pitch=initialPitch,desiredYaw=initialYaw,desiredPitch=initialPitch;
  const overviewZoom=1;
  let desiredZoom=1;
  let focused=null;
  let snapshot=null;
  let lastTime=0;
  let renderUntil=0;
  const wake=()=>{renderUntil=performance.now()+3500;};
  const ambient=new THREE.HemisphereLight(0xe1ebff,0x615b52,1.75);
  scene.add(ambient);
  const sun=new THREE.DirectionalLight(0xfff4db,2.1);
  sun.position.set(-8,15,9);
  sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);
  Object.assign(sun.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:.1,far:45});
  sun.shadow.bias=-.0005;
  scene.add(sun);

  const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.8,...extra});
  const white=material(0xece7de);
  const wood=material(0x947759);
  const dark=material(0x273c49);
  const brass=material(0xae8e50,{metalness:.4,roughness:.5});
  function surfaceTexture(style){
    const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
    const ctx=canvas.getContext('2d');
    let seed=41;
    const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
    ctx.fillStyle='#eae9e4';ctx.fillRect(0,0,256,256);
    const wood=style==='wood';
    for(let y=0;y<256;y+=wood?22:64){
      for(let x=0;x<256;x+=wood?128:64){
        const shade=216+Math.floor(random()*28);
        ctx.fillStyle='rgb('+shade+','+shade+','+shade+')';
        ctx.fillRect(x,y,(wood?128:64)-1,(wood?22:64)-1);
      }
    }
    for(let i=0;i<1800;i++){
      ctx.fillStyle=i%2?'#39332618':'#ffffff35';
      ctx.fillRect(random()*256,random()*256,wood?random()*32+2:1.5,1);
    }
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
    return texture;
  }
  const oakMap=surfaceTexture('wood'),tileMap=surfaceTexture('stone');
  const geometries=new Map();
  function box(parent,w,h,d,x,y,z,mat){
    const key=[w,h,d].join(',');
    if(!geometries.has(key))geometries.set(key,new THREE.BoxGeometry(w,h,d));
    const mesh=new THREE.Mesh(geometries.get(key),mat);
    mesh.position.set(x,y,z);
    mesh.castShadow=true;
    mesh.receiveShadow=true;
    parent.add(mesh);
    return mesh;
  }
  function roundBox(parent,w,h,d,x,y,z,mat,r=.08){
    const shape=new THREE.Shape();
    const a=-w/2,b=-d/2;
    shape.moveTo(a+r,b);
    shape.lineTo(a+w-r,b);shape.quadraticCurveTo(a+w,b,a+w,b+r);
    shape.lineTo(a+w,b+d-r);shape.quadraticCurveTo(a+w,b+d,a+w-r,b+d);
    shape.lineTo(a+r,b+d);shape.quadraticCurveTo(a,b+d,a,b+d-r);
    shape.lineTo(a,b+r);shape.quadraticCurveTo(a,b,a+r,b);
    const geo=new THREE.ExtrudeGeometry(shape,{depth:h,bevelEnabled:false,curveSegments:5,steps:1});
    geo.rotateX(-Math.PI/2);
    const mesh=new THREE.Mesh(geo,mat);
    mesh.position.set(x,y-h/2,z);
    mesh.castShadow=mesh.receiveShadow=true;
    parent.add(mesh);
    return mesh;
  }
  function cylinder(parent,r,h,x,y,z,mat){
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,18),mat);
    mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);
    return mesh;
  }
  const house=new THREE.Group();
  scene.add(house);
  roundBox(scene,17.25,.28,9.45,2,-.28,0,material(0xe0dcd4),.08);
  roundBox(scene,19.15,.12,11.1,2,-.52,0,material(0x88978f),.17);
  const paving=material(0x9b9fa0,{map:tileMap});
  box(scene,4.05,.04,1.05,8,-.18,-4.87,paving);
  box(scene,1.5,.04,1.03,0,-.18,4.83,paving);
  const floorTargets=[];
  const lights=[];
  const shutters=[];
  const overlays=[];
  const mats=[];
  const markers=[];

  function marker(room,kind,position,label,id){
    const button=document.createElement('button');
    button.type='button';
    button.className='model-marker '+kind;
    button.dataset.room=room;
    button.setAttribute('aria-label',label);
    button.title=label;
    if(id)button.dataset.device=id;
    button.textContent=kind==='room-label'?label:kind==='door-marker'?'↗':kind==='camera-marker'?'◉':kind==='device-marker'?(id==='rega'?'◒':'↕'):'☀';
    button.addEventListener('click',event=>{
      event.stopPropagation();
      if(kind==='room-label')onRoom(room);
      else if(kind==='door-marker')onDoor();
      else if(kind==='camera-marker')onCamera();
      else onDevice(id);
    });
    labels.append(button);
    markers.push({button,room,kind,position:new THREE.Vector3(...position)});
    return button;
  }
  for(const room of rooms){
    const area=layout[room.id];
    const group=new THREE.Group();
    group.position.set(area.x,0,area.z);
    house.add(group);
    const map=['sala','quarto','escritorio'].includes(room.id)?oakMap:tileMap;
    const floorMaterial=material(area.color,{map});
    const floor=box(group,area.w,.12,area.d,0,-.06,0,floorMaterial);
    mats.push({room:room.id,floor:floorMaterial,base:new THREE.Color(area.color)});
    floor.userData.room=room.id;
    floorTargets.push(floor);
    const wash=new THREE.Mesh(
      new THREE.PlaneGeometry(area.w-.08,area.d-.08),
      new THREE.MeshBasicMaterial({color:0xffcc70,transparent:true,opacity:0,depthWrite:false}),
    );
    wash.rotation.x=-Math.PI/2;wash.position.y=.012;group.add(wash);
    overlays.push({room:room.id,mesh:wash});
    if(room.id!=='exterior'){
      const backHeight=room.id==='garagem'?.52:1.13;
      box(group,area.w,backHeight,.14,0,backHeight/2,-area.d/2,white);
      box(group,.14,.58,area.d,-area.w/2,.29,0,white);
      box(group,area.w,.04,.035,0,.04,-area.d/2+.085,wood);
    }else{
      const slats=material(0x84745e);
      box(group,2.4,.06,2.25,-.55,.03,-.35,material(0xab9578,{map:oakMap}));
      for(let z=-1.3;z<.7;z+=.22)box(group,2.4,.012,.015,-.55,.065,z,slats);
      box(group,area.w,.26,.13,0,.13,area.d/2,material(0x9eaea0));
    }
    const lampMat=material(0xe2d2b0,{emissive:0xffc35b,emissiveIntensity:0});
    cylinder(group,.15,.08,1.35,1.15,-1.3,lampMat);
    cylinder(group,.025,1.05,1.35,.57,-1.3,brass);
    cylinder(group,.23,.05,1.35,.035,-1.3,dark);
    const point=new THREE.PointLight(0xffc979,0,5,2);
    point.position.set(.25,1.25,-.1);
    group.add(point);
    lights.push({room:room.id,id:lightIds[room.id],lamp:lampMat,point});
    marker(room.id,'light-marker',[area.x+1.35,1.45,area.z-1.3],'Ligar '+room.name,lightIds[room.id]);
    marker(room.id,'room-label',[area.x,.08,area.z+1.65],room.name);
  }
  // Rear elevation and side returns are kept below the camera sightline.
  const limestone=material(0xd4cbbd,{map:tileMap,roughness:.88});
  const aluminium=material(0x333836,{metalness:.35,roughness:.52});
  const glazing=new THREE.MeshPhysicalMaterial({
    color:0xb6c7c7,transparent:true,opacity:.28,roughness:.18,depthWrite:false,
  });
  box(house,16.12,.16,.27,2,.065,-4.61,limestone);
  for(const x of [-4,0,4]){
    const z=-4.53;
    box(house,3.94,.09,.28,x,1.15,z,limestone);
    box(house,3.44,.055,.14,x,2.09,z,aluminium);
    box(house,3.34,.86,.022,x,1.64,z,glazing);
    for(const offset of [-1.69,-.56,.56,1.69]){
      box(house,.054,.94,.13,x+offset,1.64,z,aluminium);
    }
    box(house,.20,1.04,.2,x-1.88,1.69,z,white);
    box(house,.20,1.04,.2,x+1.88,1.69,z,white);
  }
  box(house,12.02,.17,.30,0,2.23,-4.56,white);
  box(house,.18,.12,9.16,-6.04,.055,0,limestone);
  box(house,3.35,.10,1.18,.0,-.025,5.05,limestone);
  box(house,2.95,.075,.38,0,-.09,5.8,limestone);
  const screenOak=material(0x897255,{map:oakMap,roughness:.77});
  for(let index=0;index<9;index++){
    box(house,.055,1.53,.085,5.79, .80,2.5+index*.14,screenOak);
  }
  box(house,.095,.06,1.29,5.79,1.57,3.06,screenOak);

  // Living room.
  const sofa=material(0x8c8a82),cushion=material(0xc4baaa);
  roundBox(house,2.7,.42,1,-4.25,.36,1.25,sofa);
  roundBox(house,2.7,.57,.2,-4.25,.73,.86,sofa);
  roundBox(house,.2,.55,1,-5.55,.63,1.25,sofa);
  roundBox(house,.2,.55,1,-2.95,.63,1.25,sofa);
  for(const x of [-4.95,-4.25,-3.55])roundBox(house,.63,.13,.72,x,.62,1.35,cushion);
  roundBox(house,2.6,.025,1.7,-4,.06,3.0,material(0xe9e2d5));
  roundBox(house,1.35,.12,.7,-4,.49,2.8,wood);
  for(const x of [-4.5,-3.5])box(house,.08,.38,.08,x,.25,2.8,dark);
  cylinder(house,.09,.11,-3.8,.62,2.8,white);
  const tvScreen=material(0x18232d,{emissive:0x5996d6,emissiveIntensity:0,roughness:.27});
  roundBox(house,1.85,.11,.36,-4.1,.43,3.9,wood,.05);
  box(house,1.4,.73,.07,-4.1,.85,3.99,dark);
  const screenCanvas=document.createElement('canvas');
  screenCanvas.width=256;screenCanvas.height=128;
  const screenContext=screenCanvas.getContext('2d');
  const screenTexture=new THREE.CanvasTexture(screenCanvas);
  screenTexture.colorSpace=THREE.SRGBColorSpace;
  tvScreen.emissiveMap=screenTexture;
  tvScreen.emissive.set(0xffffff);
  box(house,1.29,.62,.035,-4.1,.85,3.94,tvScreen);
  function drawTelevision(time){
    const phase=time/5000*Math.PI*2;
    const sky=screenContext.createLinearGradient(0,0,0,128);
    sky.addColorStop(0,'#254e87');sky.addColorStop(.53,'#f3b082');sky.addColorStop(.54,'#457b91');sky.addColorStop(1,'#193f60');
    screenContext.fillStyle=sky;screenContext.fillRect(0,0,256,128);
    screenContext.fillStyle='#ffe7a6';screenContext.beginPath();
    screenContext.arc(162,49,16,0,Math.PI*2);screenContext.fill();
    for(let index=0;index<7;index++){
      const y=72+index*8;
      screenContext.fillStyle=index%2?'#81acc3':'#a0c4cc';
      screenContext.fillRect(92+Math.sin(phase+index)*23,y,68+index*7,2);
    }
    screenContext.fillStyle='#26364b';screenContext.beginPath();
    screenContext.moveTo(0,88);screenContext.lineTo(42,63);screenContext.lineTo(91,89);
    screenContext.lineTo(52,112);screenContext.lineTo(0,122);screenContext.fill();
    screenTexture.needsUpdate=true;
  }
  roundBox(house,1.24,.25,.24,-3.6,1.44,.32,white,.04);
  box(house,1.01,.022,.028,-3.6,1.37,.445,dark);
  const acLamp=material(0x557d8a,{emissive:0x67cbe2,emissiveIntensity:0});
  box(house,.05,.025,.02,-3.15,1.43,.45,acLamp);
  const indicators=[
    {id:'clima',at:[-3.6,1.25,.58],color:0x72bfff,light:true},
    {id:'clima-quarto',at:[.9,1.30,-4.31],color:0x72bfff,light:true},
    {id:'rgb',at:[-5.55,.33,1.15],color:0x9875ff,light:true},
    {id:'bancada',at:[-4.5,1.06,-3.56],color:0xffca82,light:true},
    {id:'exaustor',at:[-5,1.42,-3.78],color:0xffcf98},
    {id:'leitura',at:[-1.55,.66,-3.26],color:0xffca82,light:true},
    {id:'secretaria',at:[4.8,.89,-3.18],color:0xffcf98,light:true},
    {id:'tomada',at:[5,.34,-3.48],color:0x68cda1},
    {id:'terraco',at:[5.6,.47,3.68],color:0xffca82,light:true},
  ].map(({id,at,color,light})=>{
    const surface=material(0x575e61,{emissive:color,emissiveIntensity:0});
    box(house,id.startsWith('clima')?.8:.16,.055,.075,...at,surface);
    const point=light?new THREE.PointLight(color,0,3):null;
    if(point){point.position.set(...at);house.add(point);}
    return {id,surface,point};
  });
  const linen=material(0xd1c6b6,{roughness:.96});
  for(const x of [-5.28,-3.18]){
    const pillow=roundBox(house,.36,.32,.17,x,.82,1.05,linen,.055);
    pillow.rotation.z=x<-4?.14:-.17;
  }
  box(house,.43,.035,.31,-4.28,.57,2.81,material(0x575c51));
  box(house,.37,.027,.26,-4.28,.6,2.81,material(0xb2a28b));

  // Kitchen and dining table.
  box(house,2.9,.8,.65,-4.25,.4,-3.78,material(0x4b5650));
  box(house,2.95,.09,.7,-4.25,.85,-3.78,white);
  for(const x of [-5.25,-4.25,-3.25])box(house,.014,.65,.02,x,.42,-3.44,brass);
  for(const x of [-5.45,-4.5,-3.55]){
    box(house,.26,.034,.048,x,.68,-3.425,aluminium);
  }
  box(house,.55,.01,.4,-5,.91,-3.78,dark);
  cylinder(house,.023,.28,-3.54,1.04,-4.02,aluminium);
  box(house,.045,.045,.18,-3.54,1.18,-3.96,aluminium);
  box(house,.65,.01,.4,-3.5,.91,-3.78,material(0xa2b4b4));
  roundBox(house,1.65,.12,.8,-4.15,.82,-1.9,wood);
  for(const x of [-4.8,-3.5])for(const z of [-2.15,-1.65])box(house,.07,.7,.07,x,.4,z,dark);
  for(const x of [-4.7,-3.6]){
    roundBox(house,.5,.1,.45,x,.45,-1.22,material(0xd4b484));
    box(house,.5,.5,.07,x,.7,-1.0,material(0xd4b484));
  }
  // Bedroom.
  roundBox(house,2.35,.38,2.9,-.15,.25,-2.35,wood);
  roundBox(house,2.2,.3,2.65,-.15,.6,-2.25,material(0xf1e9dc));
  box(house,2.45,.85,.14,-.15,.5,-3.85,material(0x77695d));
  roundBox(house,2.21,.05,1.65,-.15,.78,-1.75,material(0x938777));
  for(const x of [-.72,.42])roundBox(house,.9,.13,.57,x,.82,-3.05,white);
  box(house,.44,.43,.44,-1.65,.22,-3.4,wood);
  // Entrance console and coat hooks.
  roundBox(house,2,.1,.48,0,.7,1,wood);
  box(house,.08,.65,.4,-.9,.33,1,wood);box(house,.08,.65,.4,.9,.33,1,wood);
  roundBox(house,1.6,.025,1.5,0,.025,2.7,material(0xc2b49f));
  const door=new THREE.Group();door.position.set(-.57,0,4.28);house.add(door);
  box(door,1.12,1.6,.08,.56,.8,0,material(0x516575));
  cylinder(door,.035,.1,.95,.83,.08,brass).rotation.x=Math.PI/2;
  marker('entrada','door-marker',[0,1.7,4.35],'Abrir porta da entrada');
  // Office.
  roundBox(house,2.55,.12,.85,4,.8,-3.35,wood);
  for(const x of [2.9,5.1])box(house,.07,.75,.65,x,.4,-3.35,dark);
  box(house,.9,.62,.06,4,1.22,-3.55,dark);
  box(house,.07,.2,.1,4,.85,-3.55,dark);
  roundBox(house,.75,.04,.27,4,.88,-3.15,material(0xc7d0d5));
  cylinder(house,.37,.12,4,.5,-2.05,material(0x55718e));
  box(house,.75,.65,.12,4,.77,-1.8,material(0x55718e));
  cylinder(house,.045,.45,4,.24,-2.05,dark);
  // Terrace.
  cylinder(house,.68,.1,3.65,.69,2.25,wood);
  cylinder(house,.08,.65,3.65,.35,2.25,dark);
  for(const x of [2.7,4.6]){
    roundBox(house,.55,.12,.6,x,.39,2.25,material(0x6f8d7a));
    box(house,.55,.5,.1,x,.62,2.62,material(0x6f8d7a));
  }
  function plant(x,z,r=.3){
    cylinder(house,r,.45,x,.23,z,material(0xbf9f7e));
    cylinder(house,.03,.75,x,.7,z,wood);
    const crown=new THREE.Mesh(new THREE.SphereGeometry(r*1.55,12,8),material(0x577d5a));
    crown.position.set(x,1.0,z);crown.scale.y=1.25;crown.castShadow=true;house.add(crown);
  }
  plant(5.35,3.6,.31);plant(-5.5,3.7,.22);plant(5.4,-1.05,.2);
  plant(5.63,1.25,.23);plant(4.92,3.67,.22);plant(2.43,3.65,.22);

  // Garage, service area and rooftop photovoltaic array.
  const garageFrame=material(0xa1a8ad,{metalness:.35,roughness:.62});
  for(const x of [6.27,9.73])box(house,.16,2.05,.17,x,1.01,-4.3,garageFrame);
  box(house,3.58,.16,.23,8,2.04,-4.3,garageFrame);
  const gate=box(house,3.3,1.82,.12,8,1,-4.35,material(0x68727a,{map:tileMap,metalness:.2}));
  const carBody=material(0x606b72,{metalness:.48,roughness:.33});
  const carGlass=material(0x293842,{metalness:.35,roughness:.22});
  roundBox(house,1.65,.44,2.7,8,.43,-2.2,carBody,.27);
  roundBox(house,1.29,.47,1.42,8,.78,-2.13,carGlass,.18);
  for(const x of [7.19,8.81])for(const z of [-3.04,-1.34]){
    cylinder(house,.24,.12,x,.28,z,dark).rotation.z=Math.PI/2;
    cylinder(house,.115,.13,x,.28,z,garageFrame).rotation.z=Math.PI/2;
  }
  for(const x of [7.4,8.6]){
    box(house,.24,.08,.035,x,.43,-3.55,white);
    box(house,.24,.07,.035,x,.44,-.86,material(0x95362d));
  }
  // Wallbox and tethered cable on the passenger side of the car.
  box(house,.13,1.32,.2,9.51,.66,-2.67,garageFrame);
  roundBox(house,.32,.48,.17,9.51,1.14,-2.55,white,.055);
  roundBox(house,.22,.27,.045,9.51,1.18,-2.445,dark,.04);
  const chargeLED=material(0x374b60,{emissive:0x55baff,emissiveIntensity:0});
  box(house,.16,.044,.025,9.51,1.19,-2.413,chargeLED);
  const chargeLight=new THREE.PointLight(0x459aff,0,2);
  chargeLight.position.set(9.49,1.17,-2.35);
  house.add(chargeLight);
  const cablePath=new THREE.CatmullRomCurve3([
    [9.51,.93,-2.49],[9.48,.4,-2.42],[9.32,.19,-2.18],[9.04,.26,-1.91],[8.82,.54,-1.84],
  ].map(point=>new THREE.Vector3(...point)));
  house.add(new THREE.Mesh(new THREE.TubeGeometry(cablePath,24,.027,8,false),dark));
  box(house,.12,.065,.085,8.83,.54,-1.84,dark);
  marker('garagem','device-marker',[8,2.28,-4.3],'Abrir portão da garagem','portao');
  for(const x of [6.48,9.52])box(house,.12,2.15,.12,x,1.075,3.94,white);
  box(house,3.4,.12,1.24,8,2.12,3.75,material(0x8a8781));
  const panelMaterial=material(0x20384d,{metalness:.5,roughness:.35,emissive:0x32aaff,emissiveIntensity:0});
  const panelLines=material(0x829bad,{metalness:.35,roughness:.55});
  for(const x of [6.96,8,9.04]){
    const panel=new THREE.Group();
    panel.position.set(x,2.28,3.76);panel.rotation.x=-.19;house.add(panel);
    box(panel,1,.07,1.02,0,0,0,panelMaterial);
    for(const dz of [-.49,-.24,0,.24,.49])box(panel,1,.008,.013,0,.04,dz,panelLines);
    for(const dx of [-.49,-.25,0,.25,.49])box(panel,.012,.008,1.01,dx,.04,0,panelLines);
  }
  roundBox(house,.72,.9,.67,6.67,.45,1.01,white,.05);
  cylinder(house,.245,.043,6.67,.46,1.355,dark).rotation.x=Math.PI/2;
  cylinder(house,.35,1.23,9.22,.78,1.2,material(0xd2d6d4,{roughness:.45}));
  const heaterLamp=material(0x6c7e85,{emissive:0xffb142,emissiveIntensity:0});
  const inverterLED=material(0x3d6964,{emissive:0x64ffbc,emissiveIntensity:0});
  roundBox(house,.32,.47,.15,9.1,.92,3.58,white,.04);
  box(house,.16,.035,.025,9.1,.96,3.67,inverterLED);
  box(house,.09,.04,.02,9.22,.8,1.56,heaterLamp);
  roundBox(house,1.55,.12,.48,7.8,.85,1,wood,.045);
  const cameraBody=material(0xdee2e5);
  box(house,.075,1.53,.075,5.92,.765,.45,dark);
  const cameraDevice=roundBox(house,.32,.16,.23,5.84,1.58,.54,cameraBody,.04);
  cameraDevice.rotation.y=.35;
  marker('exterior','camera-marker',[5.84,1.88,.54],'Ver câmara do jardim');
  cylinder(house,.12,.08,4.86,.07,3.01,dark);
  marker('exterior','device-marker',[4.86,.4,3.01],'Ligar rega do jardim','rega');
  const dropsCount=66;
  const dropsPositions=new Float32Array(dropsCount*3);
  const dropsGeometry=new THREE.BufferGeometry();
  dropsGeometry.setAttribute('position',new THREE.BufferAttribute(dropsPositions,3));
  const drops=new THREE.Points(dropsGeometry,new THREE.PointsMaterial({color:0x9cd9fa,size:.052,transparent:true,opacity:.85}));
  drops.frustumCulled=false;drops.visible=false;scene.add(drops);
  const securityCamera=new THREE.PerspectiveCamera(63,1,.1,50);
  securityCamera.position.set(5.9,2.2,.54);
  securityCamera.lookAt(4,0,3.35);
  function capture(){
    if(!width||!height)return null;
    wake();
    securityCamera.aspect=width/height;securityCamera.updateProjectionMatrix();
    renderer.render(scene,securityCamera);
    try{return renderer.domElement.toDataURL('image/webp',.72);}
    finally{renderer.render(scene,camera);}
  }

  // Windows with roller blinds. Scaling down opens the fabric at the top.
  for(const [id,x,z] of [['sala-estore',-4,4.4],['quarto-estore',0,-4.4]]){
    box(house,2.3,1.5,.07,x,.8,z,material(0xc3dce7,{transparent:true,opacity:.3}));
    for(const dx of [-1.2,1.2])box(house,.06,1.65,.1,x+dx,.82,z,white);
    box(house,2.45,.07,.12,x,1.66,z,white);
    const blind=box(house,2.25,1.48,.06,x,.87,z-.07,material(0xb5c0ca));
    shutters.push({id,mesh:blind});
  }
  const outlineMaterial=new THREE.LineBasicMaterial({color:0x3175c2,transparent:true,opacity:.7});
  let outline;
  function focus(id){
    if(focused===id)return;
    wake();
    focused=id;
    if(outline){house.remove(outline);outline.geometry.dispose();outline=null;}
    const area=layout[id];
    desiredTarget.set(area?.x??2,0,area?.z??0);
    desiredZoom=area?2.65:overviewZoom;
    document.querySelector('#house-title').textContent=rooms.find(room=>room.id===id)?.name||'Toda a casa';
    document.querySelector('#house-hint').textContent=area?
      'Controla esta divisão na app ou diretamente na maquete.':
      'Toca para explorar. Arrasta para rodar e usa + ou − para aproximar.';
    if(area){
      const points=[[-1,-1],[1,-1],[1,1],[-1,1],[-1,-1]].map(([x,z])=>new THREE.Vector3(area.x+x*area.w/2,.08,area.z+z*area.d/2));
      outline=new THREE.Line(new THREE.BufferGeometry().setFromPoints(points),outlineMaterial);
      house.add(outline);
    }
  }
  function update(state,room){
    snapshot=state;
    wake();
    picker.value=room || '';
    focus(room);
    for(const marker of markers){
      const on=!!state.values[lightIds[marker.room]];
      if(marker.kind==='light-marker'){
        const name=rooms.find(room=>room.id===marker.room).name;
        marker.button.setAttribute('aria-label',(on?'Desligar luz de ':'Ligar luz de ')+name);
        marker.button.setAttribute('aria-pressed',String(on));
      }else if(marker.kind==='room-label'){
        marker.button.setAttribute('aria-pressed',String(marker.room===room));
      }else if(marker.kind==='door-marker')marker.button.setAttribute('aria-label',state.door?'Fechar porta da entrada':'Abrir porta da entrada');
      else if(marker.kind==='device-marker'){
        const id=marker.button.dataset.device;
        const active=state.values[id];
        marker.button.setAttribute('aria-pressed',String(active));
        marker.button.setAttribute('aria-label',id==='portao'?(active?'Fechar':'Abrir')+' portão da garagem':(active?'Desligar':'Ligar')+' rega do jardim');
      }
      marker.button.title=marker.button.getAttribute('aria-label');
    }
  }
  const picker=document.createElement('select');
  picker.id='house-room-picker';
  picker.className='house-room-picker';
  picker.setAttribute('aria-label','Explorar uma divisão na casa 3D');
  for(const [id,name] of [['','Toda a casa'],...rooms.map(room=>[room.id,room.name])]){
    const option=document.createElement('option');
    option.value=id;option.textContent=name;picker.append(option);
  }
  picker.addEventListener('change',()=>{if(picker.value)onRoom(picker.value);else location.hash='divisoes';});
  document.querySelector('#house-hint').before(picker);
  const raycaster=new THREE.Raycaster();
  const canvas=renderer.domElement;
  const pointers=new Map();
  let moved=false;
  let pinchDistance=0;
  function zoom(factor){wake();desiredZoom=THREE.MathUtils.clamp(desiredZoom*factor,.72,4.8);}
  function resetView(){
    wake();
    desiredYaw=initialYaw;desiredPitch=initialPitch;
    if(focused!==null)focus(null);
    else {desiredTarget.set(2,0,0);desiredZoom=overviewZoom;}
  }
  function pick(event){
    const rect=canvas.getBoundingClientRect();
    raycaster.setFromCamera(new THREE.Vector2(
      (event.clientX-rect.left)/rect.width*2-1,
      -(event.clientY-rect.top)/rect.height*2+1,
    ),camera);
    const hit=raycaster.intersectObjects(floorTargets)[0];
    if(hit)onRoom(hit.object.userData.room);
  }
  const point=event=>({x:event.clientX,y:event.clientY});
  const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  canvas.addEventListener('pointerdown',event=>{
    if(!pointers.size){moved=false;pinchDistance=0;}
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId,point(event));
    if(pointers.size===2){pinchDistance=distance(...pointers.values());moved=true;}
  });
  canvas.addEventListener('pointermove',event=>{
    if(!pointers.has(event.pointerId))return;
    const previous=pointers.get(event.pointerId);
    const next=point(event);
    const dx=next.x-previous.x,dy=next.y-previous.y;
    if(pointers.size===1&&!moved&&Math.hypot(dx,dy)<5)return;
    pointers.set(event.pointerId,next);
    moved=true;
    wake();
    canvas.classList.add('dragging');
    if(pointers.size===2){
      const newDistance=distance(...pointers.values());
      if(pinchDistance>0)zoom(newDistance/pinchDistance);
      pinchDistance=newDistance;
    }else if(pointers.size===1){
      desiredYaw-=dx*.008;
      desiredPitch=THREE.MathUtils.clamp(desiredPitch-dy*.006,.42,1.19);
    }
  });
  canvas.addEventListener('pointerup',event=>{
    if(!pointers.has(event.pointerId))return;
    pointers.delete(event.pointerId);
    if(!pointers.size)canvas.classList.remove('dragging');
    if(!moved)pick(event);
  });
  canvas.addEventListener('pointercancel',event=>{pointers.delete(event.pointerId);canvas.classList.remove('dragging');});
  canvas.addEventListener('wheel',event=>{
    event.preventDefault();
    zoom(Math.exp(-THREE.MathUtils.clamp(event.deltaY,-100,100)*.004));
  },{passive:false});
  let width=1,height=1;
  function resize(){
    if(!host.clientWidth||!host.clientHeight)return;
    width=host.clientWidth;height=host.clientHeight;
    wake();
    renderer.setSize(width,height);
    const aspect=width/height;
    const halfHeight=Math.max(7.6,11.0/aspect);
    camera.left=-halfHeight*aspect;camera.right=halfHeight*aspect;
    camera.top=halfHeight;camera.bottom=-halfHeight;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(host);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const projector=new THREE.Vector3();
  const litTint=new THREE.Color(0xffce8a);
  const floorGoal=new THREE.Color();
  function frame(time){
    requestAnimationFrame(frame);
    if(document.hidden||!host.clientWidth||time-lastTime<30||(time>renderUntil&&!snapshot?.values.rega&&!snapshot?.values.tv))return;
    const dt=lastTime?Math.min((time-lastTime)/1000,.055):.016;
    lastTime=time;
    const blend=reduced?1:1-Math.exp(-7*dt);
    target.lerp(desiredTarget,blend);
    yaw=THREE.MathUtils.lerp(yaw,desiredYaw,blend);
    pitch=THREE.MathUtils.lerp(pitch,desiredPitch,blend);
    offset.set(26*Math.sin(pitch)*Math.sin(yaw),26*Math.cos(pitch),26*Math.sin(pitch)*Math.cos(yaw));
    camera.position.copy(target).add(offset);
    camera.zoom=THREE.MathUtils.lerp(camera.zoom,desiredZoom,blend);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    const movement=snapshot?.cameraEvent&&Date.now()-snapshot.cameraEvent<3200;
    for(const marker of markers)if(marker.kind==='camera-marker')marker.button.classList.toggle('detected',!!movement);
    for(const {room,floor,base} of mats){
      const on=snapshot?.values[lightIds[room]];
      floorGoal.copy(base);
      if(on)floorGoal.lerp(litTint,.37);
      else if(room!=='exterior')floorGoal.multiplyScalar(.57);
      floor.color.lerp(floorGoal,blend);
    }
    for(const light of lights){
      const on=snapshot?.values[light.id]===true;
      light.lamp.emissiveIntensity=THREE.MathUtils.lerp(light.lamp.emissiveIntensity,on?3.2:0,blend);
      light.point.intensity=THREE.MathUtils.lerp(light.point.intensity,on?18:0,blend);
    }
    for(const overlay of overlays){
      overlay.mesh.material.opacity=THREE.MathUtils.lerp(overlay.mesh.material.opacity,snapshot?.values[lightIds[overlay.room]]? .26:0,blend);
    }
    const doorBlend=reduced?1:1-Math.exp(-2.1*dt);
    const shutterBlend=reduced?1:1-Math.exp(-1.65*dt);
    for(const {id,mesh} of shutters){
      const scale=snapshot?.values[id]? .06:1;
      mesh.scale.y=THREE.MathUtils.lerp(mesh.scale.y,scale,shutterBlend);
      mesh.position.y=1.61-.74*mesh.scale.y;
    }
    gate.scale.y=THREE.MathUtils.lerp(gate.scale.y,snapshot?.values.portao ? .07 : 1,shutterBlend);
    gate.position.y=1.92-.91*gate.scale.y;
    door.rotation.y=THREE.MathUtils.lerp(door.rotation.y,snapshot?.door?-Math.PI*.55:0,doorBlend);
    tvScreen.emissiveIntensity=THREE.MathUtils.lerp(tvScreen.emissiveIntensity,snapshot?.values.tv?1.5:0,blend);
    if(snapshot?.values.tv)drawTelevision(reduced?0:time);
    for(const {id,surface,point} of indicators){
      const on=id==='carregador'?!!snapshot?.charging:!!snapshot?.values[id];
      if(id==='rgb')surface.emissive.set(snapshot?.color??'#9875ff');
      if(id.startsWith('clima'))surface.emissive.setHex((snapshot?.targets[id]??22)>22?0xff9247:0x72bfff);
      surface.emissiveIntensity=THREE.MathUtils.lerp(surface.emissiveIntensity,on?2.1:0,blend);
      if(point){
        point.color.copy(surface.emissive);
        point.intensity=THREE.MathUtils.lerp(point.intensity,on?9:0,blend);
      }
    }
    acLamp.emissiveIntensity=snapshot?.values.clima?2.5:0;
    const charging=!!snapshot?.charging;
    const solarPriority=!!snapshot?.values['solar-prioridade'];
    chargeLED.emissiveIntensity=THREE.MathUtils.lerp(chargeLED.emissiveIntensity,charging?3.6:0,blend);
    chargeLight.intensity=THREE.MathUtils.lerp(chargeLight.intensity,charging?7:0,blend);
    panelMaterial.emissiveIntensity=THREE.MathUtils.lerp(panelMaterial.emissiveIntensity,solarPriority?.48:0,blend);
    inverterLED.emissiveIntensity=THREE.MathUtils.lerp(inverterLED.emissiveIntensity,solarPriority?3:0,blend);
    heaterLamp.emissiveIntensity=snapshot?.values['agua-quente']?2.5:0;
    drops.visible=!!snapshot?.values.rega;
    if(drops.visible){
      for(let i=0;i<dropsCount;i++){
        const angle=i*2.39996;
        const travel=reduced?(i%17)/17:(time*.00062+i*.079)%1;
        dropsPositions[i*3]=4.86+Math.cos(angle)*travel*1.35;
        dropsPositions[i*3+1]=.12+Math.sin(travel*Math.PI)*.85;
        dropsPositions[i*3+2]=3.01+Math.sin(angle)*travel*1.35;
      }
      dropsGeometry.attributes.position.needsUpdate=true;
    }
    renderer.render(scene,camera);
    const positioned=markers.map(marker=>{
      projector.copy(marker.position).project(camera);
      return {
        marker,
        x:(projector.x*.5+.5)*width,
        y:(-projector.y*.5+.5)*height,
        visible:projector.z>-1&&projector.z<1&&(!focused||marker.room===focused),
      };
    });
    const controls=positioned.filter(item=>item.visible&&item.marker.kind!=='room-label');
    for(const item of positioned){
      const {marker,x}=item;
      let {y,visible}=item;
      visible=visible&&x>10&&x<width-10&&y>12&&y<height-12;
      if(visible&&marker.kind==='room-label'){
        const halfWidth=Math.max(21,marker.button.textContent.length*2.7+9);
        const fits=offsetY=>y+offsetY>12&&y+offsetY<height-12&&
          controls.every(control=>Math.abs(control.x-x)>halfWidth+18||Math.abs(control.y-y-offsetY)>28);
        const offset=[0,26,-26,41].find(fits);
        visible=offset!==undefined;
        y+=offset??0;
      }
      marker.button.hidden=!visible;
      if(visible)marker.button.style.transform='translate(-50%, -50%) translate('+x+'px,'+y+'px) scale('+THREE.MathUtils.clamp(.47+.19*camera.zoom,.59,1)+')';
    }
  }
  resize();
  requestAnimationFrame(frame);
  return {update,resetView,zoom,capture};
}

