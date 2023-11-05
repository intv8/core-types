/**
 * This file contains default comparer instances and utility classes.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ComparisonResult, type TComparer } from './types/mod.ts';

/** Sorts a list of object by a specific property. */
export class PropertyComparer<T> implements TComparer<T> {
  /** Returns a new instance of the PropertyComparer class. */
  public static for<T>(
    property: keyof T,
    reverse = false,
  ): PropertyComparer<T> {
    return new PropertyComparer<T>(property, reverse);
  }

  /** Creates a new instance of the PropertyComparer class. */
  constructor(
    private readonly property: keyof T,
    private readonly defaultReverse: boolean = false,
  ) {}

  /** Compares two objects by the property. */
  public compare(
    a: T,
    b: T,
    reverse: boolean = this.defaultReverse,
  ): ComparisonResult {
    const aProp = a[this.property];
    const bProp = b[this.property];

    if (aProp < bProp) {
      return reverse ? ComparisonResult.Greater : ComparisonResult.Lesser;
    }

    if (aProp > bProp) {
      return reverse ? ComparisonResult.Lesser : ComparisonResult.Greater;
    }

    return ComparisonResult.Equal;
  }
}
