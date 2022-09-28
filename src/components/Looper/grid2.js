import React from 'react'
import Cell from './cell'

const grid2 = (props) => {
    return (
        <div rows={4} columns={16}>
        {props.sequence.map((line, i) =>
        line.map((time, j) => (
            <Cell
            key={i + j}
            column={j + 1}
            row={i + 1}
            activated={props.sequence[i][j]["activated"]}
            triggered={props.sequence[i][j]["triggered"]}
            onClick={() => props.toggleStep(i, j)}
            />
        ))
        )}
    </div>
    )
    }

export default grid2