/**
 * Truncates a given text to a specified word limit and appends "..." if the limit is exceeded.
 *
 * @param text - The original string to be truncated.
 * @param wordLimit - The maximum number of words to display before truncating.
 * @returns A truncated version of the text followed by "..." if the word limit is exceeded.
 *
 * Example:
 * ```typescript
 * const result = truncateText("This is a long text that needs truncation", 5);
 * console.log(result); // Output: "This is a long text..."
 * ```
 */
export function truncateText(text: string, wordLimit: number): string {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
}
