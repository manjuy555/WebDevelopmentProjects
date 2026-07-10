# Todo List App

A simple todo list web application built using HTML, CSS and JavaScript.
No backend or database used — all task data is stored in a JavaScript array,
so it resets when the page is refreshed.

## Features
- Add new tasks with name and description via Add Modal
- Edit task name and description directly in the table
- Mark task status as Pending or Completed using dropdown on Status column
- Delete tasks 
- Search tasks by task name
- Filter tasks by status dropdown (All / Completed / Pending)
- Shows "No tasks yet added" message when list is empty

## Technologies Used
- HTML
- CSS
- JavaScript

## Files
- index.html – structure of the page
- style.css – styling and layout
- script.js – all functionality (add, edit, delete, filter, search)

## How to Run
1. Clone this repository, git clone https://github.com/manjuy555/WebDevelopmentProjects.git
2. Navigate to the Todo app folder, cd WebDevelopmentProjects/Todo
3. Open `index.html` in your browser (just double-click it, or use Live Server in VS Code)

## Live Demo
  [Click here to view](https://manjuy555.github.io/WebDevelopmentProjects/Todo/)

## What I learned / worked on
- Handling arrays as a temporary data store
- DOM manipulation to dynamically create table rows
- Event handling (click, change, blur, focus)
- Basic form validation

## Future Improvements
- Add localStorage so tasks don't disappear on refresh
- Add due dates for tasks
- Better mobile responsiveness