/**
 * Test fixtures for the ComparerFn interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ComparerFn, ComparisonResult } from '../../mod.ts';

const comparerFn: ComparerFn<string> = (a, b, reverse) => {
  if (reverse) {
    if (a < b) {
      return ComparisonResult.Greater;
    } else if (a > b) {
      return ComparisonResult.Lesser;
    } else {
      return ComparisonResult.Equal;
    }
  } else {
    if (a < b) {
      return ComparisonResult.Lesser;
    } else if (a > b) {
      return ComparisonResult.Greater;
    } else {
      return ComparisonResult.Equal;
    }
  }
};

const instance = comparerFn;

export const fixtures = [
  [
    instance,
    'foo',
    'foo',
    false,
    ComparisonResult.Equal,
  ],
  [
    instance,
    'foo',
    'bar',
    false,
    ComparisonResult.Greater,
  ],
  [
    instance,
    'foo',
    'baz',
    false,
    ComparisonResult.Greater,
  ],
  [
    instance,
    'bar',
    'foo',
    false,
    ComparisonResult.Lesser,
  ],
  [
    instance,
    'bar',
    'bar',
    false,
    ComparisonResult.Equal,
  ],
  [
    instance,
    'bar',
    'baz',
    false,
    ComparisonResult.Lesser,
  ],
  [
    instance,
    'baz',
    'foo',
    false,
    ComparisonResult.Lesser,
  ],
  [
    instance,
    'baz',
    'bar',
    false,
    ComparisonResult.Greater,
  ],
  [
    instance,
    'baz',
    'baz',
    false,
    ComparisonResult.Equal,
  ],
  [
    instance,
    'foo',
    'foo',
    true,
    ComparisonResult.Equal,
  ],
  [
    instance,
    'foo',
    'bar',
    true,
    ComparisonResult.Lesser,
  ],
  [
    instance,
    'foo',
    'baz',
    true,
    ComparisonResult.Lesser,
  ],
  [
    instance,
    'bar',
    'foo',
    true,
    ComparisonResult.Greater,
  ],
  [
    instance,
    'bar',
    'bar',
    true,
    ComparisonResult.Equal,
  ],
  [
    instance,
    'bar',
    'baz',
    true,
    ComparisonResult.Greater,
  ],
  [
    instance,
    'baz',
    'foo',
    true,
    ComparisonResult.Greater,
  ],
  [
    instance,
    'baz',
    'bar',
    true,
    ComparisonResult.Lesser,
  ],
  [
    instance,
    'baz',
    'baz',
    true,
    ComparisonResult.Equal,
  ],
] as const;
