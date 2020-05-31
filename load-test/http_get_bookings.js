import http from 'k6/http';

export let options = {
    duration: '600s',
    rps: 1000,
    thresholds: {
        'http_req_duration': ['p(95)<2000'],
        'failed requests': ['rate<0.1']
    }
}

export default function() {
    for(var id = 9000000; id < 9600000; id++) {
        http.get(http.url`http://localhost:3001/bookings/${id}`)
    }
}
