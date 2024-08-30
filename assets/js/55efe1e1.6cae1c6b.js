"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8932],{6122:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=i(4848),r=i(8453);const a={description:"Using LLMs from OpenAI/AOAI"},s="Azure OpenAI",o={id:"llms/aoai",title:"Azure OpenAI",description:"Using LLMs from OpenAI/AOAI",source:"@site/docs/llms/aoai.md",sourceDirName:"llms",slug:"/llms/aoai",permalink:"/TaskWeaver/docs/llms/aoai",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/llms/aoai.md",tags:[],version:"current",frontMatter:{description:"Using LLMs from OpenAI/AOAI"},sidebar:"documentSidebar",previous:{title:"OpenAI",permalink:"/TaskWeaver/docs/llms/openai"},next:{title:"LiteLLM",permalink:"/TaskWeaver/docs/llms/liteLLM"}},l={},c=[{value:"Using API Key",id:"using-api-key",level:2},{value:"Using Entra Authentication",id:"using-entra-authentication",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"azure-openai",children:"Azure OpenAI"})}),"\n",(0,t.jsx)(n.h2,{id:"using-api-key",children:"Using API Key"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create an account on ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/ai-services/openai-service",children:"Azure OpenAI"})," and get your API key."]}),"\n",(0,t.jsx)(n.li,{children:"Create a new deployment of the model and get the deployment name."}),"\n",(0,t.jsxs)(n.li,{children:["Add the following to your ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsonc",metastring:"showLineNumbers",children:'{\n  "llm.api_base":"YOUR_AOAI_ENDPOINT", // in the format of https://<my-resource>.openai.azure.com"\n  "llm.api_key":"YOUR_API_KEY",\n  "llm.api_type":"azure",\n  "llm.auth_mode":"api-key",\n  "llm.model":"gpt-4-1106-preview", // this is known as deployment_name in Azure OpenAI\n  "llm.response_format": "json_object"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["For model versions or after ",(0,t.jsx)(n.code,{children:"1106"}),", ",(0,t.jsx)(n.code,{children:"llm.response_format"})," can be set to ",(0,t.jsx)(n.code,{children:"json_object"}),".\nHowever, for the earlier models, which do not support JSON response explicitly, ",(0,t.jsx)(n.code,{children:"llm.response_format"})," should be set to ",(0,t.jsx)(n.code,{children:"null"}),"."]})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Start TaskWeaver and chat with TaskWeaver.\nYou can refer to the ",(0,t.jsx)(n.a,{href:"/TaskWeaver/docs/quickstart",children:"Quick Start"})," for more details."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"using-entra-authentication",children:"Using Entra Authentication"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create an account on ",(0,t.jsx)(n.a,{href:"https://azure.microsoft.com/en-us/products/ai-services/openai-service",children:"Azure OpenAI"})," and\n",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/role-based-access-control",children:"assign the proper Azure RBAC Role"})," to your account (or service principal)."]}),"\n",(0,t.jsx)(n.li,{children:"Create a new deployment of the model and get the deployment name."}),"\n",(0,t.jsxs)(n.li,{children:["Add the following to your ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsonc",metastring:"showLineNumbers",children:'{\n  "llm.api_base":"YOUR_AOAI_ENDPOINT", // in the format of https://<my-resource>.openai.azure.com"\n  "llm.api_type":"azure_ad",\n  "llm.auth_mode":"default_azure_credential",\n  "llm.model":"gpt-4-1106-preview", // this is known as deployment_name in Azure OpenAI\n  "llm.response_format": "json_object"\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install extra dependencies:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install azure-identity\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Optionally configure additional environment variables or dependencies for the specifying authentication method:"}),"\n",(0,t.jsxs)(n.p,{children:["Internally, authentication is handled by the ",(0,t.jsx)(n.code,{children:"DefaultAzureCredential"})," class from the ",(0,t.jsx)(n.code,{children:"azure-identity"})," package. It would try to authenticate using a series of methods depending on the availability in current running environment (such as environment variables, managed identity, etc.). You can refer to the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/python/api/azure-identity/azure.identity.defaultazurecredential?view=azure-python",children:"official documentation"})," for more details."]}),"\n",(0,t.jsx)(n.p,{children:"For example, you can specify different environment variables to control the authentication method:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Authenticating with AzureCLI (recommended for local development):"}),"\n",(0,t.jsxs)(n.p,{children:["Install AzureCLI and ensure ",(0,t.jsx)(n.code,{children:"az"})," is available in your PATH. Then run the following command to login:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"az login\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Authenticating with Managed Identity (recommended for Azure environment):"}),"\n",(0,t.jsx)(n.p,{children:"If you are running TaskWeaver on Azure, you can use Managed Identity for authentication. You can check the document for specific Azure services on how to enable Managed Identity."}),"\n",(0,t.jsx)(n.p,{children:"When using user assigned managed identity, you can set the following environment variable to specify the client ID of the managed identity:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export AZURE_CLIENT_ID="YOUR_CLIENT_ID"\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Authenticating with Service Principal:"}),"\n",(0,t.jsxs)(n.p,{children:["You can follow the docs in the ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/python/api/azure-identity/azure.identity.environmentcredential?view=azure-python",children:"official documentation"})," to specify the environment variables for Service Principal authentication."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Start TaskWeaver and chat with TaskWeaver."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(6540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);