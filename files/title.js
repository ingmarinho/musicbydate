function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const webTitle = 'musicbydate';

async function titleChange(string) {
    // build up
    for (let i = 0; i < string.length; i++) {
        document.title = string.substring(0, i) + '|';
        await sleep(150);
        document.title = string.substring(0, i + 1);
        await sleep(150);
    }

    await sleep(200);
    
    // break down
    for (let i = 0; i < string.length + 1; i++) {
        document.title = string.substring(string.length, i);
        await sleep(200);
    }

    titleChange(webTitle);
}


titleChange(webTitle);
