# PolyBeast and PolyBeats Machine

[Live Site](https://intuitiveharmony.github.io/breeze_front/) | [Front End Repo](https://github.com/IntuitiveHarmony/breeze_front) | [API](https://breeze-back.herokuapp.com/api/sequences) | [Back End Repo](https://github.com/IntuitiveHarmony/breeze_back) |

This instrument is a collaboration between Jey Ulmer and Jason Horst.  We set out to make a poly rhythmic sequencer and sample based drum machine in which the user is able to create, save, edit and delete new sequences.  Breeze was built using React, Redux, Django, Postgresql, Reactronica, and Tone.js.  The back end is hosted using Heroku and the front end is deployed using Github pages. Piano Roll keys, as well as any key code can be found here javascriptkeycode.com.


## Challenges

The biggest challenge in this project was learning redux.  We spent the first week studying and struggling with this new technology.  Eventually we were able to start and understand it and start implementing it into our workflow.   

The other major challenge was to get our external libraries Reactronica and Tone.js to behave in the way we intended.  Reactronica was working perfectly at first, however once more features were added the functionality of Reactonica seemed to decline and become unpredictable.

One of the issues that we ran into was adding null values into our database.   Since our Djnago database uses python it would rather see None.  I needed to 'translate' the null into 'null' for the data base to accept the data.  I also translated the 'null' into null so that Reactronica would work.  We are going to launch a different database and server that is written in javaScript to avoid this moving forward


## Successes

Overcoming the learning curve of redux was a major success.  Once we started understanding how the store, dispatchers and reducers interacted with each other the true power of redux started to show itself.  Having a global state to draw from and change was very useful when it came to updating our data because we just set the current sequence state from the store over to the db.  

Learning how to use these technologies together was an interesting challenge and we were able to learn a lot about all of them throughout this project.  Looking forward I would like to learn how to make stand alone apps as I think this would make our instrument more stable rather than relying on external libraries.

## Looking forward

We plan on working out some of the bugs with this instrument and add more of the features that we set out to originally, such as effects per track, volume per track, load samples and switch synth engines.  This project was a great first step in all the software based instruments to come.
