
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const controller = require('./controller');
const bodyParser = require('koa-bodyparser');
// parse request body:
app.use(bodyParser());

// add controller:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');
// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
//     var
//         autoescape = opts.autoescape === undefined ? true : opts.autoescape,
//         noCache = opts.noCache || false,
//         watch = opts.watch || false,
//         throwOnUndefined = opts.throwOnUndefined || false,
//         env = new nunjucks.Environment(
//             new nunjucks.FileSystemLoader(path, {
//                 noCache: noCache,
//                 watch: watch,
//             }), {
//                 autoescape: autoescape,
//                 throwOnUndefined: throwOnUndefined
//             });
//     if (opts.filters) {
//         for (var f in opts.filters) {
//             env.addFilter(f, opts.filters[f]);
//         }
//     }
//     return env;
// }

// var env = createEnv('views', {
//     watch: true,
//     filters: {
//         hex: function (n) {
//             return '0x' + n.toString(16);
//         }
//     }
// });

// var s = env.render('hello.html', {
//     name: '<Nunjucks>',
//     fruits: ['Apple', 'Pear', 'Banana'],
//     count: 12000
// });

// console.log(s);

// console.log(env.render('extend.html', {
//     header: 'Hello',
//     body: 'bla bla bla...'
// }));

// // 先导入fs模块，然后用readdirSync列出文件
// // 这里可以用sync是因为启动时只运行一次，不存在性能问题:
// var fs = require("fs")
// var files = fs.readdirSync(__dirname + '/controllers');

// // 过滤出.js文件:
// var js_files = files.filter((f) => {
//     return f.endsWith('.js');
// });

// // 处理每个js文件:
// for (var f of js_files) {
//     console.log(`process controller: ${f}...`);
//     // 导入js文件:
//     let mapping = require(__dirname + '/controllers/' + f);
//     for (var url in mapping) {
//         if (url.startsWith('GET ')) {
//             // 如果url类似"GET xxx":
//             var path = url.substring(4);
//             router.get(path, mapping[url]);
//             console.log(`register URL mapping: GET ${path}`);
//         } else if (url.startsWith('POST ')) {
//             // 如果url类似"POST xxx":
//             var path = url.substring(5);
//             router.post(path, mapping[url]);
//             console.log(`register URL mapping: POST ${path}`);
//         } else {
//             // 无效的URL:
//             console.log(`invalid URL: ${url}`);
//         }
//     }
// }

// const nunjucks = require('nunjucks');

// function createEnv(path, opts) {
//     var
//         autoescape = opts.autoescape === undefined ? true : opts.autoescape,
//         noCache = opts.noCache || false,
//         watch = opts.watch || false,
//         throwOnUndefined = opts.throwOnUndefined || false,
//         env = new nunjucks.Environment(
//             new nunjucks.FileSystemLoader('views', {
//                 noCache: noCache,
//                 watch: watch,
//             }), {
//                 autoescape: autoescape,
//                 throwOnUndefined: throwOnUndefined
//             });
//     if (opts.filters) {
//         for (var f in opts.filters) {
//             env.addFilter(f, opts.filters[f]);
//         }
//     }
//     return env;
// }

// var env = createEnv('views', {
//     watch: true,
//     filters: {
//         hex: function (n) {
//             return '0x' + n.toString(16);
//         }
//     }
// });
// var s = env.render('hello.html', { name: '小明' });
// console.log(s);
// // // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
// // const Koa = require('koa');
// // // 注意require('koa-router')返回的是函数:
// // const router = require('koa-router')();
// // // 创建一个Koa对象表示web app本身:
// // const app = new Koa();
// // const bodyParser = require('koa-bodyparser');
// // app.use(bodyParser());
// // // log request URL:
// // app.use(async (ctx, next) => {
// //     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
// //     await next();
// // });

// // // // add url-route:
// // // router.get('/hello/:name', async (ctx, next) => {
// // //     var name = ctx.params.name;
// // //     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// // // });

// // // router.get('/', async (ctx, next) => {
// // //     ctx.response.body = '<h1>Index</h1>';
// // // });
// // // router.post('/', async (ctx, next) => {
// // //     ctx.response.body = '<h1>Index</h1>';
// // // });
// // router.get('/', async (ctx, next) => {
// //     ctx.response.body = `<h1>Index</h1>
// //         <form action="/signin" method="post">
// //             <p>Name: <input name="name" value="koa"></p>
// //             <p>Password: <input name="password" type="password"></p>
// //             <p><input type="submit" value="Submit"></p>
// //         </form>`;
// // });

// // router.post('/signin', async (ctx, next) => {
// //     var
// //         name = ctx.request.body.name || '',
// //         password = ctx.request.body.password || '';
// //     console.log(`signin with name: ${name}, password: ${password}`);
// //     if (name === 'koa' && password === '12345') {
// //         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
// //     } else {
// //         ctx.response.body = `<h1>Login failed!</h1>
// //         <p><a href="/">Try again</a></p>`;
// //     }
// // });
// // // add router middleware:
// // app.use(router.routes());
