import React from "react";
// import styled from "styled-components";
import Frame from "./frame";
import Cell from "./cell";

const Grid = ({ sequence, toggleStep }) => (
  <div rows={4} columns={16}>
    {sequence.map((line, i) =>
      line.map((time, j) => (
        <div
          key={i + j}
          column={j + 1}
          row={i + 1}
          activated={sequence[i][j]["activated"]}
          triggered={sequence[i][j]["triggered"]}
          onClick={() => toggleStep(i, j)}
        />
      ))
    )}
  </div>
);

export default Grid;