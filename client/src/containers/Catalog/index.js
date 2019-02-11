import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import RequestingData from 'components/RequestingData';
import size from 'lodash/size';
import saga from './saga';
import reducer from './reducer';
import { REDUCER_KEY, SAGA_KEY } from './constants';
import { makeSelectLoading, makeSelectItems, makeSelectError } from './selectors';
import { getPhones } from './actions';
import List from './List';
import { Container } from './styled';

class Catalog extends React.PureComponent {

  componentDidMount() {
    this.props.getPhones();
  }

  render() {

    const { loading, error, phones } = this.props;

    return (
      <RequestingData {...{loading, error}}>
        {size(phones) && (<Container>
          <List phones={phones} />
        </Container>)}
      </RequestingData>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPhones: () => dispatch(getPhones()),
});

const mapStateToProps = createStructuredSelector({
  phones: makeSelectItems(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
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
)(Catalog);
