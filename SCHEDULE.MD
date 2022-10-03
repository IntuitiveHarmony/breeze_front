9/19/22
-Assigned project
-Project approved
  -Build sequencer using django, react, typescript, tone.js and/or reactronica

9/20/22
-set up basic server
-deploy server (heroku)
-set up basic react app
-deploy front end (gitpages)
-research typescript

9/21/22
-thinking about redux over typescript
-researching redux
-research and experiment with tone.js and reactronica

9/22/22
-researching and experimenting with redux
-research and experiment with tone.js and reactronica
-making quicker headway with reactronica, tone is more difficult to pickup

9/23/22
-researching and experimenting with redux
-research and experiment with tone.js and reactronica (need to focus on redux)
-tried npm react-music which seems broken :(
-working on axios-redux combo

9/24/22  
-researching and experimenting with redux, applying lessons and tutorials to our project
-videos from Dave Gray are very helpful (https://www.youtube.com/playlist?list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo)

9/25/22  
-researching and experimenting with redux, applying lessons and tutorials to our project
-videos from Dave Gray are very helpful (https://www.youtube.com/playlist?list=PL0Zuz27SZ-6M1J5I1w2-uZx36Qp6qhjKo)

9/25/22  
-researching and experimenting with redux, can finally add things to the store.  Redux is starting to make more sense
-Established full CRUD
- finally got drum sounds to work with Context, thanks to github.io/joeshub, watched video on how to make tracks within a provider.

9/26/22  
-experimenting with CRUD and the store, figuring out how the data will look and flow

9/27/22  
-update server to reflect on line of the poly beast instrument

9/28/22  
-fixing CRUD after server update
-couldn't get samples to play through urls

9/29/22  
-update server to reflect users.  ran into issues with bcrypt

9/30/22  
-removed bcrypt from server. continue fixing CRUD after server update.  
-setting up reducers for steps amount and activate steps on individual polybeast lines

10/1/22  
-Polishing CRUD functions
-CSS
-time for a piano roll - made piano roll



Presentation notes

- wanted to make synth sequencer, theres no real guideline.
- we used react with tone.js, reactronica.js, redux. Started with typescript, quickly learned it we weren't ready for it
- Reactronica isn't consistent in it's docs, due to the lack of tutorials, plus deprecation of the ones that do exist, there really isn't one "easy" way to do this. 

- The key in what we're doing is Redux and Context
- REDUX is a GAME OF STATES! This is not documented facts but I found there's only two ways to get audio to play... a callback from a state, or a command in a function. 

- Making the piano roll was easy, did that in one day... yesterday. But getting the web audio api to cooperate was frustrating. Jason figured out the synth in about a day or two. It took me about 4-5 days to get the audio to play.


Problems: Python DOES NOT HAVE NULL!!! It has none, it does not have NULL. Jason found that out roughly 3-4 days ago. 

- wanted to make an upload function but couldn't get it to reliably work. 















//
