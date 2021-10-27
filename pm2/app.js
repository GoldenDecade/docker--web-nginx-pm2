const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// app.use(ctx => { ctx.body = 'Hello pm2' });
router.post('/login', (ctx) => {
	ctx.body = 'hello pm2'
})

router.get('/abc', (ctx, next) => {
	ctx.response.body = 'abc';
})

app.use(router.routes());
app.listen(3002, () => { console.log('app started at http://localhost:3002/') })
