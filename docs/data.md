# Understanding Our Data Files 📚

Hey there! Let's learn about how we store information in our todo list app. It's actually pretty cool and simple once you understand it! 

## What is JSON? 📝

JSON (JavaScript Object Notation) is like organizing your school backpack, but for computer data! 

Imagine your backpack 🎒:
- You have different pockets for different things
- Each pocket might have a label (like "Books" or "Lunch")
- Inside each pocket, you have specific items

In JSON, we do the same thing with information:
```json
{
  "backpack": {
    "frontPocket": ["pencils", "eraser"],
    "mainPocket": ["math book", "lunch box"],
    "sidePocket": "water bottle"
  }
}
```

## Our Data File for the app 📂

### todolist.json 👥
This keeps record of the players' name and their scores.

```json
{
  "1745220058017": {
    "taskDescription": "Training",
    "taskDate": "2025-04-22",
    "taskStatus": "On Going"
  }
}
```

