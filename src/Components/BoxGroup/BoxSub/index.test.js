import React from 'react';
import { shallow } from 'enzyme';
import BoxSub from './';

describe('BoxSub Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<BoxSub />);
    });
});