import { connect } from 'react-redux';
import ComponentSwitch from './component-switch';

const mapStateToProps = state => {
  return {
    selected: state.ui.currentSection || 'M'
  };
};

export default connect(mapStateToProps)(ComponentSwitch);
