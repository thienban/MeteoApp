import request from 'request';

export const forecast = (lattitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/21eccf8b56e7dac16fe64ff1fcbaa3f8/'+ lattitude + ',' + longitude;
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to log', undefined);
        } else if (response.body.error) {
            callback('Unable to find an location', undefined);
        } else {
            callback(undefined, response.body.daily.data[0].summary +
                ' It is currently ' + response.body.currently.temperature +
                 ' degress out. There is a ' +
                  response.body.currently.precipProbability +
                  '% chance of rain.');
        }
    })
}
