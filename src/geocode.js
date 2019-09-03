import request from 'request'

export const geoCode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoidGhpZW5iYW4iLCJhIjoiY2p6am9pNWtmMDV0MzNic2Fha3N6MTZnMCJ9.MNudpse5QG4PXGGh_j0TPw';
    request ( { url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to log', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find an location', undefined);
        } else {
            callback(undefined, {
                lattitude:  response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    })
}
