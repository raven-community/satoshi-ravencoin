# satoshi-ravencoin

> npm module to convert between Satoshi and Ravencoin <b>with lightweight precision</b>.

<br>

<br>

## Install

```bash
npm install --save satoshi-ravencoin
```
<br>

## Usage

#### Node.js
```js
var sb = require('satoshi-ravencoin');

sb.toSatoshi(1);
//=>100000000

sb.toRavencoin(100000000);
//=>1
```

<br>

#### Web

```js
<script src="https://rawgit.com/raven-community/satoshi-ravencoin/master/index.bundle.js"></script>
<script>
  console.log('One Satoshi equals ' + sb.toRavencoin(1) + ' Ravencoin');
</script>
```

<br>

Or download it with `npm install --save satoshi-ravencoin` and reference it as:
```html
<script src="node_modules/satoshi-ravencoin/index.bundle.js"></script>
```

<br>

### Error Handling

```javascript
try {
  sb.toSatoshi(false)); //Throws TypeError
} catch (err) {
  console.log(err);
}
```

<br>

## API

`sb.toSatoshi(number || string)`  
`sb.toRavencoin(number || string)`

[Read more on the Wiki](https://github.com/raven-community/satoshi-ravencoin/blob/master/wiki/index.md)

<br>

## FAQ

* What is a Satoshi?
	* Satoshi is to Ravencoin as pennies are to the dollar. Except that there are 100,000,000 Satoshi in one Ravencoin.  


* Why do I need a module when I can just divide or multiply by 100,000,000?
	* [See here](http://repl.it/zlF/4) - Floating point errors are a bitch. So `satoshi-ravencoin` uses a bignum library to ensure accurate conversions!

<br>

## Tests

```bash
npm test
```

<br>

## License

MIT ©
