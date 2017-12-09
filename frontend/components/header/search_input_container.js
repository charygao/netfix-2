import { connect } from 'react-redux';
import { searchVideos } from '../../actions/video_actions';
import SearchInput from './search_input';

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
