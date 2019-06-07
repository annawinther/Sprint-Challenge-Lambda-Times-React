# Sprint Challenge: Lambda Times (React)

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Intermediate React, React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS. In this Sprint Challenge, you will demonstrate proficiency by creating an application that uses to build a fully-functioning replicate of the LA-Times website.

Remember, this is a way for you to analyze your understanding of the concepts presented this week. Feel free to reference old code, but please refrain from copy/pasting, even rewriting old code can teach you something new! Take your time, and have fun!

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency Intermediate React and your command of the concepts and techniques in the React Tooling, The React Life-cycle, React Composition Patterns and CSS-in-JS modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

For the Lambda Times challenge you will create a React application that replicates the[LA Times Website](http://www.latimes.com). Throughout this challenge you will take a Vanilla JavaScript app, and convert it to a React app. Much of the initial work has been done, but there are some missing pieces you will need to complete to get the app working properly.

Your base React app has already been created, and includes some components. Included as well is a CSS file that you may reference when writing your own code.

Look through the application code. If you have the old Lambda Times (Applied JavaScript) sprint challenge handy, you may compare how the structure of this app differs from that, noting how React gives us very easy to use concise components.

## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used for type checking. This is helpful when checking the data to ensue the user is using a function properly. PropTypes are used so we dont have to wirte an if statement in a function to check our data. They make it a lot easier. PropTypes are used to validate the type of data that is being passed as props to that component, at the time its being built. As your component is being constructed  the data you’re passing to that component as props  will be validated through the proptype (eco system). It will not check all of the data only what you are passing as props. This is important as the components become a lot safer form the mistakes devs commonly make. It is an easier way to safeguard ourself from making mistakes when developing.

- [ ] Describe a life-cycle event in React?

A life cycle event in React can be thought of as a human life cycle. We have the Birth/Mounting phase, The growth/Updating phone and the Death/Unmounting phase. The Mounting has e is when the component is being built out from ground and up. The initial data you have access to will be defined on the constructor of this phase and the render method will be invoked. Also the `componentDidMount` gets called as well. The Updating phase is when setState can be used to change the components state data, forcing a call to render. And if you don’t need to render, the `shouldComponentUpdate` is a method that could be used here to stop the component from rendering. And then finally the Unmounting phase where the component is removed from the screen. `ComponentWillMount` can be called here and can be used for any clean up that needs doing.


- [ ] Explain the details of a Higher Order Component?

A Higher Order Component is essentially a function that receives a component as an argument and returns a new component. They are commonly used as advanced react patterns for designing components that share the same kind of behaviour or data. This makes them connected in a different way than the normal state to props pattern. With HOC we can share functionality between components. An example is the functionality to a Login component. This component could be a form that accepts user input such as a username and password and performs a check on the database to make sure that this user lives on the system. If it does, and the password is correct the app would log them in and show the content the user has access to. In this example the HOC is the component that renders either a Login component or the entire App component. 

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

You can use: external files, use the id or class name or you can use Styled Components. If you are working somewhere and your team has a css/less/saas specialist, the best idea for styling would be to have external files. It is easier for the specialist to have an external file and the specialist taking care of all the styling. If we don’t have a specialist but we have external files, the way we would do styling is by using the id or classnames. Just as we normally would. Styled Components is a library for writing CSS witin JS files. This way it gives us the abaility to keep all of our code in the same files, rather than having external files for styling. I also found it a lot easier as it mush easier to keep track of the styling when writing the styled components in the same files we want the styling to go, plus not having to use className or id.

## Project Setup

Follow these steps to set up your project:

- [ ] Create a forked copy of this project.
- [ ] Add your project manager as collaborator on Github.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.
- [ ] From within the `lambdatimes` folder run `yarn` and then `yarn start`. This will open your locally hosted application in your browser. Once you are ready move onto the next steps.
- [ ] Inside the `Content` folder you will find all 5 components that make up the content of the application. The flow goes like this: `Content > Tabs > Tab` and `Content > Cards > Card`. Follow the directions in the `Content` component to get your data ready.

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repository). **Please don't merge your own pull request**
- [ ] Add your project manager as a reviewer on the pull-request
- [ ] Your project manager will count the project as complete by merging the branch back into master.

## Minimum Viable Product

- [ ] Go through the `Tabs`, `Tab`, `Cards`, and `Card` components following the instructions, and passing data and props to get the tabs and cards to appear on the screen.
- [ ] Once the Tabs and Cards are rendering to the screen complete the `changeSelected` and `filterCards` functions in the `Content` component.
- [ ] You should now be able to filter cards using your tabs!
- [ ] Make sure all of your props being passed are validated using PropTypes.
- [ ] Find the `TopBar` and `Header` components. Convert these two components to Styled Components. You should not have any `className` props when you are finished.

## Stretch Challenge

There are multiple stretch challenges available to you, you may attempt these in any order. Remember, stretch challenges are only to give you extra time to work on these concepts, if you do not get to these challenges, that is fine! Continue working on your main objectives.

- [ ] Re-factor the app, so that it uses ALL styled components. There should be no `className` props on any component. To truly test this, delete the CSS file.

- [ ] You will find a `Carousel` component in your Content folder. Complete this component, rendering a functional carousel. Add this component between your `Tabs` and `Cards` components within the `Content` component. Added challenge: make it so that there is infinite scroll to the right and the left.

- [ ] Add a login and an HOC. Make it so that when a user clicks on the login button at the top, a login modal is shown (Use React-strap). Have a user login, validating the login credentials on the `localStorage`. Add a Higher Order Component that wraps the `Content` component, only allowing it to render once a user has logged in. For more instructions see this README: [React-Insta-Clone: Day III](https://github.com/LambdaSchool/React-Insta-Clone/blob/master/DAY_THREE_README.md#tasks-day-iii)
