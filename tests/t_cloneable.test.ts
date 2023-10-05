/**
 * Tests TCloneable interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/t_cloneable.fixtures.ts';

describe('TCloneable', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, expected]) => {
      const actual = instance.clone();

      assertEquals(actual, expected);
    });
  });
});
