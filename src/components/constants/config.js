const sequenceList = [
    {
        id: 0,
        title: 'Sequence 1',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick1',
                onNotes: [0, 2, 4, 6, 8, 10, 12],
            },
            {
                title: 'Snare',
                soundFile: 'snare',
                onNotes: [2, 4, 10, 12, 15],
            },
            {
                title: 'Open Hat',
                soundFile: 'hh_open',
                onNotes: [8],
            },
            {
                title: 'Closed Hat',
                soundFile: 'hh_closed',
                onNotes: [0, 4, 5, 6, 7, 12, 14],
            }
        ]
    },
    {
        id: 1,
        title: 'Sequence 2',
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
        title: 'Sequence 3',
        noteCount: 16,
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
        title: 'Sequence 4',
        noteCount: 16,
        trackList: [
            {
                title: 'Kick',
                soundFile: 'kick',
                onNotes: [0, 4, 8, 12],
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
    }
]

const soundFiles = {
    'kick': require('./kick10.wav'),
    'snare': require('./snare1.wav'),
    'hh_open': '/sounds/hh_open.wav',
    'hh_closed': require('./closedhat1.mp3'),
    'kick1' : require('https://github.com/IntuitiveHarmony/breeze_front/blob/jey2/src/components/constants/kick10.wav')

}

const kickFiles = [
    {sound: "https://github.com/IntuitiveHarmony/breeze_front/blob/jey2/src/components/constants/kick10.wav", label: 'Kick1'}
]

// const soundPlay = () => {
//     const sound = new Howl ({
//         src,
//         html5: true
//     })
//     sound.play()
// }

export { sequenceList, soundFiles }