// routes.forEach((data) => {
//     let middlewares = [];
//     if (data.auth) {
//         middlewares.push(authorizeUser());
//     }
//     if (data.file) {
//         middlewares.push(uploads.single("file"));
//     }
//     if (data.schema) {
//         middlewares.push(validate(data.schema));
//     }
//     app.route(data.path)[data.method.toLowerCase()](...middlewares, handlers(data));
// });
const path = 'test.txt'

console.log(path);