import { bindActionCreators } from 'redux';
import {
    login,
    loggout,
    notes,
    removeAllNotes,
    removeNote
} from './src/redux/actions';

export const mapStateToProps = (state) => ({
  auth: state.auth,
  notes: state.notes
});

const ActionCreators = Object.assign({},
    login,
    loggout,
    notes,
    removeAllNotes,
    removeNote
    );

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
