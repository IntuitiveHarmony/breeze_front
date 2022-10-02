const sequenceList = [
    {
        id: 0,
        title: 'Sequence 1 - 16 Bars',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 3, 10, 17 ],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4, 7, 9, 12, 15],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [8],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [2, 4, 6, 8, 10, 12, 14],
            },
            {
                title: 'Triangle',
                soundFile: 'triangle',
                onNotes: [7],
            },
            
        ]
    },
    {
        id: 1,
        title: 'Sequence 2 - 16 Bars',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [0, 4, 9],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [12],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [3, 7, 11],
            }
        ]
    },
    {
        id: 2,
        title: 'Sequence 3 - 32 Bars',
        noteCount: 32,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [4, 12],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [2, 6, 10, 14],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [0, 2, 4, 6, 8, 10, 12, 14],
            }
        ]
    },
    {
        id: 3,
        title: 'Sequence 4 - 64 Bars',
        noteCount: 64,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12, 20],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
            }
        ]
    },
    {
        id: 4,
        title: 'Batman Loop 1 - 32 Bars',
        noteCount: 32,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [],
            },
            {
                title: 'bat strings',
                soundFile: 'bat_strings',
                onNotes: [],
            },
            {
                title: 'bat pad',
                soundFile: 'batmanpad',
                onNotes: [0],
            },
            {
                title: 'batman loop 1',
                soundFile: 'batmanloop1',
                onNotes: [],
            },
            {
                title: 'batman loop 2',
                soundFile: 'batmanloop2',
                onNotes: [],
            },
        ]
    },
]

const soundFiles = {
    'kick': require('./kick10.mp3'),
    'kick2': require('./kick2.wav'),
    'snare': require('./snare1.mp3'),
    'triangle': require('./triangle.mp3'),
    'hh_closed': require('./closedhat1.mp3'),
    'hh_open': require('./openhat1.mp3'),
    'batmanloop1': require('./batmanloop1.wav'),
    'bat_strings': require('./batmanstring160bpm.wav'),
    'batmanloop2': require('./batmanloop2.wav'),
    'batmanpad': require('./batmanpad160bpm.wav')
}

// const soundFilesArray = [
//     {
//     id: 0,
//     'kick': require('./kick10.mp3'),
//     'kick2': require('./kick2.wav'),
//     },
//     {
//     'snare': require('./snare1.mp3'),
//     'triangle': require('./triangle.mp3'),
//     'hh_closed': require('./closedhat1.mp3'),
//     'hh_open': require('./openhat1.mp3'),
//     'batmanloop1': require('./batmanloop1.wav'),
//     'bat_strings': require('./batmanstring160bpm.wav'),
//     'batmanloop2': require('./batmanloop2.wav'),
//     'batmanpad': require('./batmanpad160bpm.wav')
// }
// ]


// const soundPlay = () => {
//     const sound = new Howl ({
//         src,
//         html5: true
//     })
//     sound.play()
// }

export { sequenceList, soundFiles }