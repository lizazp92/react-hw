# My first Demo React App

## About

A basic demo with Login, Register, Admin, Landing components.
There are 2 users:

1. login: user1. password: 123
2. login: admin1. password: 123

Correct loging in redirects to Landing (user1) or Admin (admin1) pages. Otherwise an alert is displayed.
In a login component there is a Register btn leading to Register component. It has a form with validation. Once the form is submitted with no errors, Landing component is shown with registered username's value from Registration form.

There is a form with a text input in the main component (Landing). On form submit we receive an alert with the input's current value.

There is a list with user profiles (fetched from user api (10 users)) in the Admin component. There is a basic filter by group (admin, user, moderator, all). There is abutton with removing the profile under each user card and hiding/showing info.

There is a toggle dark theme button in App component that adds styling to each page.

I used Bootstrap, scss, React icon library, Ant Design library.
