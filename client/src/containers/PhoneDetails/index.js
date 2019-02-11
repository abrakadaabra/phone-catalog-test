import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import saga from './saga';
import reducer from './reducer';
import { REDUCER_KEY, SAGA_KEY } from './constants';
import { makeSelectLoading, makeSelectDetails, makeSelectError } from './selectors';
import { getDetails } from './actions';
import Details from './Details';
import { Container } from './styled';
import RequestingData from 'components/RequestingData';

class PhoneDetails extends PureComponent {

  componentDidMount() {
    const { match: { params }, getDetails } = this.props;
    getDetails && getDetails(params.id);
  }

  render() {

    const { loading, error, details } = this.props;

    return (
      <RequestingData {...{loading, error}}>
        {details && (<Container>
          <Details item={details} />
        </Container>)}
      </RequestingData>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getDetails: (id) => dispatch(getDetails(id)),
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  details: makeSelectDetails(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: REDUCER_KEY, reducer });
const withSaga = injectSaga({ key: SAGA_KEY, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PhoneDetails);