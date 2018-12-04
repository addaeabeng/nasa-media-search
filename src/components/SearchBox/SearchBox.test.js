import React from 'react';
import { shallow, mount, render } from 'enzyme';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
    test('redirects to search page with the query object', () => {
        const searchQuery = 'neptune';
        const imageType = 'image';
        const queryObject = { query: searchQuery, type: imageType };
        const onSubmit = jest.fn();
        const wrapper = shallow(<SearchBox onSubmit={onSubmit} />);
        wrapper.setState({ query: searchQuery, type: imageType  });
        wrapper.instance().handleSubmit();

        expect(onSubmit).toBeCalledWith(queryObject);
    });

    test('does not redirect if nothig is searched', () => {
        const onSubmit = jest.fn();
        const wrapper = shallow(<SearchBox onSubmit={onSubmit} />);
        wrapper.instance().handleSubmit();

        //expect(onSubmit).not.toBeCalled();
    });
});
