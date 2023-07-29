/**
 * Tests NumPadKeyCode enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { assertEquals, describe, it } from '../dev_deps.ts';

import {
  forwardValidity,
  reverseValidity,
} from './fixtures/num_pad_key_code.fixtures.ts';

describe('NumPadKeyCode', () => {
  it('should be a valid enum', () => {
    forwardValidity.forEach(([key, value]) => {
      assertEquals(key as number, value);
    });

    reverseValidity.forEach(([key, value]) => {
      assertEquals(key, value);
    });
  });
});
