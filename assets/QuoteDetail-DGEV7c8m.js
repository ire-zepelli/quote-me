import{j as e,c as o,r as u,b as i,O as c}from"./index-Cvzl7uDc.js";import{u as d,a as x}from"./api-D3z0bM80.js";const l="_quote_13i9w_1",h={quote:l},j=t=>e.jsxs("figure",{className:h.quote,children:[e.jsx("p",{children:t.text}),e.jsx("figcaption",{children:t.author})]}),p=()=>{const{quoteId:t}=o(),{sendRequest:r,status:n,data:s,error:a}=d(x,!0);return u.useEffect(()=>{r(t)},[r,t]),n==="pending"?e.jsx("div",{className:"centered",children:e.jsx(i,{})}):a?e.jsx("p",{className:"centered",children:a}):s.text?e.jsxs(e.Fragment,{children:[e.jsx(j,{text:s.text,author:s.author}),e.jsx(c,{})]}):e.jsx("p",{children:"No quote found!"})};export{p as default};
