# airbet
Mini JavaScript library for airbet.io
# main
```js
const {airbet} = require('./airbet');

const airbet_io = new airbet();
airbet_io.forgot_password("email").then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
