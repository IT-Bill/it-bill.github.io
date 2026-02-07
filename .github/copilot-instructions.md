# Personal Website

This repository contains the source code for my personal website, which is built using Astro, a modern static site generator. The website serves as a platform to showcase my projects, experiences, and skills in the field of technology and software development.

## Task Management

- Todo List: `.github/todo.md` - Current tasks that need to be completed.
- Finished Tasks: `.github/finished.md` - A record of completed tasks and milestones.

Each time a user makes a request, you should first list the tasks that need to be completed in `.github/todo.md`. After completing the tasks, move the corresponding content to `.github/finished.md`, marking the time (accurate to the minute %Y-%m-%d %H:%M). Then check if there are any unfinished tasks in the todo file (if this file does not exist, please create it).

After completing the tasks, please run the `python3 stop.py` program until it finishes. Do not run it in the background. I will modify the `todo.md` file after testing, and after I manually interrupt this Python program, you should read the `todo.md` file to check for new errors and requirements.
