/**
 * Test fixtures for the FunctionKeyCode enum.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { FunctionKeyCode } from '../../mod.ts';

export const forwardValidity = [
  [FunctionKeyCode.F1, 112],
  [FunctionKeyCode.F2, 113],
  [FunctionKeyCode.F3, 114],
  [FunctionKeyCode.F4, 115],
  [FunctionKeyCode.F5, 116],
  [FunctionKeyCode.F6, 117],
  [FunctionKeyCode.F7, 118],
  [FunctionKeyCode.F8, 119],
  [FunctionKeyCode.F9, 120],
  [FunctionKeyCode.F10, 121],
  [FunctionKeyCode.F11, 122],
  [FunctionKeyCode.F12, 123],
  [FunctionKeyCode.F13, 124],
  [FunctionKeyCode.F14, 125],
  [FunctionKeyCode.F15, 126],
  [FunctionKeyCode.F16, 127],
  [FunctionKeyCode.F17, 128],
  [FunctionKeyCode.F18, 129],
  [FunctionKeyCode.F19, 130],
  [FunctionKeyCode.F20, 131],
  [FunctionKeyCode.F21, 132],
  [FunctionKeyCode.F22, 133],
  [FunctionKeyCode.F23, 134],
  [FunctionKeyCode.F24, 135],
] as const;

export const reverseValidity = [
  [FunctionKeyCode[FunctionKeyCode.F1], 'F1'],
  [FunctionKeyCode[FunctionKeyCode.F2], 'F2'],
  [FunctionKeyCode[FunctionKeyCode.F3], 'F3'],
  [FunctionKeyCode[FunctionKeyCode.F4], 'F4'],
  [FunctionKeyCode[FunctionKeyCode.F5], 'F5'],
  [FunctionKeyCode[FunctionKeyCode.F6], 'F6'],
  [FunctionKeyCode[FunctionKeyCode.F7], 'F7'],
  [FunctionKeyCode[FunctionKeyCode.F8], 'F8'],
  [FunctionKeyCode[FunctionKeyCode.F9], 'F9'],
  [FunctionKeyCode[FunctionKeyCode.F10], 'F10'],
  [FunctionKeyCode[FunctionKeyCode.F11], 'F11'],
  [FunctionKeyCode[FunctionKeyCode.F12], 'F12'],
  [FunctionKeyCode[FunctionKeyCode.F13], 'F13'],
  [FunctionKeyCode[FunctionKeyCode.F14], 'F14'],
  [FunctionKeyCode[FunctionKeyCode.F15], 'F15'],
  [FunctionKeyCode[FunctionKeyCode.F16], 'F16'],
  [FunctionKeyCode[FunctionKeyCode.F17], 'F17'],
  [FunctionKeyCode[FunctionKeyCode.F18], 'F18'],
  [FunctionKeyCode[FunctionKeyCode.F19], 'F19'],
  [FunctionKeyCode[FunctionKeyCode.F20], 'F20'],
  [FunctionKeyCode[FunctionKeyCode.F21], 'F21'],
  [FunctionKeyCode[FunctionKeyCode.F22], 'F22'],
  [FunctionKeyCode[FunctionKeyCode.F23], 'F23'],
  [FunctionKeyCode[FunctionKeyCode.F24], 'F24'],
] as const;
