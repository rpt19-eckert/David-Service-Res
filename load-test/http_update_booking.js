import http from 'k6/http';

export let options = {
    duration: '600s',
    rps: 1000,
    thresholds: {
        'http_req_duration': ['p(95)<2500'],
        'failed requests': ['rate<0.1']
    }
}

export default function() {
    var payload = JSON.stringify({
            "listingId": 10000006,
            "nights": 666666
            
            ,
            "month": "06",
            "checkIn": "06-13",
            "checkOut": "06-20",
            "guests": 66,
            "children": 66,
            "infants": 66
    })
    var params = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    for(var id = 66000000; id < 66600000; id++) {
        http.put(http.url`http://localhost:3001/booking/update/${id}`, payload, params)
    }
}