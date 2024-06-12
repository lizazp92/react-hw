# My first Demo React App

## About

A basic demo with Login, Admin, Landing pages.
There are 2 users:

1. login: user1. password: 123
2. login: admin1. password: 123

Correct loging in redirects to Landing (user1) or Admin (admin1) pages. Otherwise an alert is displayed.

There is a form with a text input in the main component (Landing). On form submit we receive an alert with the input's current value.

There is a list with user profiles in the Admin component. There is a basic filter by group (admin, user, moderator, all). There is abutton with removing the profile under each user card and hiding/showing info.

There is a toggle dark theme button in App component that adds styling to each page.

I used Bootstrap, scss, React icon library.

## What I found challenging:

Too many files, I get easily lost in them.

Not sure if I used an ok approach to handle dark-theme throughout the app (did not create a separate file and specific styling for each page (dark theme) is located in a few files).
