import MockDate from 'mockdate';
import moment from 'moment';

import {
    calenderConfig,
    formatAuthorName,
    getTags,
} from './helpers';

describe('formatAuthorName', () => {
    it('should return formatted author name', () => {
        expect(formatAuthorName('"Name"')).toBe('Name');
        expect(formatAuthorName('hello"Name")')).toBe('Name');
    });
});

describe('get tags', () => {
    it('should return list of all tags', () => {
        expect(getTags('hello girl dog cat')).toStrictEqual(['hello', 'girl', 'dog', 'cat']);
        expect(getTags('hello , girl dog cat')).toStrictEqual(['hello', 'girl', 'dog', 'cat']);
        expect(getTags('hello ,     girl dog cat')).toStrictEqual(['hello', 'girl', 'dog', 'cat']);
    });
});

describe('calender formats', () => {
    MockDate.set('Feb 24 2022 21:41:02');
    moment.locale('en');
    it('should return formatted calender timestamp', () => {
        expect(calenderConfig('2022-02-25T14:38:46-08:00')).toBe('Saturday at 9:38 AM');

        expect(calenderConfig('2022-02-23T14:38:46-08:00')).toBe('9:38 AM');

        expect(calenderConfig('2022-02-20T14:38:46-08:00')).toBe('Mon 9:38 AM');

        expect(calenderConfig('2022-02-16T14:38:46-08:00')).toBe('17 Feb 2022 9:38 AM');
    });
});
