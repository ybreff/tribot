import { Component } from 'react';
import { connect } from 'react-redux';
import { actionMessage, actionCleanMessage } from '../store/actions/SharedActions';

import { toast } from 'react-toastify';

class Message extends Component {

  componentDidUpdate = (prevProps) => {
    if (this.props.oShared.sMessage !== '' && this.props.oShared.nResponseCode !== 401) {
      toast(this.props.oShared.sMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: this.props.oShared.sMessageType
      });
      this.props.cleanMessage();
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({
  oShared: state.sharedReducer,
})

const mapDispatchToProps = dispatch => ({
  message: () => {
    dispatch(actionMessage('Mensaje de prueba', 'success'));
  },
  cleanMessage: () => {
    dispatch(actionCleanMessage());
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Message);