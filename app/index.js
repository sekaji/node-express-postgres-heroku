import app from './app';

function main(){
    app.listen(process.env.PORT || 5001)
    console.log('*** Server Running On Port 5001 ***')
}

main();