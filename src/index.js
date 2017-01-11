import numeral from 'numeral';
import './index.css';

debugger;
const num = numeral(1000).format('$0,0.00');
console.log(`This is amount ${num}`);
