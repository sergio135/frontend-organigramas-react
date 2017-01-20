import React from 'react';
import { shallow } from 'enzyme';
import CDarea from './';

describe('CDarea Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<CDarea />);
    });
});