/**
 * This file exports the KeyCode enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { InputKeyCode } from './input_key_code.ts';
import { NumPadKeyCode } from './num_pad_key_code.ts';
import { ControlKeyCode } from './control_key_code.ts';
import { NavigationKeyCode } from './navigation_key_code.ts';
import { FunctionKeyCode } from './function_key_code.ts';
import { VolumeKeyCode } from './volume_key_code.ts';
import { MediaKeyCode } from './media_key_code.ts';

/** Specifies the full list of key codes. */
export const KeyCode = {
  ...InputKeyCode,
  ...NumPadKeyCode,
  ...ControlKeyCode,
  ...NavigationKeyCode,
  ...FunctionKeyCode,
  ...VolumeKeyCode,
  ...MediaKeyCode,
} as const;
export type KeyCode = typeof KeyCode[keyof typeof KeyCode];
