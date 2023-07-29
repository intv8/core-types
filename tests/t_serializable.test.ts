/**
 * Tests TSerializable interface.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/t_serializable.fixtures.ts';

describe('TSerializable', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, expected]) => {
      const actual = instance.serialize();

      assertEquals(actual, expected);
    });
  });
});
