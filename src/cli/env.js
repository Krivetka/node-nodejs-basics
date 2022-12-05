import { env } from 'node:process';

const parseEnv = () => {
    let outputString = '';
    Object.entries(env).forEach(([key, value]) => {
        if (key.startsWith('RSS_')) {
            outputString+=`${key}=${value}; `;
        }
    });
    console.log(outputString);
};

parseEnv();
