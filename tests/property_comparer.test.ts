/**
 * Tests PropertyComparer class.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/property_comparer.fixtures.ts';

describe('PropertyComparer', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, a, b, reverse, expected], i) => {
      const actual = instance.compare(a, b, reverse);

      assertEquals(actual, expected, `${i}`);
    });
  });
});
