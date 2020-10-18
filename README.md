# The Knight's Tour Problem
According to Wikipedia
>A **knight's tour** is a sequence of moves of a knight on a chessboard such that the knight visits every square exactly once. If the knight ends on a square that is one knight's move from the beginning square (so that it could tour the board again immediately, following the same path), the tour is closed; otherwise, it is open

According to me
> It's one of those problems that bring you hair-pulling disorder if you tried to solve it on your own instead of assigning computers to solve it

# Warnsdorff’s Rule
Is a simple heuristic technique for solving the Knights Tour problem. And its the used technique in this visualization.

It consists of two steps:
1. Find the list of unvisited legal knight moves from the surrounding squares.
2. Choose the one with the lowest accessibility.

Accessibility
: The accessibility of square is the number of squares accessible from x.

# The Fun Facts
* On an 8 x 8 board, it has been proven that there are 26,534,728,821,064 closed-path tours!
* The number of open path tours is unknown until this day of age!
* And above all, despite all these absurd numbers of tours, non can produce a [magic square]([https://en.wikipedia.org/wiki/Magic_square](https://en.wikipedia.org/wiki/Magic_square)), only [semi-magic squares]([https://en.wikipedia.org/wiki/Magic_square#Additive-multiplicative_magic_and_semimagic_squares](https://en.wikipedia.org/wiki/Magic_square#Additive-multiplicative_magic_and_semimagic_squares))!
