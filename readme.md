# How did "swipe right" become understood?
A long time ago, swipe right was meaningless. Now it is a dictionary entry. It is both meaningful in both offline and digital contexts. ["(Verb) A phrase used to describe your acceptance of something. The term was originally a reference to the Tinder app."](https://www.urbandictionary.com/define.php?term=Swipe%20right)
If you were to give an app to a person and say "swipe right to proceed" the chances are they would understand what how to use the app. But how did this first come to be?
Before it was commonly understood there had to be a way of seeding this knowledge.

## Seeding a new gesture
Unlike swipe right, Press and hold has little to no meaning in digital/UX context and no meaning in a broader-cultural context. Despite this it is in use, iphones, trackpads and pianos all facilitate a press and hold. Each has their own unique output.

##MVP – Front end
This project will onboard users to the novel gesture, press and hold. It will build the logic to test whither a user can press and hold. If they can not, they will be given tips and or demos on how to press and hold.

### MVP tech, React.
This will likely involve a deep dive into state, persistance and probably hooks too.

### MVP demo
01. Introducing the user to press and hold: An interface which invites a user to press and hold using written instructions and or graphical affordances.
02a.Testing whither the user has completed a press and hold: Define a minimum time for a press and hold, if the user completes this time they will progress to the next interface, if they fail to complete a press and hold they will remain on this interface but the state will update to give them a prompt.
02b. Real time feedback: during the testing phase a user could be given a prompt or visual signifier to show how long they have been pressing
03. Completing the press and hold. Once the first press and hold has been completed a new display is shown.

## Extensions
### Back end
The user can create an account which will track whither or not they have completed onboarding. Once completed, the user will not be shown the onboarding  it when they open the web app.

### Back end & front end
Using a websocket library a user can send the duration of their long press and hold to a group of other logged on users. Kind of like a real-time messaging service. Yes, I know this wounds weird but if, the press and hold was coupled to a sound or graphic this group could become a collaborative performance.

### Host it & authenticate users
Use Google's Firebase to host and store the database. Manage user authentication and try it out in the wild.

## Front end
Build on step 03. of the MVP demo and use the press and hold to as a navigational gesture. Then, include other established gestures (for example, click and scroll) to navigate separate sections of the app.



##Broader context – Government Design Principles (award winning)
The MVP fits in with part 4 of [Government Design Principles](https://www.gov.uk/guidance/government-design-principles).
" **Do the hard work to make it simple** – Making something look simple is easy. Making something simple to use is much harder - especially when the underlying systems are complex - but that’s what we should be doing. Don’t take “It’s always been that way” for an answer. It’s usually more and harder work to make things simple, but it’s the right thing to do."
(There are jobs and contracts out there which advertise for knowledge of these).


##Tech stack
– Reuse some or all of an existing press and hold "engine". I've written this as a javascript module.
– React
– [WebSockets](https://developer.cdn.mozilla.net/en-US/docs/Web/API/WebSockets_API) e.g. socket.io, Rsocket. Could be implmemented in Node or Java.
– SASS & possibly atomic css library e.g Tailwind
– Probably non-relational db e.g. Mongo db
– Firebase, user authentication