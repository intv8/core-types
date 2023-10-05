/**
 * This file exports the bMonth enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

/** Specifies the bitwise months of the year. */
export enum bMonth {
  /** Bitwise no months. */
  None = 0,

  /** Bitwise January. */
  January = 1,

  /** Bitwise February. */
  February = 2,

  /** Bitwise March. */
  March = 4,

  /** Bitwise April. */
  April = 8,

  /** Bitwise May. */
  May = 16,

  /** Bitwise June. */
  June = 32,

  /** Bitwise July. */
  July = 64,

  /** Bitwise August. */
  August = 128,

  /** Bitwise September. */
  September = 256,

  /** Bitwise October. */
  October = 512,

  /** Bitwise November. */
  November = 1024,

  /** Bitwise December. */
  December = 2048,

  /**
   * Bitwise fiscal first quarter (January, February, March).
   */
  FiscalQ1 = 7,

  /**
   * Bitwise fiscal second quarter (April, May, June).
   */
  FiscalQ2 = 56,

  /**
   * Bitwise fiscal third quarter (July, August, September).
   */
  FiscalQ3 = 448,

  /**
   * Bitwise fiscal fourth quarter (October, November, December).
   */
  FiscalQ4 = 3584,

  /** Bitwise all months. */
  All = 4095,
}
