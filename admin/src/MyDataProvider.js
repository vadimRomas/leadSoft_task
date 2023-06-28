// import axios from 'axios';
// import {io} from 'socket.io-client';
//
// const apiUrl = 'http://localhost:5000/'; // Replace with your API URL
// const socket = io(apiUrl); // Initialize socket.io connection
//
// const httpClient = axios.create({
//     baseURL: apiUrl,
// });
// let users = []
// const myDataProvider = {
//     getList: (event) => {
//         return new Promise((resolve, reject) => {
//             console.log('in promise')
//             console.log('in handle response')
//             console.log(event);
//
//             if (event !== 'users') {
//                 const parsedResponse = event;
//
//                 let response = {
//                     data: parsedResponse,
//                     total: parsedResponse.length,
//                 }
//                 users = event
//                 // Object.entries(parsedResponse).forEach((key, value) => {
//                 //     let obj = {
//                 //         id: key[0],
//                 //         urls: key[1],
//                 //     }
//                 //     response.data.push(obj);
//                 // });
//                 resolve(response);
//             } else {
//                 resolve({data: users, total: users.length})
//             }
//         })
//     }
// };
//
// // Listen for socket events to update the "users" resource
// socket.on('users_data', (data) => {
//     console.log(data)
//     myDataProvider.getList(data)
//     //     .then(({data}) => {
//     //     // Update the data for the "users" resource in React-Admin
//     //     const event = new Event('users_data_updated');
//     //     event.data = data;
//     //     document.dispatchEvent(event);
//     // });
// });
//
// export default myDataProvider;
