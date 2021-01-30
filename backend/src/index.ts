import app from './app';
import { umblerChallenge } from './configs/env';

app.listen(umblerChallenge.port, () => {
    console.table({
        Status: 'Server is running...', Environment: umblerChallenge.nodeEnv
    });
});