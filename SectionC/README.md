# Section C: Code Challenge - ISBN Validation and Conversion

## Problem Description

You are provided with a TypeScript implementation to validate and convert ISBN (International Standard Book Number) from ISBN-10 to ISBN-13 format. ISBN is a unique identifier for books. The provided solution includes functions to check the validity of ISBN-10 and ISBN-13, and to convert ISBN-10 to ISBN-13.

## Solution Overview

The solution consists of two main functions:

1. `isValidISBN10(isbn: string): boolean`: Validates if an ISBN-10 is valid by performing calculations based on the ISBN-10 format and check digit.

2. `isValidISBN13(isbn: string): boolean`: Validates if an ISBN-13 is valid by performing calculations based on the ISBN-13 format and check digit.

3. `convertISBN10ToISBN13(isbn10: string): string`: Converts a valid ISBN-10 to ISBN-13 format by appending the necessary prefix and recalculating the check digit.

4. `validateAndConvertISBN(isbn: string): string`: Main function that takes an ISBN (in any format) as input and returns the converted ISBN-13 if it's a valid ISBN-10, returns "Valid" if it's a valid ISBN-13, and returns "Invalid" otherwise.


### Cloning, Building, Testing, and Running

Follow these steps to clone the repository, build the solution, run tests, and execute the code:

1. **Clone the Repository**:
   
   Open your terminal and navigate to the desired directory:

   ```sh
   cd /path/to/your/directory
   ```

   Clone the repository:

   ```sh
   git clone https://github.com/PresidentIsmail/HyperionDev-Coding-Mentor-Assessment.git
   ```

   Navigate to the SectionC folder:

   ```sh
   cd HyperionDev-Coding-Mentor-Assessment/SectionC
   ```

2. **Install TypeScript (if not installed)**:

   If TypeScript is not installed globally, you can install it using npm:

   ```sh
   npm install -g typescript
   ```

3. **Build the Solution**:

   Compile TypeScript code to JavaScript:

   ```sh
   tsc
   ```

4. **Run the Tests**:

   Run the test script to validate the solution:

   ```sh
   node test.js
   ```

   You should see the output of the test cases in the terminal.


### Space Complexity

The worst-case space complexity for this solution is O(1), constant space complexity. The solution does not depend on the size of the input but only performs calculations based on the input characters.

## Operating Systems

This solution can be built, tested, and run on the following operating systems:

- Linux
- macOS
- Windows


