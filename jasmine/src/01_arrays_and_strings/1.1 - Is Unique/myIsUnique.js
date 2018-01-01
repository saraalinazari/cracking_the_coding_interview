/*
 * "Cracking the Coding Interview  - Gayle Laakman McDowell"
 * <name of challenge> <version number>
 * Copyright 2017 whitefires0 / Rick Hallett
 *
 * Freely distributable under the creative commons license.
 *
 * Full details and documentation:
 * http://www.crackingthecodinginterview.com/
 */
//====================================================================================================
	/* --- Project Specification --- */
//====================================================================================================

/* Implement an algorithm to see if a string has all unique characters. 
 * What if you cannot use additional data structures?*/
    
    
//====================================================================================================
    /* --- Project Implementation --- */
//====================================================================================================

/**
 * Try drawing an example
 * State/code the brute force option, type out potential stages
 * Optimise if possible (sorting, data types)
 * Stress testing
 * Remove bottlenecks, unneccessary work, duplicate work
 * If struggling, think of common sense, real world examples and how you might work them out as a human not a computer
 * Simplify and generalise, start out with the most simple base cases and work upwards incrementallly
 * 
*/

/**
 * Brute force - check each letter against every other letter, starting with index 0 and incrementing by one until all possible comparisons have been achieved. If index -1 is reached, return true. On finding a duplicate character, return false.
 * Is it possible/wise to do this recursively? Try both.
 */

 function myIsUnique(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            counter++;
            if (string[i] === string[j]) {
                //if match then string is not unique
                console.log(counter);
                return false;
            }
        }
    }
    //if no match then string is unique
    return true;
 }

