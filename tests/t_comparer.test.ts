/**
 * Tests TComparer interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/t_comparer.fixtures.ts';

describe('TComparer', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, a, b, reverse, expected]) => {
      const actual = instance.compare(a, b, reverse);

      assertEquals(actual, expected);
    });
  });
});
