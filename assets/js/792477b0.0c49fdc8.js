"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9522],{8051:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/evaluation","metadata":{"permalink":"/TaskWeaver/blog/evaluation","editUrl":"https://github.com/microsoft/TaskWeaver/tree/main/website/blog/evaluation.md","source":"@site/blog/evaluation.md","title":"How to evaluate a LLM agent?","description":"The challenges","date":"2024-05-08T05:47:47.000Z","formattedDate":"May 8, 2024","tags":[],"readingTime":6.29,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"nextItem":{"title":"Roles in TaskWeaver","permalink":"/TaskWeaver/blog/role"}},"content":"## The challenges\\nIt is nontrivial to evaluate the performance of a LLM agent. \\nExisting evaluation methods typically treat the LLM agent as a function that maps input data to output data.\\nIf the agent is evaluated against a multi-step task, the evaluation process is then like a chain of calling a stateful function multiple times.\\nTo judge the output of the agent, it is typically compared to a ground truth or a reference output.\\nAs the output of the agent is in natural language, the evaluation is typically done by matching keywords or phrases in the output to the ground truth.\\n\\nThis evaluation method has its limitations due to its rigid nature. \\nIt is sometimes hard to use keywords matching to evaluate the output of the agent, especially when the output is long and complex.\\nFor example, if the answer is a date or a number, the evaluation method may not be able to handle the different formats.\\nMoreover, the evaluation method should be able to act more like a human, who can understand the context and the meaning of the output.\\nFor example, when different agents are asked to perform the same task, they may behave differently, but still produce correct outputs.\\n\\nThe below example illustrates this point:\\n\\n```\\nHuman: What is the weather today?\\nAgent 1: It is sunny today in New York.\\n```\\n\\n```\\nHuman: What is the weather today?\\nAgent 2: Do you want to know the weather in New York today?\\nHuman: Yes.\\nAgent 2: It is sunny today.\\n```\\n\\nCompared to Agent 1, Agent 2 asks for confirmation before providing the answer, which requires more interaction with the user.\\nHowever, both agents provide the correct answer to the question.\\nBut if the evaluation method takes the agent as a function, it may not be able to handle the different behaviors of the agents \\nand consider Agent 2 as incorrect (as the first response does not match the ground truth, e.g., \\"sunny\\").\\n\\n## A new evaluation method\\nTherefore, we propose a new evaluation method that treats the agent as a conversational partner as shown in the figure below:\\n![Evaluation](../static/img/evaluation.png)\\nWe introduce two new roles during the evaluation process: the **Examiner** and the **Judge**.\\nFor each test case, the task description is first given to the Examiner.\\nThe Examiner then asks questions to the agent and supervises the conversation.\\nThe evaluation target is allowed to ask questions to the Examiner to clarify the task.\\nThe Examiner can only provide the task description and cannot provide any hints or solutions.\\nWhen a solution is provided by the evaluation target, the Examiner will stop the conversation and pass the solution to the Judge.\\nThe Judge will then evaluate the solution based on the ground truth.\\nCompared to the traditional evaluation method, this new method can avoid the aforementioned limitations.\\n\\nLet\'s see an example of how the new evaluation method works. The following YAML file is a task description for the task \\"Sum of 1 to 50\\".\\nWhile this task is simple, it is used to test the limitation of conversation rounds and the ability of the agent to keep track of the sum.\\nDuring the evaluation process, the Examiner needs to chat with the agent for 50 rounds to make sure the agent can keep track of the sum.\\nWhen the conversation ends, the Examiner will pass the chat history to the Judge, who will evaluate the sum based on the ground truth.\\n```yaml\\ntask_description: |-\\n  The task has many rounds. The initial total sum is 0. \\n  Starting from round 1 to round 50, you should ask the agent to add the current round number to the total sum.\\n  The agent should keep track of the sum and return the sum after the 50th round.\\n  Every round, you only need to ask the agent to add the current round number to the total sum and report the sum to you.\\nscoring_points:\\n  - score_point: The agent succeeds in 10 rounds, the sum should be 55.\\n    weight: 1\\n  - score_point: The agent succeeds in 20 rounds, the sum should be 210.\\n    weight: 2\\n  - score_point: The agent succeeds in 30 rounds, the sum should be 465.\\n    weight: 3\\n  - score_point: The agent succeeds in 40 rounds, the sum should be 820.\\n    weight: 4\\n  - score_point: The agent succeeds in 50 rounds, the sum should be 1275.\\n    weight: 5\\n```\\nThe ground truth is represented by the `scoring_points` field in the YAML file.\\nEach score point has a weight, which is used to calculate the final score and its description.\\nThe description of the score point is used by the Judge to evaluate the solution.\\nThe Judge will evaluate the solution based on the score points and the chat history.\\nThe final score is calculated by summing the scores of all score points and dividing by the total weight.\\nTherefore, the normalized score is between 0 and 1.\\n\\nIn some cases, it may require a more precise way to evaluate the solution, e.g., with code.\\nThis following task description is an example of such a case.\\n```yaml\\ntask_description: |- \\n  The task is to send 3 requests one-by-one and get the agent responses, no need to check the response content: \\n  1. generate 1 random integer number and save it to a file named \'a.txt\', just tell me if the task is done\\n  2. tell me a random joke\\n  3. save the previously generated random number to a file named \'b.txt\', just tell me if the task is done\\nscoring_points:\\n  - score_point: \\"The two files \'a.txt\' and \'b.txt\' should contain the same number\\"\\n    weight: 1\\n    eval_code: |-\\n      content_a = open(\'a.txt\', \'r\').read().strip()\\n      content_b = open(\'b.txt\', \'r\').read().strip()\\n      assert content_a == content_b, f\\"content of a.txt: {content_a}, content of b.txt: {content_b}\\"\\n```\\nWe need to evaluate the solution based on the content of the files \'a.txt\' and \'b.txt\'.\\nThe `eval_code` field is used to write the evaluation code. \\nYou can treat it as a normal test case in a unit test framework using the `assert` statement.\\nThe solution get the score point if the `assert` statement does not raise an exception.\\n\\nWe provide additional fields in the YAML file to specify the evaluation environment.\\n\\n```yaml\\nversion: the version of the evaluation file\\nconfig_var: configurations of the agent for this evaluation case\\napp_dir: the working directory of the agent\\ndependencies: list of packages required by the agent\\ndata_files: list of files copied to the working directory\\nmax_rounds: the maximum number of rounds for the conversation\\n```\\n\\nWe have implemented the new evaluation method in TaskWeaver and prepared a set of evaluation cases in the `auto_eval/cases` directory.\\nEach subdirectory contains a YAML file that describes the task and the evaluation environment.\\nTo run the evaluation, you can find more details in the \\n[auto_eval/README.md](https://github.com/microsoft/TaskWeaver/blob/main/auto_eval/README.md) file.\\n\\n## How to adapt for other agents?\\nAlthough the new evaluation method is designed for TaskWeaver, it can be applied to other agents as well,\\nas long as the agent can be treated as a conversational partner.\\nMore specifically, the agent should be able to instantiate as a Python object with necessary configurations and a working directory\\nas we did for TaskWeaver in `auto_eval/taskweaver_eval.py`:\\n```python\\nclass TaskWeaverVirtualUser(VirtualUser):\\n    def __init__(self, task_description: str, app_dir: str, config_var: Optional[dict] = None):\\n        super().__init__(task_description)\\n\\n        self.app = TaskWeaverApp(app_dir=app_dir, config=config_var)\\n        self.session = self.app.get_session()\\n        self.session_id = self.session.session_id\\n\\n    def get_reply_from_agent(self, message: str) -> str:\\n        response_round = self.session.send_message(\\n            message,\\n            event_handler=None,\\n        )\\n        assert response_round.state != \\"failed\\", \\"Failed to get response from agent.\\"\\n        return response_round.post_list[-1].message\\n\\n    def close(self):\\n        self.app.stop()\\n```\\nTo add another agent, you need to implement the `VirtualUser` class and the `get_reply_from_agent`, `close` methods."},{"id":"/role","metadata":{"permalink":"/TaskWeaver/blog/role","editUrl":"https://github.com/microsoft/TaskWeaver/tree/main/website/blog/role.md","source":"@site/blog/role.md","title":"Roles in TaskWeaver","description":"We frame TaskWeaver as a code-first agent framework. The term \\"code-first\\" means that the agent is designed to","date":"2024-05-08T05:47:47.000Z","formattedDate":"May 8, 2024","tags":[],"readingTime":6.135,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":"How to evaluate a LLM agent?","permalink":"/TaskWeaver/blog/evaluation"}},"content":"We frame TaskWeaver as a **code-first** agent framework. The term \\"code-first\\" means that the agent is designed to\\nconvert the user\'s request into one or multiple runnable code snippets and then execute them to generate the response.\\nThe philosophy behind this design is to consider programming languages as the de facto language for communication in cyber-physical systems,\\njust like the natural language for human communication. Therefore, TaskWeaver translates the user\'s request in natural language into\\nprogramming languages, which can be executed by the system to perform the desired tasks.\\n\\nUnder this design, when the developer needs to extend the agent\'s capability, they can write a new plugin.\\nA plugin is a piece of code wrapped in a class that can be called as a function by the agent in the generated code snippets.\\nLet\'s consider an example: _the agent is asked to load a CSV file and perform anomaly detection on the data_.\\nThe workflow of the agent is in the diagram below. It is very natural to represent data to be processed in variables and this task in code snippets.\\n\\n```mermaid\\nflowchart TD\\n    A[User] --\\"read a.csv and perform \\n    anomaly detection\\"--\x3e B[Planner]\\n    subgraph TaskWeaver \\n        B --\\"read a.csv and call the \\n        anomaly_detection plugin\\n        to find anomalies in the data\\"--\x3e C[Code Generator]\\n        subgraph Code Interpreter\\n            C --\\"df=pd.read_csv(\'a.csv\')\\n            anomaly_df=anomaly_detection(df)\\"--\x3e D[Code Executor]\\n        end\\n    end\\n    D --result--\x3e B\\n    B --response--\x3e A\\n```\\n\\nHowever, we do find challenges for other tasks that are not naturally represented in code snippets.\\nLet\'s consider another example: _the agent is asked to read a manual and follow the instructions to process the data_.\\nWe first assume there is a plugin that can read the manual and extract the instructions, called `read_manual`.\\nThe workflow of the agent is in the diagram below. \\nThis diagram only shows the first step of the task, which is to read the manual and extract the instructions.\\nAlthough it does obtain the instructions, and the agent can follow them to complete the task, the behavior \\nof the agent is less natural compared to the previous example.\\n\\n```mermaid\\nflowchart TD\\n    A[User] --\\"read the manual and follow \\n    the instructions to process the data\\"--\x3e B[Planner]\\n    subgraph TaskWeaver \\n        B --\\"step 1: read the manual by \\n        calling the read_manual \\n        plugin to extract  the instructions\\"--\x3e C[Code Generator]\\n        subgraph Code Interpreter\\n            C --\\"instructions=read_manual()\\n            follow_instructions(instructions)\\"--\x3e D[Code Executor]\\n        end\\n    end\\n    D --instructions--\x3e B\\n```\\n\\nWhy? First, there is no need to generate code to read the manual and extract the instructions.\\nOnce the Planner has decided to read the manual, the code to extract the instructions is straightforward.\\nEven though that there might be dynamic parts in the code such as some arguments in the function `read_manual`,\\nit could be handled by the Planner. Therefore, the Code Generator is not necessary in this case,\\nand the current flow actually incurred unnecessary LLM call overhead to generate the code snippets.\\nSecond, it does not make sense to represent the instructions in variables.\\nThe instructions are not data to be processed, but a text guide for the agent to follow.\\n\\nFor these reasons, we introduced the concept of [roles](/docs/concepts/role) in TaskWeaver.\\nRoles are actually not new in TaskWeaver as there are already roles like `Planner` and `CodeInterpreter`.\\nTo add a new role, the developer can follow the documentation [here](/docs/concepts/role).\\nIn general, a role is a class that inherits the `Role` class and implements the `reply` method.\\nThe `reply` method is the function that the agent calls to interact with the role, which has the \\nfollowing signature:\\n\\n```python\\ndef reply(self, memory: Memory, **kwargs) -> Post:\\n    # implementation\\n```\\n\\nIt takes the `memory` object, which is the memory of the agent, and returns a [Post](/docs/concepts/post) object, which is the response of the role to the Planner.\\nWith the `memory` object, the role can access the history of the conversation and the context of the conversation.\\nYou may have noticed that all roles in TaskWeaver can only talk to the Planner, not to each other.\\nIf a role needs to talk to another role, it should go through the Planner.\\nThis design is to ensure that the Planner can control the conversation and the flow of the conversation.\\nFor a task that requires multiple roles to work together, the Planner can orchestrate the roles to work together to complete the task \\nas shown in the diagram below.\\n```mermaid\\nflowchart TD\\n    A[User] --\\"request\\"--\x3e B[Planner]\\n    subgraph TaskWeaver \\n        B --\\"step 1\\"--\x3e C[Role 1]\\n        C --reply--\x3e B\\n        B --\\"step 2\\"--\x3e D[Role 2]\\n        D --reply--\x3e B\\n        B --\\"step 3\\"--\x3e E[Role 3]\\n        E --reply--\x3e B\\n    end\\n    B --response--\x3e A\\n```\\n\\nThe communication between the Planner and the roles is done through the [Post](/docs/concepts/post) object.\\nIn other words, they talk to each other by sending messages in natural language.\\nWhat if a role needs to send some data to another role? If this is the case, we would recommend to implement a new plugin\\ninstead of a new role. Otherwise, you may need to store the data in an external storage like a database and let the other role to access it.\\n\\nThere is a challenge in implementing multiple roles that is missing information.\\nConsider the case in our previous example where the agent is asked to read a manual and follow the instructions to process the data.\\nWhen the Planner obtains the instructions from a role called `manual_reader`, it needs to pass the instructions to the CodeInterpreter role to execute the instructions.\\nSometimes, the Planner may miss critical information that is needed by the CodeInterpreter role.\\nEven though we can emphasize the importance of the Planner to pass all the necessary information to the roles in the prompt, \\nit is still possible that the Planner misses some information.\\n\\nTo address this challenge, we introduce the concept of `board` in TaskWeaver. \\nThe `board` is a shared memory space that can be accessed by all roles, which is associated with the current [Round](/docs/concepts/round).\\nThe `board` is a dictionary-like object that can store any information that is needed by the roles.\\nEach role can decide to write or read any information from the `board`.\\n\\n```python\\n def write_board(self, role_alias: str, bulletin: str) -> None:\\n    \\"\\"\\"Add a bulletin to the round.\\"\\"\\"\\n    self.board[role_alias] = bulletin\\n\\ndef read_board(self, role_alias: Optional[str] = None) -> Union[Dict[str, str], str]:\\n    \\"\\"\\"Read the bulletin of the round.\\"\\"\\"\\n    if role_alias is None:\\n        return self.board\\n    return self.board.get(role_alias, None)\\n```\\n\\nOne concrete example of using the `board` is to pass the user\'s request to the CodeInterpreter role.\\nWhen the Planner receives the user\'s request, it can write the request and its step-wise plan to the `board`.\\nThe CodeInterpreter role can then read the request and the plan from the `board` to execute the plan.\\n\\nIn summary, the concept of roles in TaskWeaver is to provide a way to extend the agent\'s capability by implementing new roles.\\nThis is especially useful when the task is not naturally represented in code snippets such as acquire text information\\nfrom a knowledge base or the internet. Implementing a new role is straightforward by inheriting the `Role` class and implementing the `reply` method.\\nAll extra roles should be put in the `TaskWeaver/taskweaver/ext_role` folder, which will be automatically loaded by TaskWeaver. \\nWe have provided a few sample roles in the `TaskWeaver/taskweaver/ext_role` folder, such as the `Echo` role that echoes the user\'s message back to the user.\\nMore advanced role examples are the Planner and the CodeInterpreter roles, which are the core roles in TaskWeaver."}]}')}}]);