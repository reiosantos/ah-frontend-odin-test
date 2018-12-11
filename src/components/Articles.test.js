import React from 'react';
import { shallow } from 'enzyme';
import Articles from 'components/Articles';
import Article from 'components/Article';
import TagList from 'components/TagList';

const firstArticle = { title: 'Authors Haven introduction', slug: 'title-1', tagList: [] };

const articles = [
  firstArticle,
  { title: 'Authors Haven introduction', slug: 'title-2', tagList: [] },
];

describe('Articles', () => {
  test('It Articles  articles all Article', () => {
    const wrapper = shallow(<Articles articles={articles} />);

    expect(wrapper.find('Article')).toHaveLength(2);
  });
});

describe('Article', () => {
  test('It Article shows the right title', () => {
    const wrapper = shallow(<Article article={firstArticle} />);

    expect(wrapper.find('.card-title').text()).toEqual(firstArticle.title);
  });

  test('TagList renders all article tags', () => {
    const tags = ['Angular', 'Andela', 'odin'];
    const wrapper = shallow(<TagList tags={tags} />);

    expect(wrapper.find('.badge')).toHaveLength(tags.length);
  });
});
