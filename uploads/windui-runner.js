// --- Mocks Roblox objects
window.mockGame = {
    PlaceId: 123456,
    JobId: "job123",
    Players: { LocalPlayer: { Name:"Player1", Character:{HumanoidRootPart:{Position:{x:0,y:0,z:0},Size:{x:2,y:2,z:1}}} } },
    GetService: name => window.mockServices[name] || {}
};
window.mockEnum = {
    InfoType: { Asset:"Asset" },
    KeyCode: { G:"G", LeftControl:"LeftControl", Space:"Space" },
    HumanoidStateType: { Jumping:"Jumping", Seated:"Seated" }
};
window.mockUDim2 = { fromOffset:(x,y)=>({x,y}) };
window.mockVector3 = { new:(x,y,z)=>({x,y,z}) };
window.mockColor3 = { fromRGB:(r,g,b)=>({r,g,b}), fromHex:(h)=>({hex:h}) };
window.mockColorSequence = class { constructor(...c){ this.c=c; } };
window.mockTask = { wait:(s=0.01)=>new Promise(r=>setTimeout(r,s*1000)) };
window.mockServices = {
    MarketplaceService: { GetProductInfo:(id,type)=>({Name:"Demo Game"}) },
    ReplicatedStorage: { WaitForChild:(n)=>window.mockServices[n] || {} },
    TweenService: {}
};
window.mockRemote = {
    InvokeServer:(...args)=>`Mocked server response for ${args.join(",")}`,
    FireServer:(...args)=>console.log("Mocked FireServer:", args)
};

// --- WindUI GUI basic
const winduiDiv = document.getElementById("windui");
let currentTab = null;
function createWindow(opts){
    const win = document.createElement("div");
    win.innerHTML = `<h2>${opts.Title}</h2><div class="tabs"></div><div class="content"></div>`;
    winduiDiv.appendChild(win);
    const tabsDiv = win.querySelector(".tabs");
    const contentDiv = win.querySelector(".content");
    return {
        Tab: ({Title})=>{
            const t = document.createElement("div"); t.className="tab"; t.innerText=Title;
            tabsDiv.appendChild(t);
            t.onclick=()=>{
                if(currentTab) currentTab.classList.remove("active");
                t.classList.add("active");
                currentTab = t;
            };
            return {
                Button: ({Title, Callback})=>{
                    const b = document.createElement("button"); b.innerText=Title;
                    contentDiv.appendChild(b);
                    b.onclick=Callback;
                    return b;
                },
                Toggle: ({Title, Callback})=>{
                    const c = document.createElement("input"); c.type="checkbox";
                    const l = document.createElement("label"); l.innerText=Title; l.style.color="#eee";
                    contentDiv.appendChild(l); contentDiv.appendChild(c);
                    c.onchange=()=>Callback(c.checked);
                    return c;
                }
            };
        }
    };
}

// --- Lua runner
const outputEl = document.getElementById("output");
const log = (...args)=>{ console.log(...args); outputEl.textContent += args.join(" ")+"\n"; };
const warn = (...args)=>{ console.warn(...args); outputEl.textContent += "⚠ "+args.join(" ")+"\n"; };
function runLua(luaCode){
    const L = fengari.lauxlib.luaL_newstate();
    fengari.lualib.luaL_openlibs(L);
    fengari.interop.luaopen_js(L);
    fengari.lua.lua_setglobal(L,"js");
    const lua = fengari.lua;
    const interop = fengari.interop;
    lua.lua_getglobal(L,"_G");
    lua.lua_pushstring(L,"game"); interop.push(L,window.mockGame); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"Enum"); interop.push(L,window.mockEnum); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"UDim2"); interop.push(L,window.mockUDim2); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"Vector3"); interop.push(L,window.mockVector3); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"Color3"); interop.push(L,window.mockColor3); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"ColorSequence"); interop.push(L,window.mockColorSequence); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"task"); interop.push(L,window.mockTask); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"print"); interop.push(L,log); lua.lua_settable(L,-3);
    lua.lua_pushstring(L,"warn"); interop.push(L,warn); lua.lua_settable(L,-3);
    try{
        const f = fengari.load(luaCode);
        f(L);
    }catch(e){ warn("Lua Error:",e.message); }
}
document.getElementById("runBtn").onclick=()=>{
    outputEl.textContent="";
    runLua(document.getElementById("luaCode").value);
};

// --- demo WindUI window
const Window = createWindow({Title:"Wave Hub"});
const MainTab = Window.Tab({Title:"Main"});
MainTab.Button({Title:"Say Hello", Callback:()=>alert("Hello WindUI Browser!")});
MainTab.Toggle({Title:"Check Me", Callback:state=>alert("Toggle: "+state)});
