/**
 * Test fixtures for the NumPadKeyCode enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { NumPadKeyCode } from '../../mod.ts';

export const forwardValidity = [
  [NumPadKeyCode.NumZero, 96],
  [NumPadKeyCode.NumOne, 97],
  [NumPadKeyCode.NumTwo, 98],
  [NumPadKeyCode.NumThree, 99],
  [NumPadKeyCode.NumFour, 100],
  [NumPadKeyCode.NumFive, 101],
  [NumPadKeyCode.NumSix, 102],
  [NumPadKeyCode.NumSeven, 103],
  [NumPadKeyCode.NumEight, 104],
  [NumPadKeyCode.NumNine, 105],
  [NumPadKeyCode.NumDecimal, 110],
  [NumPadKeyCode.NumDivide, 111],
  [NumPadKeyCode.NumMultiply, 106],
  [NumPadKeyCode.NumSubtract, 109],
  [NumPadKeyCode.NumAdd, 107],
  [NumPadKeyCode.Enter, 13],
] as const;

export const reverseValidity = [
  [NumPadKeyCode[NumPadKeyCode.NumZero], 'NumZero'],
  [NumPadKeyCode[NumPadKeyCode.NumOne], 'NumOne'],
  [NumPadKeyCode[NumPadKeyCode.NumTwo], 'NumTwo'],
  [NumPadKeyCode[NumPadKeyCode.NumThree], 'NumThree'],
  [NumPadKeyCode[NumPadKeyCode.NumFour], 'NumFour'],
  [NumPadKeyCode[NumPadKeyCode.NumFive], 'NumFive'],
  [NumPadKeyCode[NumPadKeyCode.NumSix], 'NumSix'],
  [NumPadKeyCode[NumPadKeyCode.NumSeven], 'NumSeven'],
  [NumPadKeyCode[NumPadKeyCode.NumEight], 'NumEight'],
  [NumPadKeyCode[NumPadKeyCode.NumNine], 'NumNine'],
  [NumPadKeyCode[NumPadKeyCode.NumDecimal], 'NumDecimal'],
  [NumPadKeyCode[NumPadKeyCode.NumDivide], 'NumDivide'],
  [NumPadKeyCode[NumPadKeyCode.NumMultiply], 'NumMultiply'],
  [NumPadKeyCode[NumPadKeyCode.NumSubtract], 'NumSubtract'],
  [NumPadKeyCode[NumPadKeyCode.NumAdd], 'NumAdd'],
  [NumPadKeyCode[NumPadKeyCode.Enter], 'Enter'],
] as const;
