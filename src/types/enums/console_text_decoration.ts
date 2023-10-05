/**
 * This file exports the ConsoleTextDecoration enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Specifies the console text decoration code integers. */
export enum ConsoleTextDecoration {
  /** Bold text. */
  Bold = 1,

  /** Dim text. */
  Dim = 2,

  /** Underlined text. */
  Underline = 4,

  /** Blinking text. */
  Blink = 5,

  /** Invert foreground and background colors. */
  Invert = 7,

  /** Hidden text. */
  Invisible = 8,

  /** Italic text. */
  Italic = 3,

  /** Reset all text decorations. */
  Reset = 0,

  /** Strikethrough text. */
  Strikethrough = 9,
}
