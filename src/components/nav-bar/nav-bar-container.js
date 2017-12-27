import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './nav-bar';
import { onChangeSection } from '../../redux/actions/thunks';

const mapStateToProps = state => {
  return {
    section: state.ui.currentSection || 'M'
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onChangeSection
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
