import '../../config/spec_helper';
import * as React from 'react';
import {shallow} from 'enzyme';
import App from "./App";

describe('App', () => {
  it('renders', () => {
    const subject = shallow(<App/>);
    expect(subject.exists()).toEqual(true);
  })
});