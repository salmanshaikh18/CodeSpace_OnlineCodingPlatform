import{r as j,j as w,f as N,S as V}from"./index-Df5Lt0TF.js";function b(t){var n,e,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(e=b(t[n]))&&(r&&(r+=" "),r+=e);else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function C(){for(var t,n,e=0,r="";e<arguments.length;)(t=arguments[e++])&&(n=b(t))&&(r&&(r+=" "),r+=n);return r}const m=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,y=C,k=(t,n)=>e=>{var r;if((n==null?void 0:n.variants)==null)return y(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:u,defaultVariants:a}=n,l=Object.keys(u).map(o=>{const s=e==null?void 0:e[o],d=a==null?void 0:a[o];if(s===null)return null;const i=m(s)||m(d);return u[o][i]}),v=e&&Object.entries(e).reduce((o,s)=>{let[d,i]=s;return i===void 0||(o[d]=i),o},{}),g=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((o,s)=>{let{class:d,className:i,...h}=s;return Object.entries(h).every(x=>{let[f,c]=x;return Array.isArray(c)?c.includes({...a,...v}[f]):{...a,...v}[f]===c})?[...o,d,i]:o},[]);return y(t,l,g,e==null?void 0:e.class,e==null?void 0:e.className)},A=k("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),O=j.forwardRef(({className:t,variant:n,size:e,asChild:r=!1,...u},a)=>{const l=r?V:"button";return w.jsx(l,{className:N(A({variant:n,size:e,className:t})),ref:a,...u})});O.displayName="Button";export{O as B,k as c};
