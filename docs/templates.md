# Understanding Our Web Templates 📝

Hey there! Let's learn about how we make our web pages dynamic and exciting using templates. It's actually pretty cool - kind of like having a smart fill-in-the-blank worksheet! 

## What's a Template? 🤔

Think of a template like a letter to a friend where you leave blank spaces to fill in later:

```
Dear ___________,

How are you? I heard you got a new __________ for your birthday!

Best wishes,
___________
```

In our web app, we do something similar but fancier using a special language called "Handlebars" (we write it as .hbs). It's like having a super-smart worksheet that knows how to fill in the blanks automatically!

## Understanding Handlebars (HBS) 🎯

### The Basics
Handlebars uses special symbols that look like this: `{{something}}`. Think of these like blanks in our fill-in-the-blank worksheet. Here's what they do:

1. `{{variable}}` - Like a blank space waiting for one piece of information
   ```html
   Hello, {{name}}!
   <!-- If name is "Sarah", it becomes: Hello, Sarah! -->
   ```

2. `{{#each}}` - Like saying "do this for each item in your list"
   ```html
   {{#each students}}
     {{this.name}} is in grade {{this.grade}}
   {{/each}}
   ```
   It's like going through your class list and writing everyone's name!

## Our index.hbs File Explained! 🌟

Let's look at index.hbs page and break it down into simple parts:

The Leaderboard Table 📝
   ```html
     <tbody>
          <!-- Task rows will be dynamically inserted here -->
          {{#each todoList}}
           <tr>

                <td id="taskID{{@key}}">{{@key}}</td>
                <td id="desc{{@key}}">{{this.taskDescription}}</td>
                <td id="date{{@key}}">{{this.taskDate}} </td>
                <td id="status{{@key}}">{{this.taskStatus}}</td>
                <td> <button class="editBtns" onclick="getData('{{@key}}')" type="button"> Edit </button> </td>
                <form id="forms{{@key}}" action="/delete" method = "get" onsubmit="return confirm('Sure to Delete?')" />
                  <td> <input name="taskNumber" type="number" value="{{@key}}" style="display:none" />
                  <button type="submit"> Delete </button> </td>
                 </form>
           </tr>
        {{/each}}
      </tbody>   ```
The code above creates a table of todo list with two buttons (Edit and Delete) on the right side.
- Once Edit button is clicked, it will place the information in the form above for easy editing and saving
- The Delete Button will be used to delete a todo list record with when clicked and confirmed.
- Do take note that we need a form in order for the  Delete function to work and submit to the server which todo task you want to delete or remove from the file todolist.json.


**Remember: Templates make our web pages dynamic and interactive - they're like magic papers that know how to change and update themselves based on what information we give them! 🎨**

## Fun Fact! 🎯
The reason it's called "Handlebars" is because it uses these curly braces `{{}}` that kind of look like handles on each side of the text. Pretty creative naming, right? 😄
