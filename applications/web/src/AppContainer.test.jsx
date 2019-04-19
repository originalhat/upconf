import '../config/spec_helper';
import * as React from 'react';
import {shallow} from 'enzyme';
import {AppContainer} from "./AppContainer";
import Header from "./App/Header";
import Authentication from "./App/Authentication";

describe('App', () => {
  it('renders the header component', () => {
    const subject = shallow(<AppContainer/>);
    expect(subject.find(Header).exists()).toEqual(true);
  });

  it('renders the authentication component', () => {
    const subject = shallow(<AppContainer/>);
    expect(subject.find(Authentication).exists()).toEqual(true);
  });
});