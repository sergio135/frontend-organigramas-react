import React from 'react';
import { shallow } from 'enzyme';
import CMDarea from './';

describe('CMDarea Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<CMDarea />);
    });
});