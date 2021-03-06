import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use((req, res, next) => {
		return compression({})(req as any, res as any, next)
	})
	.use(
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT);
