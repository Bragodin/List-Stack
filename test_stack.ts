import { Stack } from './stack';
import { expect } from 'chai';
import 'mocha';

const stackOne = new Stack<number>();
stackOne.push(2);
stackOne.push(1);
stackOne.push(80);
stackOne.push(981);

const stackTwo = new Stack<string>();
stackTwo.push('first');
stackTwo.push('second');
stackTwo.push('third');

const stackTree = new Stack<string>();
stackTree.push('first');
stackTree.push('second');
stackTree.push('third');

const stackFour = new Stack<string>();
stackFour.push('1');
stackFour.push('2');
stackFour.push('3');

describe('Stack testing', () => {
        it('Check push metod', () => {
            expect(stackOne.next.value).to.equal(981);
            expect(stackTwo.next.next.value).to.equal('second');
            expect(stackTwo.next.next.next.value).to.equal('first');
        });
        it('Check equal metod', () => {
            expect(stackTwo.equals(stackTree)).to.equal(true);
            expect(stackTree.equals(stackFour)).to.equal(false);
            expect(stackFour.equals(stackFour)).to.equal(true);
        });
        it('Check string metod', () => {
            expect(stackOne.toString()).to.equal('981 80 1 2 ');
            expect(stackTwo.toString()).to.equal('third second first ');
        });
        it('Check size metod', () => {
            expect(stackOne.size()).to.equal(4);
            expect(stackTwo.size()).to.equal(3);
            expect(stackTree.size()).to.equal(3);
            expect(stackFour.size()).to.equal(3);
        });
        it('Check pop metod', () => {
            expect(stackOne.pop()).to.equal(981);
            expect(stackTwo.pop()).to.equal('third');
        });
    });
    