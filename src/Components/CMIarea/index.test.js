import React from 'react';
import { shallow } from 'enzyme';
import CMIarea from './';

describe('CMIarea Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<CMIarea />);
    });
});