/**
 * This file exports the ComparisonResult enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

/** Specifies the comparison result of two values. */
export enum ComparisonResult {
  /** Two values are equal. */
  Equal = 0,

  /** First value is less than the second value. */
  Lesser = -1,

  /** First value is greater than the second value. */
  Greater = 1,
}
