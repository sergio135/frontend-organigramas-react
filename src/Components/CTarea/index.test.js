import React from 'react';
import { shallow } from 'enzyme';
import CTarea from './';

describe('CTarea Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<CTarea />);
    });
});