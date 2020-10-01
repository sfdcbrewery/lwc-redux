# State management in LWC using Redux by SFDC Brewery

This guide helps Salesforce developers who are new to Visual Studio Code go from zero to a deployed app using Salesforce Extensions for VS Code and Salesforce CLI.
In this blog, lets build an LWC app that dispatches and stores user response to Redux Store using the [lwc-redux](https://github.com/chandrakiran-dev/lwc-redux) library by [Chandra Kiran](https://github.com/chandrakiran-dev). Inside the app, a user can select what level of job he/she is interested in. The user is allowed to change the selections. Redux will help us track count of selections and log previous selection along with current state of selection in app as well as console. 
Whenever an interaction is done inside LWC component(button click, search key etc) Redux dispatches action invoking  Reducer inside the Store which creates a new State that will be returned to the UI. 

TAGS: REDUX, SALESFORCE, SRI KOLAGANI, SFDC BREWERY, LWC, LIGHTNING.