import React from 'react';
import { shallow } from 'enzyme';
import CNarea from './';

describe('CNarea Component', () => {
    it('Renderizar sin Crash', () => {
        shallow(<CNarea />);
    });
});