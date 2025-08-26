// TSP_stimuli.js
// Array of problems: each has an id, prompt (HTML ok), and solution.
window.TSP_STIMULI_B2 = [
  {
    id: "b2_01",
    cities: ["City 1","City 2","City 3","City 4","City 5"],
    matrix: [
      [0,  100,  6,  4,  8],
      [100,  0,  7,  3,  5],
      [6,  7,  0,  2,  6],
      [4,  3,  2,  0,  7],
      [8,  5,  6,  7,  0]
    ],
    prompt: "<p>Find the shortest tour visiting all cities once and returning to start.</p>"
  },
  {
    id: 'b2_02',
    cities: ["City 1","City 2","City 3","City 4","City 5"],
    matrix: [
      [0,  9,  6,  4,  8],
      [9,  0,  7,  3,  5],
      [6,  7,  0,  2,  6],
      [4,  3,  2,  0,  7],
      [8,  5,  6,  7,  0]
    ],
    prompt: "<p>Find the shortest tour visiting all cities once and returning to start.</p>"
  }
];
