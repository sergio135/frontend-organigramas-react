import React from 'react';
import { shallow } from 'enzyme';
import Box from './';

describe('Box Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<Box />);
    });
});