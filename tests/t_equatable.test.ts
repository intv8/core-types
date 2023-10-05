/**
 * Tests TEquatable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/t_equatable.fixtures.ts';

describe('TEquatable', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, other, expected]) => {
      const actual = instance.equalTo(other);

      assertEquals(actual, expected);
    });
  });
});
