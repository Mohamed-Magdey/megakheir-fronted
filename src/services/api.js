import axios from 'axios';

export default function apiCall(method, path, data) {
    return axios[method.toLowerCase()](path, data)
        .then(res => res.data)
        .catch((err) => {
            return Promise.reject(err);
        });
}


// export default function apiCall(method, path, data) {
//     return new Promise((resolve, reject) => {
//         return axios[method](path, data)
//             .then(res => {
//                 return resolve(res.data)
//             })
//             .catch(err => {
//                 return reject(err);
//             })
//     });
// }