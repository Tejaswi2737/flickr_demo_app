import moment from 'moment';

export const formatAuthorName = (name) => name.split('"')[1].split('"')[0]; // returns 'two'

export const formatImageUrl = (url) => url;

export const getTags = (tags) => tags.split((/[ ,]+/));

export const calenderConfig = (myDate) => moment(myDate).calendar(null, {
    sameDay: 'h:mm A',
    lastWeek: 'ddd h:mm A',
    sameElse: 'D MMM YYYY h:mm A',
});
