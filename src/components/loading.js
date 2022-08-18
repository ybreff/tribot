import React from 'react';
import { Loader } from "tabler-react";
import { connect } from 'react-redux';

function Loading(props) {
  return (
    props.oShared.bLoading ?
      <div className="overlay">
        <Loader></Loader>
      </div> : null
  )
}

const mapStateToProps = state => ({
  oShared: state.sharedReducer,
})

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
