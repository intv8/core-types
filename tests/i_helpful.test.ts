/**
 * Tests IHelpful interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import { fixtures } from './fixtures/i_helpful.fixtures.ts';

describe('IHelpful', () => {
  it('should be valid', () => {
    fixtures.forEach(([instance, expected]) => {
      const actual = instance.helpUrl;

      assertEquals(actual, expected);
    });
  });
});
