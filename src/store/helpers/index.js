import { pick, isObjectLike, get, zipObject } from 'lodash';

const mapStateToProps = props => state => {
  if (Array.isArray(props)) return pick(state, props);

  if (isObjectLike(props)) {
    const keys = Object.keys(props);

    const values = keys.map(key => get(state, props[key]));
    return zipObject(keys, values);
  }

  return {};
};

export { mapStateToProps };

export default mapStateToProps;
