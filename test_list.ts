import { LinkedList } from './list';
import { expect } from 'chai';
import 'mocha';

let listOne = new LinkedList<number>();
listOne.add(1);
listOne.add(2);
listOne.add(3);
listOne.add(4);

const listTwo = new LinkedList<string>();
listTwo.add('two');
listTwo.add('three');

const listThree = new LinkedList<string>();
listThree.add('two');
listThree.add('three');

const listFour = new LinkedList<number>();
listFour.add(90);
listFour.add(88);
listFour.add(3);

describe('LinkedList testing', () => {
    it('Check equals metod', () => {
        expect(listOne.equals(listFour)).to.equal(false);
        expect(listTwo.equals(listThree)).to.equal(true);
        expect(listFour.equals(listFour)).to.equal(true);
    });
    it('Check size metod', () => {
        expect(listOne.size()).to.equal(4);
        expect(listTwo.size()).to.equal(2);
        expect(listFour.size()).to.equal(3);
    });
    it('Check toString metod', () => {
        expect(listTwo.toString()).to.equal('two three ');
        expect(listOne.toString()).to.equal('1 2 3 4 ');
        expect(listThree.toString()).to.equal('two three ');
    });
    it('Check add metod', () => {
        listTwo.add('one');
        listTwo.add('three', 2);
        listOne.add(0);
        expect(listOne.get(2)).to.equal(3);
        expect(listFour.get(1)).to.equal(88);
        expect(listFour.get(0)).to.equal(90);
    });
    it('Check get metod', () => {
        expect(listTwo.get(0)).to.equal('two');
        expect(listTwo.get(55)).to.equal(false);
        expect(listOne.get(2)).to.equal(3);
        expect(listThree.get(1)).to.equal('three');
        expect(listThree.get(-122)).to.equal(false);
    });
    it('Check remove metod', () => {
        expect(listThree.remove(-122)).to.equal(null);
        expect(listOne.remove(3).value).to.equal(4);
        expect(listOne.remove(92)).to.equal(null);
        expect(listThree.remove(1).value).to.equal('three');
    });
});
    