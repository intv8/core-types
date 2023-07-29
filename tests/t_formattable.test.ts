/**
 * Tests TFormattable interface.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/t_formattable.fixtures.ts';

describe('TFormattable', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, format, expected]) => {
      const actual = instance.format(format);

      assertEquals(actual, expected);
    });
  });
});
