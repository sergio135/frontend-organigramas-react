import React from 'react';
import { shallow } from 'enzyme';
import BoxArea from './';

describe('BoxArea Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<BoxArea />);
    });
});