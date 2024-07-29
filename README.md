# cats
sample react app using the catapi from https://developers.thecatapi.com/ and the meowfact api from https://github.com/wh-iterabb-it/meowfacts.

the breeds of cats are loaded from the catapi into a select box during the initial render; an animated cat image is displayed until the information is fetched.

when a breed is selected from the dropdownbox, a summary of the breed information is displayed and loaded from the previous fetched data,  a new meowfact is fetched from the api and an image of the cat breed is also fetched from the api. A loading animated gif is displayed while the cat's breed image is loaded.

there is a button to manually fetch a new meowfact.

the app can be preview at http://meow.eai.today
