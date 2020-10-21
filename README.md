# Event Adder

Event Adder is a Chrome extension that lets you create a Google Event from the context menu. I created because I got tired of opening a new tab for Google Calendar when proposed dates were given in emails. 

# Features

Highlight any date and right-click to bring up the context menu and click on Create Event. A new tab will be opened with the dates pre-filled. 

# Known Issues

This is a work in progress. Currently the limitations are:
- When no time is provided events start at midnight
- Events are defaulted to 30 minutes duration
- no error message when a date isn't selected

# Road Map

- Handle time of meeting start when no time is provided
- provided options for meeting length

# Built With

This extension makes use of [SugarJS](https://sugarjs.com/) for the parsing of the dates written in natural language.  
Icons made by [Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](www.flaticon.com)