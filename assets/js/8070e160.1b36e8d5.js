"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3822],{7495:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=r(4848),a=r(8453);const o={},s="Quick Start",i={id:"quickstart",title:"Quick Start",description:"Installation",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/TaskWeaver/docs/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Overview",permalink:"/TaskWeaver/docs/overview"},next:{title:"Code Execution",permalink:"/TaskWeaver/docs/code_execution"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Project Directory",id:"project-directory",level:2},{value:"OpenAI Configuration",id:"openai-configuration",level:2},{value:"Azure OpenAI",id:"azure-openai",level:3},{value:"OpenAI",id:"openai",level:3},{value:"Start TaskWeaver",id:"start-taskweaver",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"quick-start",children:"Quick Start"})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"You can install TaskWeaver by running the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# [optional] create a conda environment to isolate the dependencies\n# conda create -n taskweaver python=3.10\n# conda activate taskweaver\n\n# clone the repository\ngit clone https://github.com/microsoft/TaskWeaver.git\ncd TaskWeaver\n# install the requirements\npip install -r requirements.txt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"project-directory",children:"Project Directory"}),"\n",(0,t.jsxs)(n.p,{children:["TaskWeaver runs as a process, you need to create a project directory to store plugins and configuration files.\nWe provided a sample project directory in the ",(0,t.jsx)(n.code,{children:"project"})," folder. You can copy the ",(0,t.jsx)(n.code,{children:"project"})," folder to your workspace.\nA project directory typically contains the following files and folders:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\ud83d\udce6project\n \u2523 \ud83d\udcdctaskweaver_config.json # the project configuration file for TaskWeaver\n \u2523 \ud83d\udcc2plugins # the folder to store plugins\n \u2523 \ud83d\udcc2planner_examples # the folder to store planner examples\n \u2523 \ud83d\udcc2codeinterpreter_examples # the folder to store code interpreter examples\n \u2523 \ud83d\udcc2logs # the folder to store logs, will be generated after program starts\n \u2517 \ud83d\udcc2workspace # the directory stores session data\uff0c will be generated after program starts\n    \u2517 \ud83d\udcc2 session_id \n      \u2523 \ud83d\udcc2ces # the folder used by the code execution service\n      \u2523 \ud83d\udcc2cwd # the current working directory to run the generated code\n      \u2517 other session data\n"})}),"\n",(0,t.jsx)(n.h2,{id:"openai-configuration",children:"OpenAI Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Before running TaskWeaver, you need to provide your OpenAI API key and other necessary information.\nYou can do this by editing the ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file.\nIf you are using Azure OpenAI, you need to set the following parameters in the ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file:"]}),"\n",(0,t.jsx)(n.h3,{id:"azure-openai",children:"Azure OpenAI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"llm.api_base": "https://xxx.openai.azure.com/",\n"llm.api_key": "your_api_key",\n"llm.api_type": "azure",\n"llm.api_version": "the api version",\n"llm.model": "the model name, e.g., gpt-4" # In Azure OpenAI, the model name is the deployment_name\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"openai",children:"OpenAI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"llm.api_key": "the api key",\n"llm.model": "the model name, e.g., gpt-4"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1 Only the latest OpenAI API supports the ",(0,t.jsx)(n.code,{children:"json_object"})," response format.\nIf you are using an older version of OpenAI API, you need to set the ",(0,t.jsx)(n.code,{children:'"llm.response_format"'}),"=",(0,t.jsx)(n.code,{children:"null"})," in the ",(0,t.jsx)(n.code,{children:"taskweaver_config.json"})," file."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["More configuration options can be found in the ",(0,t.jsx)(n.a,{href:"./configurations/overview",children:"configuration documentation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"start-taskweaver",children:"Start TaskWeaver"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# assume you are in the TaskWeaver folder cloned from the repository\npython -m taskweaver -p ./project/ # -p is the path to the project directory\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will start the TaskWeaver process and you can interact with it through the command line (CLI) interface.\nIf everything goes well, you will see the following prompt:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"=========================================================\n _____         _     _       __\n|_   _|_ _ ___| | _ | |     / /__  ____ __   _____  _____\n  | |/ _` / __| |/ /| | /| / / _ \\/ __ `/ | / / _ \\/ ___/\n  | | (_| \\__ \\   < | |/ |/ /  __/ /_/ /| |/ /  __/ /\n  |_|\\__,_|___/_|\\_\\|__/|__/\\___/\\__,_/ |___/\\___/_/\n=========================================================\nTaskWeaver: I am TaskWeaver, an AI assistant. To get started, could you please enter your request?\nHuman: ___\n"})}),"\n",(0,t.jsx)(n.p,{children:"There are other ways to start TaskWeaver:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/TaskWeaver/docs/usage/webui",children:"A Chainlit UI interface"}),": TaskWeaver provides an experimental web-based interface to interact with the system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/TaskWeaver/docs/usage/library",children:"A Library"}),": You can also use TaskWeaver as a library in your Python code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/TaskWeaver/docs/usage/docker",children:"The all-in-one Docker image"}),": We provide a Docker image that contains all the dependencies to run TaskWeaver."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var t=r(6540);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);