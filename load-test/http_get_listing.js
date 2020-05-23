import http from 'k6/http';

export let options = {
    duration: '600s',
    rps: 1000,
    thresholds: {
        'http_req_duration': ['p(99)<700']
    }
}

export default function() {
    for(var id = 9500000; id < 10000500; id++) {
        http.get(http.url`http://localhost:3001/listing/${id}`)
    }
}
