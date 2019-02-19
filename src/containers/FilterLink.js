import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions/todoAction';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilter: () => { dispatch(setVisibilityFilter(ownProps.filter)) },
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filter: ownProps.filter,
    active: state.visibilityFilter === ownProps.filter,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);