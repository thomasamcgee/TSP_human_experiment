// TSP_stimuli.js
// Array of problems: each has an id, prompt (HTML ok), and solution.
window.TSP_STIMULI_B2 = [
  {
    id: "b2_01",
    cities: ["City 1","City 2","City 3","City 4","City 5"],
    matrix: [[0, 3, 2, 6, 6], [3, 0, 2, 3, 3], [2, 2, 0, 4, 4], [6, 3, 4, 0, 1], [6, 3, 4, 1, 0]],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  },
  {
    id: 'b2_02',
    cities: ["City 1","City 2","City 3","City 4"],
    matrix: [[0, 4, 4, 5], [4, 0, 7, 7], [4, 7, 0, 2], [5, 7, 2, 0]],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  }
];
