// windui.js
export const Themes = {
  dark: {
    bg: "bg-gray-900",
    text: "text-white",
    section: "bg-gray-800",
    element: "bg-gray-700 hover:bg-gray-600",
    border: "border-gray-600",
    toggleBg: "bg-gray-600",
    toggleActive: "bg-green-500"
  },
  light: {
    bg: "bg-white",
    text: "text-black",
    section: "bg-gray-100",
    element: "bg-gray-200 hover:bg-gray-300",
    border: "border-gray-300",
    toggleBg: "bg-gray-300",
    toggleActive: "bg-green-500"
  }
};

export class WindUI {
  constructor({Title="Window", Parent=document.body, Width=400, Height=600, Theme="dark"}){
    this.theme = Themes[Theme] || Themes.dark;

    this.container = document.createElement("div");
    this.container.className = `absolute ${this.theme.bg} ${this.theme.text} border ${this.theme.border} rounded-2xl shadow-lg flex flex-col`;
    this.container.style.width = Width + "px";
    this.container.style.height = Height + "px";
    this.container.style.top = "50px";
    this.container.style.left = "50px";
    this.container.style.fontFamily = "sans-serif";
    Parent.appendChild(this.container);

    this.header = document.createElement("div");
    this.header.className = "p-3 font-bold cursor-move select-none flex justify-between items-center";
    this.header.innerText = Title;
    this.container.appendChild(this.header);

    this.tabContainer = document.createElement("div");
    this.tabContainer.className = "flex space-x-2 border-b border-gray-500 p-1";
    this.container.appendChild(this.tabContainer);

    this.body = document.createElement("div");
    this.body.className = "flex-1 overflow-auto p-3 space-y-3";
    this.container.appendChild(this.body);

    this.initDrag();
    this.tabs = [];
    this.currentTab = null;
  }

  initDrag(){
    let isDown = false, offsetX=0, offsetY=0;
    this.header.onmousedown = (e) => {
      isDown = true;
      offsetX = e.clientX - this.container.offsetLeft;
      offsetY = e.clientY - this.container.offsetTop;
    };
    document.onmousemove = (e) => {
      if(!isDown) return;
      this.container.style.left = (e.clientX - offsetX) + "px";
      this.container.style.top = (e.clientY - offsetY) + "px";
    };
    document.onmouseup = () => { isDown=false; };
  }

  setTheme(themeName){
    const t = Themes[themeName];
    if(!t) return;
    this.theme = t;
    this.container.className = `absolute ${t.bg} ${t.text} border ${t.border} rounded-2xl shadow-lg flex flex-col`;
    this.tabContainer.className = "flex space-x-2 border-b border-gray-500 p-1";
    this.body.className = "flex-1 overflow-auto p-3 space-y-3";
  }

  addTab(title, icon=null){
    const tabBtn = document.createElement("button");
    tabBtn.className = `px-3 py-1 rounded ${this.theme.element} flex items-center space-x-1`;
    if(icon){
      const img = document.createElement("img");
      img.src = icon;
      img.className = "w-4 h-4";
      tabBtn.appendChild(img);
    }
    const span = document.createElement("span");
    span.innerText = title;
    tabBtn.appendChild(span);

    const tabBody = document.createElement("div");
    tabBody.className = "space-y-2";
    tabBody.style.display = "none";
    this.body.appendChild(tabBody);

    tabBtn.onclick = () => this.switchTab(tabBody, tabBtn);

    this.tabContainer.appendChild(tabBtn);
    this.tabs.push({btn:tabBtn, body:tabBody});
    if(this.tabs.length===1) this.switchTab(tabBody, tabBtn);
    return tabBody;
  }

  switchTab(tabBody, tabBtn){
    this.tabs.forEach(t=>{
      t.body.style.display="none";
      t.btn.classList.remove("bg-gray-600");
    });
    tabBody.style.display="block";
    tabBtn.classList.add("bg-gray-600");
  }
}

// Section
export function Section({Title="Section", parent, Icon=null}){
  const s = document.createElement("div");
  s.className = `p-2 rounded ${parent?.theme?.section||"bg-gray-800"} space-y-1`;
  if(Icon){
    const img = document.createElement("img");
    img.src = Icon;
    img.className = "inline w-5 h-5 mr-2";
    s.appendChild(img);
  }
  const t = document.createElement("span");
  t.innerText = Title;
  s.appendChild(t);
  parent.appendChild(s);
  return s;
}

// Button
export function Button({Title="Button", Desc="", Callback=()=>{}, Icon=null, parent}){
  const b = document.createElement("button");
  b.className = `w-full p-2 rounded flex items-center space-x-2 ${parent?.theme?.element||"bg-gray-700 hover:bg-gray-600"}`;
  if(Icon){
    const img = document.createElement("img");
    img.src = Icon;
    img.className = "w-5 h-5";
    b.appendChild(img);
  }
  const span = document.createElement("span");
  span.innerText = Title;
  b.appendChild(span);
  b.title = Desc;
  b.onclick = Callback;
  parent.appendChild(b);
  return b;
}

// Toggle
export function Toggle({Title="Toggle", Desc="", Value=false, Callback=()=>{}, Icon=null, parent}){
  const t = document.createElement("div");
  t.className = `flex justify-between items-center p-2 rounded ${parent?.theme?.element||"bg-gray-700 hover:bg-gray-600"} cursor-pointer`;
  if(Icon){
    const img = document.createElement("img");
    img.src = Icon;
    img.className = "w-5 h-5 mr-2";
    t.appendChild(img);
  }
  const span = document.createElement("span");
  span.innerText = Title;
  t.appendChild(span);

  const toggle = document.createElement("div");
  toggle.className = `w-10 h-5 rounded-full p-0.5 ${parent?.theme?.toggleBg||"bg-gray-600"} transition-colors duration-300 flex items-center`;
  const knob = document.createElement("div");
  knob.className = "bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300";
  toggle.appendChild(knob);
  t.appendChild(toggle);

  function update(v){
    if(v){
      toggle.classList.add(parent?.theme?.toggleActive||"bg-green-500");
      knob.style.transform = "translateX(20px)";
    } else {
      toggle.classList.remove(parent?.theme?.toggleActive||"bg-green-500");
      knob.style.transform = "translateX(0px)";
    }
  }

  update(Value);
  t.onclick = ()=>{
    Value = !Value;
    update(Value);
    Callback(Value);
  };

  parent.appendChild(t);
  return t;
}

// Slider
export function Slider({Title="Slider", Value={Min:0,Max:100,Default:50}, Step=1, Callback=()=>{}, parent}){
  const s = document.createElement("div");
  s.className = `flex flex-col space-y-1 p-2 rounded ${parent?.theme?.element||"bg-gray-700 hover:bg-gray-600"}`;
  const label = document.createElement("span");
  label.innerText = Title + ": " + Value.Default;
  s.appendChild(label);
  const input = document.createElement("input");
  input.type="range";
  input.min=Value.Min;
  input.max=Value.Max;
  input.step=Step;
  input.value=Value.Default;
  input.oninput=()=>{
    label.innerText = Title+": "+input.value;
    Callback(Number(input.value));
  };
  s.appendChild(input);
  parent.appendChild(s);
  return s;
}

// Input
export function Input({Title="Input", Placeholder="", Callback=()=>{}, parent}){
  const i = document.createElement("div");
  i.className = `flex flex-col space-y-1 p-2 rounded ${parent?.theme?.element||"bg-gray-700 hover:bg-gray-600"}`;
  const label = document.createElement("span");
  label.innerText = Title;
  i.appendChild(label);
  const input = document.createElement("input");
  input.placeholder = Placeholder;
  input.className = "p-1 rounded text-black";
  input.onchange = ()=>{ Callback(input.value); };
  i.appendChild(input);
  parent.appendChild(i);
  return i;
}

// Notification
export function Notification({Text="Notification", parent, Duration=3000}){
  const n = document.createElement("div");
  n.className = `p-2 rounded shadow ${parent?.theme?.element||"bg-gray-700"} absolute top-4 right-4 opacity-0 transition-opacity duration-500`;
  n.innerText = Text;
  document.body.appendChild(n);
  setTimeout(()=>{ n.style.opacity=1; }, 50);
  setTimeout(()=>{
    n.style.opacity=0;
    setTimeout(()=>n.remove(),500);
  }, Duration);
  return n;
}
