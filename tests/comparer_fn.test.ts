/**
 * Tests ComparerFn type.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/comparer_fn.fixtures.ts';

describe('ComparerFn', () => {
  it('should be valid', () => {
    fixtures.forEach(([compare, a, b, reverse, expected]) => {
      const actual = compare(a, b, reverse);

      assertEquals(actual, expected);
    });
  });
});
