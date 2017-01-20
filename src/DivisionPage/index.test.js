import React from 'react';
import { shallow } from 'enzyme';
import DivisionPage from './';

describe('DivisionPage Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<DivisionPage />);
    });
});