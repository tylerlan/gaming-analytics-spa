import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppHeader from './app-header';
import { onChangeSection, navDrawerToggle } from '../../redux/actions/thunks';

const mapStateToProps = state => {
  return {
    section: state.ui.currentSection || 'M',
    navMobileStatus: state.ui.navMobileStatus
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onChangeSection,
      navDrawerToggle
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
