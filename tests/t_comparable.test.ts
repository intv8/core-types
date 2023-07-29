/**
 * Tests TComparable interface.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/t_comparable.fixtures.ts';

describe('TComparable', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, other, reverse, expected]) => {
      const actual = instance.compareTo(other, reverse);

      assertEquals(actual, expected);
    });
  });
});
