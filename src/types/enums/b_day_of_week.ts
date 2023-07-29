/**
 * This file exports the bDayOfWeek enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

/** Specifies the bitwise days of the week. */
export enum bDayOfWeek {
  /** Bitwise no day of week. */
  None = 0,

  /** Bitwise Sunday. */
  Sunday = 1,

  /** Bitwise Monday. */
  Monday = 2,

  /** Bitwise Tuesday. */
  Tuesday = 4,

  /** Bitwise Wednesday. */
  Wednesday = 8,

  /** Bitwise Thursday. */
  Thursday = 16,

  /** Bitwise Friday. */
  Friday = 32,

  /** Bitwise Saturday. */
  Saturday = 64,

  /** Bitwise weekday. */
  Weekday = 62,

  /** Bitwise weekend. */
  Weekend = 65,

  /** Bitwise all days of the week. */
  All = 127,
}
