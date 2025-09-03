// TSP_stimuli.js
// Array of problems: each has an id, prompt (HTML ok), and solution.
window.TSP_STIMULI_B1 = [
  {
    id: "b1_01",
    cities: ["City 1","City 2","City 3","City 4","City 5", "City 6"],
    matrix: [[0, 4, 6, 3, 3, 6], [4, 0, 3, 4, 6, 7], [6, 3, 0, 6, 8, 7], [3, 4, 6, 0, 3, 3], [3, 6, 8, 3, 0, 5], [6, 7, 7, 3, 5, 0]],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  },
  {
    id: 'b1_02',
    cities: ["City 1","City 2","City 3","City 4","City 5"],
    matrix: [[0, 4, 2, 2, 2], [4, 0, 5, 6, 5], [2, 5, 0, 3, 1], [2, 6, 3, 0, 2], [2, 5, 1, 2, 0]],
    prompt: "<p><strong>Distances Between Cities:</strong></p>"
  }
];
