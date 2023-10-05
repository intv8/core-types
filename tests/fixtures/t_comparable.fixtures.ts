/**
 * Test fixtures for the TComparable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ComparisonResult, TComparable } from '../../mod.ts';

class ComparableTest implements TComparable<ComparableTest> {
  constructor(public readonly name: string) {}

  public compareTo(
    other: ComparableTest,
    reverse?: boolean | undefined,
  ): ComparisonResult {
    if (reverse) {
      if (this.name < other.name) {
        return ComparisonResult.Greater;
      } else if (this.name > other.name) {
        return ComparisonResult.Lesser;
      } else {
        return ComparisonResult.Equal;
      }
    } else {
      if (this.name < other.name) {
        return ComparisonResult.Lesser;
      } else if (this.name > other.name) {
        return ComparisonResult.Greater;
      } else {
        return ComparisonResult.Equal;
      }
    }
  }
}

const foo = new ComparableTest('foo');
const bar = new ComparableTest('bar');
const baz = new ComparableTest('baz');

export const fixtures = [
  [
    foo,
    foo,
    false,
    ComparisonResult.Equal,
  ],
  [
    foo,
    bar,
    false,
    ComparisonResult.Greater,
  ],
  [
    foo,
    baz,
    false,
    ComparisonResult.Greater,
  ],
  [
    bar,
    foo,
    false,
    ComparisonResult.Lesser,
  ],
  [
    bar,
    bar,
    false,
    ComparisonResult.Equal,
  ],
  [
    bar,
    baz,
    false,
    ComparisonResult.Lesser,
  ],
  [
    baz,
    foo,
    false,
    ComparisonResult.Lesser,
  ],
  [
    baz,
    bar,
    false,
    ComparisonResult.Greater,
  ],
  [
    baz,
    baz,
    false,
    ComparisonResult.Equal,
  ],
  [
    foo,
    foo,
    true,
    ComparisonResult.Equal,
  ],
  [
    foo,
    bar,
    true,
    ComparisonResult.Lesser,
  ],
  [
    foo,
    baz,
    true,
    ComparisonResult.Lesser,
  ],
  [
    bar,
    foo,
    true,
    ComparisonResult.Greater,
  ],
  [
    bar,
    bar,
    true,
    ComparisonResult.Equal,
  ],
  [
    bar,
    baz,
    true,
    ComparisonResult.Greater,
  ],
  [
    baz,
    foo,
    true,
    ComparisonResult.Greater,
  ],
  [
    baz,
    bar,
    true,
    ComparisonResult.Lesser,
  ],
  [
    baz,
    baz,
    true,
    ComparisonResult.Equal,
  ],
] as const;
