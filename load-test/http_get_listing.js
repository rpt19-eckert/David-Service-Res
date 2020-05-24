import http from 'k6/http';

export let options = {
    duration: '600s',
    rps: 1000,
    thresholds: {
        'http_req_duration': ['p(99)<1200'],
        'failed requests': ['rate<0.1']
    }
}

// export default function() {
//     for(var id = 9100000; id < 9200000; id++) {
//         http.get(http.url`http://localhost:3001/listing/${id}`)
//     }
// }

export default function() {
    for(var id = 9400000; id < 10000010; id++) {
        http.get(http.url`http://localhost:3001/bookings/${id}`)
    }
}