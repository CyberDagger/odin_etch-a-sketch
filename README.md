# odin_etch-a-sketch

Grid-based drawing project, part of The Odin Project curriculum.

Grid is 16x16 by default, but can be resized when reset.

Although other students chose to implement a static color for each cell determined when the grid is generated, my interpretation of the assignment was that the color should change every time the cell is interacted with, so I had the color randomizer be part of the hover event instead of the grid creation routine.