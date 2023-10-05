/**
 * Tests KeyCode enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  forwardValidity,
  reverseValidity,
} from './fixtures/key_code.fixtures.ts';

describe('KeyCode', () => {
  it('should be a valid enum', () => {
    forwardValidity.forEach(([key, value]) => {
      assertEquals(key as number, value);
    });

    reverseValidity.forEach(([key, value]) => {
      assertEquals(key, value);
    });
  });
});
