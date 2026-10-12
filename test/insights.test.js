import test from 'node:test';import assert from 'node:assert/strict';import{sma,rsi,analyse}from'../insights.js';import{validSymbol,demoSeries}from'../server.js';
test('simple moving average',()=>assert.equal(sma([1,2,3,4],3),3));
test('RSI rising values',()=>assert.equal(rsi(Array.from({length:20},(_,i)=>i+1)),100));
test('RSI flat values',()=>assert.equal(rsi(Array(20).fill(10)),50));
test('symbol validation',()=>{assert.equal(validSymbol('AAPL'),true);assert.equal(validSymbol('../.env'),false)});
test('demo series indicators',()=>{const d=demoSeries('AAPL');assert.equal(d.source,'demo');assert.ok(d.series.length>40);assert.ok(Number.isFinite(analyse(d.series).rsi14))});