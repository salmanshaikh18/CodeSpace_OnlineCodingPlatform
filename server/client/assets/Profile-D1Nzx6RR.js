import{D as o,l as m,k as x,u as d,j as e,E as u,F as p,H as h,A as g,z as f,w as j,B as w}from"./index-Df5Lt0TF.js";import{B as N}from"./button-BSR3uL5I.js";import{h as b}from"./handleError-BGRHPy8g.js";import{R as v}from"./index-CQRy0SIM.js";const z=()=>{var l;const[n,{isLoading:c}]=o(),t=m(),r=x(),i=async()=>{try{const a=await n().unwrap();t(g(!1)),t(f({})),t(j(!1)),w.success(a.message),r("/")}catch(a){b(a)}},s=d(a=>a.appSlice.currentUser);return e.jsx("div",{className:"h-[calc(100vh-60px)] w-full flex justify-center items-center ",children:e.jsxs("div",{className:"card h-[450px] sm:h-[380px] w-[80vw] sm:w-[500px] shadow-[0_0_15px_gray] bg-slate-900 rounded-lg",children:[e.jsxs("div",{className:"tools h-10 flex gap-1 items-center pl-3",children:[e.jsx("div",{className:"h-3 w-3 rounded-full bg-red-500"}),e.jsx("div",{className:"h-3 w-3 rounded-full bg-yellow-500"}),e.jsx("div",{className:"h-3 w-3 rounded-full bg-green-500"})]}),s.username?e.jsxs("div",{className:"card__content h-[390px] sm:h-[300px] flex flex-col justify-center items-center gap-2 text-lg sm:text-2xl p-4 text-zinc-300 font-semibold",children:[e.jsx("h1",{className:"my-2 sm:text-3xl text-xl text-zinc-300 mb-4",children:"My Profile"}),e.jsxs(u,{className:"border-2 border-blue-500 h-20 w-20 mb-4",children:[e.jsx(p,{src:s.picture}),e.jsx(h,{className:"capitalize",children:(l=s.username)==null?void 0:l.slice(0,2)})]}),e.jsxs("h1",{className:"text-blue-500",children:["UserName :  ",e.jsx("span",{className:"text-green-500",children:s.username})]}),e.jsxs("h1",{className:"text-blue-500",children:["Email :  ",e.jsx("span",{className:"text-green-500",children:s.email})]}),e.jsxs("div",{className:"text-[16px] flex-col sm:flex-row flex justify-between items-center gap-4 sm:gap-8 my-4 sm:mt-8 mt-4",children:[e.jsxs(N,{onClick:i,className:"font-medium text-[16px] w-[150px] bg-red-800 transition-all ease-in-out duration-500 sm:px-4 sm:py-5 px-2 py-1 gap-2",variant:"destructive",children:[c&&e.jsx(v,{className:"animate-spin"}),"Log Out"]}),e.jsx("button",{onClick:()=>r("change-password"),className:"bg-slate-700 w-[150px] sm:px-2 sm:py-1 rounded-md font-medium hover:bg-slate-800 transition-all ease-in-out duration-300 px-2 py-1",children:"Change Password"})]})]}):e.jsx("h1",{className:"text-center text-2xl font-semibold text-red-500",children:"Please Login to view your profile"})]})})};export{z as default};
