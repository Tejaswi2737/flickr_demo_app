import MockDate from 'mockdate';

import {
    calenderConfig,
    formatAuthorName,
    getTags,
} from './helpers';

test('return author name', () => {
    expect(formatAuthorName('"Name"')).toBe('Name');
});

test('adds 1 + 2 to equal 3', () => {
    expect(formatAuthorName('hello"Name")')).toBe('Name');
});

test('get getTags list', () => {
    expect(getTags('hello girl dog cat'))
        .toBe(['hello', 'girl', 'dog', 'cat']);
});

test('get getTags list', () => {
    expect(getTags('hello , girl dog cat'))
        .toBe(['hello', 'girl', 'dog', 'cat']);
});

test('get getTags list', () => {
    expect(getTags('hello ,     girl dog cat'))
        .toBe(['hello', 'girl', 'dog', 'cat']);
});

MockDate.set('Feb 24 2022 21:41:02');

test('calender formats', () => {
    expect(calenderConfig('2022-02-24T14:38:46-08:00'))
        .toBe();
});
