/**
 * Test fixtures for the ConsoleColor enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ConsoleColor } from '../../mod.ts';

export const forwardValidity = [
  [ConsoleColor.BgBlack, 40],
  [ConsoleColor.BgBlue, 44],
  [ConsoleColor.BgCyan, 46],
  [ConsoleColor.BgGray, 100],
  [ConsoleColor.BgGreen, 42],
  [ConsoleColor.BgMagenta, 45],
  [ConsoleColor.BgRed, 41],
  [ConsoleColor.BgWhite, 47],
  [ConsoleColor.BgYellow, 43],
  [ConsoleColor.FgBlack, 30],
  [ConsoleColor.FgBlue, 34],
  [ConsoleColor.FgCyan, 36],
  [ConsoleColor.FgGray, 90],
  [ConsoleColor.FgGreen, 32],
  [ConsoleColor.FgMagenta, 35],
  [ConsoleColor.FgRed, 31],
  [ConsoleColor.FgWhite, 37],
  [ConsoleColor.FgYellow, 33],
] as const;

export const reverseValidity = [
  [ConsoleColor[ConsoleColor.BgBlack], 'BgBlack'],
  [ConsoleColor[ConsoleColor.BgBlue], 'BgBlue'],
  [ConsoleColor[ConsoleColor.BgCyan], 'BgCyan'],
  [ConsoleColor[ConsoleColor.BgGray], 'BgGray'],
  [ConsoleColor[ConsoleColor.BgGreen], 'BgGreen'],
  [ConsoleColor[ConsoleColor.BgMagenta], 'BgMagenta'],
  [ConsoleColor[ConsoleColor.BgRed], 'BgRed'],
  [ConsoleColor[ConsoleColor.BgWhite], 'BgWhite'],
  [ConsoleColor[ConsoleColor.BgYellow], 'BgYellow'],
  [ConsoleColor[ConsoleColor.FgBlack], 'FgBlack'],
  [ConsoleColor[ConsoleColor.FgBlue], 'FgBlue'],
  [ConsoleColor[ConsoleColor.FgCyan], 'FgCyan'],
  [ConsoleColor[ConsoleColor.FgGray], 'FgGray'],
  [ConsoleColor[ConsoleColor.FgGreen], 'FgGreen'],
  [ConsoleColor[ConsoleColor.FgMagenta], 'FgMagenta'],
  [ConsoleColor[ConsoleColor.FgRed], 'FgRed'],
  [ConsoleColor[ConsoleColor.FgWhite], 'FgWhite'],
  [ConsoleColor[ConsoleColor.FgYellow], 'FgYellow'],
] as const;
