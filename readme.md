## Requirements
1. When the website loads **(using index.hbs)**, it should display the current content of todolist.json on the table at the bottom part of the webpage
2. For each task listed, there should be two buttons. The Edit and the Delete button.
3. When user types in Task Descriptionn, date and Status on the blank form then click on Save/Update Task, the JS on the client side should assign a unique number using the function prepareID() inside index.hbs.  Create the appropriate node.js route for the form submission to save the new/update the to do task.  The table list below the form should be updated as well.
4. On the table todo task list, when user clicks on the **Edit button**, it should transfer the Task Number, Task Description, Date and Task Status on the form for editing and submission for saving/updating on the json file.  The table todo list should get updated as well.
5. When user clicks on the **Delete button**, then delete the task todo list from the json file then update the table todo list. 

Please refer to the screenshots below to demostrate the processed/steps:

**1. Initial Screen**
<img src="https://cdn.glitch.global/759b9443-074e-46d3-986b-2c477fa21659/todo1st.png?v=1745237710215" />

**2. When Creating**
<img src="https://cdn.glitch.global/759b9443-074e-46d3-986b-2c477fa21659/todo2nd.png?v=1745237757397" />
<img src="https://cdn.glitch.global/759b9443-074e-46d3-986b-2c477fa21659/todo3rd.png?v=1745237766347" />

**3. When Editing (clicks on the Edit Button)**
<img src="https://cdn.glitch.global/759b9443-074e-46d3-986b-2c477fa21659/todo4th.png?v=1745237774057" />

**4. When Deleting (clicks on the Delete Button)**
<img src="https://cdn.glitch.global/759b9443-074e-46d3-986b-2c477fa21659/todo5th.png?v=1745238080808" />

### Grading System:

1. Route Headings (2pts)
2. Displaying/Refreshing of the Table todo list (3pts)
3. Saving/Creating New todo task (5pts)
4. Updating process (5pts)
5. Deleting process (5pts)