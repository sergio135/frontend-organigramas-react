import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './';

describe('HomePage Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<HomePage />);
    });
/*
    it('Si contiene un h1', () => {
        const wrapper = shallow(<HomePage />);
        const test = 'h1';
        expect(wrapper.find(test)).toHaveLength(1);
    });
    */
});