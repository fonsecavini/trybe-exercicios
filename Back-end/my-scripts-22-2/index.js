const setTimeoutPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2. o tempo passou...');
            resolve();
        }, 3000);
    });
}

async function main() {
    console.log('1 inicio da func main');

    await setTimeoutPromise();

    console.log('3 fim da fuc main');
};

main();