/**
 * Tests ControlKeyCode enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  forwardValidity,
  reverseValidity,
} from './fixtures/control_key_code.fixtures.ts';

describe('ControlKeyCode', () => {
  it('should be a valid enum', () => {
    forwardValidity.forEach(([key, value]) => {
      assertEquals(key as number, value);
    });

    reverseValidity.forEach(([key, value]) => {
      assertEquals(key, value);
    });
  });
});
