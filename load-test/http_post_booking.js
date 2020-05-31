import http from 'k6/http';

export let options = {
    duration: '600s',
    rps: 1000,
    thresholds: {
        'http_req_duration': ['p(99)<1200'],
        'failed requests': ['rate<0.1']
    }
}

export default function() {
    var url = `http://localhost:3001/booking/new`;
        var payload = JSON.stringify({
                "listingId": 10000001,
                "nights": 7,
                "month": "07",
                "checkIn": "07-13",
                "checkOut": "07-20",
                "guests": 7,
                "children": 7,
                "infants": 7
              })
        var params = {
            headers: {
                'Content-Type': 'application/json',
              }
        }
        http.post(url, payload, params)
}