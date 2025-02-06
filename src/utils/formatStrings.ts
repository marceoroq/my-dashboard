/**
 * Formats a string or an array of strings by removing punctuation,
 * replacing spaces with dashes, combining all elements into a single string
 * separated by dashes, and truncating the result to a maximum of 25 characters.
 * Ensures that the final string does not end with a dash. This function is used
 * to build slug URLs
 *
 * @param input - A string or an array of strings to be formatted.
 * @returns A single formatted string with all elements processed, joined by dashes,
 *          truncated to 25 characters, and without a trailing dash.
 *
 * @example
 * const array = ["Pepe", "Pepe H. Hongo", "Hongo, Pepe", "Francis's Joseph, Martin"];
 * const result = formatStrings(array);
 * console.log(result); // "Pepe-Pepe-H-Hongo-Ho"
 *
 * const singleString = "Pepe H. Hongo";
 * const result2 = formatStrings(singleString);
 * console.log(result2); // "Pepe-H-Hongo"
 */
export function formatStrings(input: string | string[]): string {
  const names = Array.isArray(input) ? input : [input]; // Ensure input is an array
  let formatted = names
    .map(
      (name) =>
        name
          .replace(/[^a-zA-Z0-9\s]/g, "") // Removes punctuation and non-alphabetic characters
          .replace(/\s+/g, "-") // Replaces spaces with dashes
    )
    .join("-"); // Joins all formatted names with dashes

  // Truncate to a maximum of 25 characters
  formatted = formatted.slice(0, 25);

  // Ensure it doesn't end with a dash
  if (formatted.endsWith("-")) {
    formatted = formatted.slice(0, -1);
  }

  return formatted;
}
