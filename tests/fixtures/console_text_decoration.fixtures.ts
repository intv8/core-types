/**
 * Test fixtures for the ConsoleColor enum.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { ConsoleTextDecoration } from '../../mod.ts';

export const forwardValidity = [
  [ConsoleTextDecoration.Blink, 5],
  [ConsoleTextDecoration.Bold, 1],
  [ConsoleTextDecoration.Dim, 2],
  [ConsoleTextDecoration.Invert, 7],
  [ConsoleTextDecoration.Invisible, 8],
  [ConsoleTextDecoration.Italic, 3],
  [ConsoleTextDecoration.Reset, 0],
  [ConsoleTextDecoration.Strikethrough, 9],
  [ConsoleTextDecoration.Underline, 4],
] as const;

export const reverseValidity = [
  [ConsoleTextDecoration[ConsoleTextDecoration.Blink], 'Blink'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Bold], 'Bold'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Dim], 'Dim'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Invert], 'Invert'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Invisible], 'Invisible'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Italic], 'Italic'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Reset], 'Reset'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Strikethrough], 'Strikethrough'],
  [ConsoleTextDecoration[ConsoleTextDecoration.Underline], 'Underline'],
] as const;
