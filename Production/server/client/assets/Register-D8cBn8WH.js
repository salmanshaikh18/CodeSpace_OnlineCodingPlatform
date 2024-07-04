import{l as f,k as g,x as b,j as e,y as j,z as w,A as N,B as F}from"./index-Df5Lt0TF.js";import{u as y,t as v,F as C,a as l,b as o,c as i,d as c,e as m,z as n}from"./form-Cn1xXVYa.js";import{B as L}from"./button-BSR3uL5I.js";import{I as d}from"./label-C7dCXjI8.js";import{h as S}from"./handleError-BGRHPy8g.js";import{R as z}from"./index-CQRy0SIM.js";const _=n.object({username:n.string(),email:n.string(),password:n.string()});function E(){const x=f(),u=g(),[p,{isLoading:t}]=b(),r=y({resolver:v(_),defaultValues:{username:"",email:"",password:""}});async function h(s){try{const a=await p(s).unwrap();x(w(a)),x(N(!0)),F.success(a.message),u("/")}catch(a){console.log(a),S(a)}}return e.jsx("div",{className:"_signup bg-no-repeat bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[calc(100vh-60px)] flex justify-center items-center flex-col gap-2",children:e.jsxs("div",{className:"__formContainer absolute sm:left-[120px] sm:min-w-[350px] shadow-[0_0_15px_gray] p-8 rounded-lg bg-transparent",children:[" ",e.jsxs("div",{className:"mb-6 flex justify-center flex-col items-center",children:[e.jsx("h1",{className:"text-center text-4xl text-blue-700 font-semibold",children:"Signup"}),e.jsx("p",{className:"text-blue-800 text-lg",children:"     Welcome to The CodeSpace     "})]}),e.jsx(C,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(h),className:"space-y-4",children:[e.jsx(l,{control:r.control,name:"username",render:({field:s})=>e.jsxs(o,{children:[e.jsx(i,{className:"text-green-500",children:"Username"}),e.jsx(c,{children:e.jsx(d,{className:"rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]",disabled:t,placeholder:"Username",...s})}),e.jsx(m,{})]})}),e.jsx(l,{control:r.control,name:"email",render:({field:s})=>e.jsxs(o,{children:[e.jsx(i,{className:"text-green-500",children:"Email"}),e.jsx(c,{children:e.jsx(d,{className:"rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]",disabled:t,type:"email",placeholder:"Email",...s})}),e.jsx(m,{})]})}),e.jsx(l,{control:r.control,name:"password",render:({field:s})=>e.jsxs(o,{children:[e.jsx(i,{className:"text-green-500",children:"Password"}),e.jsx(c,{children:e.jsx(d,{className:"rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-40 w-full bg-[#171F38]",type:"password",placeholder:"Password",...s})}),e.jsx(m,{})]})}),e.jsxs(L,{className:"w-full gap-1 bg-blue-700 hover:bg-blue-900 transition-all ease-in-out duration-300",variant:"secondary",type:"submit",children:[t&&e.jsx(z,{className:"animate-spin"}),"Signup"]})]})}),e.jsx("div",{children:e.jsxs("small",{className:"flex text-zinc-400  justify-center items-center mt-5",children:["Already have an account? "," ",e.jsxs(j,{to:"/user/login",className:"text-blue-500 hover:underline font-semibold",children:[" ","Login"]})]})})]})})}export{E as default};
