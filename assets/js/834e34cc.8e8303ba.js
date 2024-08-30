"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2018],{1034:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var d=r(4848),s=r(8453);const i={},o="Configuration File",t={id:"configurations/overview",title:"Configuration File",description:"An overview of all configurations available in the config file, which is located at project/taskweaver_config.json.",source:"@site/docs/configurations/overview.md",sourceDirName:"configurations",slug:"/configurations/overview",permalink:"/TaskWeaver/docs/configurations/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/configurations/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Configurations",permalink:"/TaskWeaver/docs/advanced"},next:{title:"More about Configurations",permalink:"/TaskWeaver/docs/configurations/configurations_in_detail"}},c={},l=[];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"configuration-file",children:"Configuration File"})}),"\n",(0,d.jsxs)(n.p,{children:["An overview of all configurations available in the config file, which is located at ",(0,d.jsx)(n.code,{children:"project/taskweaver_config.json"}),".\nYou can edit this file to configure TaskWeaver."]}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["The configuration file is in JSON format. So for boolean values, use ",(0,d.jsx)(n.code,{children:"true"})," or ",(0,d.jsx)(n.code,{children:"false"})," instead of ",(0,d.jsx)(n.code,{children:"True"})," or ",(0,d.jsx)(n.code,{children:"False"}),".\nFor null values, use ",(0,d.jsx)(n.code,{children:"null"})," instead of ",(0,d.jsx)(n.code,{children:"None"})," or ",(0,d.jsx)(n.code,{children:'"null"'}),". All other values should be strings in double quotes."]})}),"\n",(0,d.jsx)(n.p,{children:"The following table lists the parameters in the configuration file:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Default Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.model"})}),(0,d.jsx)(n.td,{children:"The model name used by the language model."}),(0,d.jsx)(n.td,{children:"gpt-4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_base"})}),(0,d.jsx)(n.td,{children:"The base URL of the OpenAI API."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"https://api.openai.com/v1"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_key"})}),(0,d.jsx)(n.td,{children:"The API key of the OpenAI API."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_type"})}),(0,d.jsxs)(n.td,{children:["The type of the OpenAI API, could be ",(0,d.jsx)(n.code,{children:"openai"})," or ",(0,d.jsx)(n.code,{children:"azure"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"openai"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_version"})}),(0,d.jsx)(n.td,{children:"The version of the OpenAI API."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"2023-07-01-preview"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.response_format"})}),(0,d.jsxs)(n.td,{children:["The response format of the OpenAI API, could be ",(0,d.jsx)(n.code,{children:"json_object"}),", ",(0,d.jsx)(n.code,{children:"text"})," or ",(0,d.jsx)(n.code,{children:"null"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"json_object"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.embedding_api_type"})}),(0,d.jsx)(n.td,{children:"The type of the embedding API"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sentence_transformers"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.embedding_model"})}),(0,d.jsx)(n.td,{children:"The name of the embedding model"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"all-mpnet-base-v2"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_interpreter.code_verification_on"})}),(0,d.jsx)(n.td,{children:"Whether to enable code verification."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_interpreter.allowed_modules"})}),(0,d.jsx)(n.td,{children:"The list of allowed modules to import in code generation."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'["pandas", "matplotlib", "numpy", "sklearn", "scipy", "seaborn", "datetime", "typing"]'}),", if the list is empty, no modules would be allowed"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_interpreter.blocked_functions"})}),(0,d.jsx)(n.td,{children:"The list of functions to block from code generation."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'["__import__", "eval", "exec", "execfile", "compile", "open", "input", "raw_input", "reload"]'})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging.log_file"})}),(0,d.jsx)(n.td,{children:"The name of the log file."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"taskweaver.log"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging.log_folder"})}),(0,d.jsx)(n.td,{children:"The folder to store the log file."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logs"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"plugin.base_path"})}),(0,d.jsx)(n.td,{children:"The folder to store plugins."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"${AppBaseDir}/plugins"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"planner.example_base_path"})}),(0,d.jsx)(n.td,{children:"The folder to store planner examples."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"${AppBaseDir}/planner_examples"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"planner.prompt_compression"})}),(0,d.jsx)(n.td,{children:"Whether to compress the chat history for planner."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"planner.use_experience"})}),(0,d.jsx)(n.td,{children:"Whether to use experience summarized from the previous chat history in planner."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.example_base_path"})}),(0,d.jsx)(n.td,{children:"The folder to store code interpreter examples."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"${AppBaseDir}/codeinterpreter_examples"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.prompt_compression"})}),(0,d.jsx)(n.td,{children:"Whether to compress the chat history for code interpreter."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.enable_auto_plugin_selection"})}),(0,d.jsx)(n.td,{children:"Whether to enable auto plugin selection."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.use_experience"})}),(0,d.jsx)(n.td,{children:"Whether to use experience summarized from the previous chat history in code generator."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.auto_plugin_selection_topk"})}),(0,d.jsx)(n.td,{children:"The number of auto selected plugins in each round."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"3"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"session.max_internal_chat_round_num"})}),(0,d.jsx)(n.td,{children:"The maximum number of internal chat rounds between Planner and Code Interpreter."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"10"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"session.roles"})}),(0,d.jsx)(n.td,{children:"The roles included for the conversation."}),(0,d.jsx)(n.td,{children:'["planner", "code_interpreter"]'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"round_compressor.rounds_to_compress"})}),(0,d.jsx)(n.td,{children:"The number of rounds to compress."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"2"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"round_compressor.rounds_to_retain"})}),(0,d.jsx)(n.td,{children:"The number of rounds to retain."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"3"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"execution_service.kernel_mode"})}),(0,d.jsxs)(n.td,{children:["The mode of the code executor, could be ",(0,d.jsx)(n.code,{children:"local"})," or ",(0,d.jsx)(n.code,{children:"container"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"local"})})]})]})]}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsx)(n.p,{children:"${AppBaseDir} is the project directory."})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["Up to 11/30/2023, the ",(0,d.jsx)(n.code,{children:"json_object"})," and ",(0,d.jsx)(n.code,{children:"text"})," options of ",(0,d.jsx)(n.code,{children:"llm.response_format"})," is only supported by the OpenAI\nmodels later than 1106. If you are using an older version of OpenAI model, you need to set the ",(0,d.jsx)(n.code,{children:"llm.response_format"}),"\nto ",(0,d.jsx)(n.code,{children:"null"}),"."]})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["Read ",(0,d.jsx)(n.a,{href:"/TaskWeaver/docs/advanced/compression",children:"this"})," for more information for ",(0,d.jsx)(n.code,{children:"planner.prompt_compression"})," and ",(0,d.jsx)(n.code,{children:"code_generator.prompt_compression"}),"."]})}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:["We support to set configurations via environment variables. You need to transform the configuration key to uppercase and replace the dot with underscore.\nFor example, ",(0,d.jsx)(n.code,{children:"llm.model"})," should be set as ",(0,d.jsx)(n.code,{children:"LLM_MODEL"}),", ",(0,d.jsx)(n.code,{children:"llm.api_base"})," should be set as ",(0,d.jsx)(n.code,{children:"LLM_API_BASE"}),", etc."]})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>t});var d=r(6540);const s={},i=d.createContext(s);function o(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);