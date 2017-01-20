import React from 'react';
import { shallow } from 'enzyme';
import COarea from './';

describe('COarea Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<COarea />);
    });
});