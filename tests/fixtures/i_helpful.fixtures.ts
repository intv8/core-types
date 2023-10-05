/**
 * Test fixtures for the IHelpful interface.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

import { IHelpful } from '../../mod.ts';

class HelpfulTest1 implements IHelpful {
  public helpUrl = 'https://www.example.com';
}

class HelpfulTest2 implements IHelpful {
  constructor(protected name: string) {}

  public get helpUrl(): string {
    return `https://www.example.com/${this.name}`;
  }
}

export const fixtures = [
  [new HelpfulTest1(), 'https://www.example.com'],
  [new HelpfulTest2('foo'), 'https://www.example.com/foo'],
  [new HelpfulTest2('bar'), 'https://www.example.com/bar'],
  [new HelpfulTest2('baz'), 'https://www.example.com/baz'],
] as const;
