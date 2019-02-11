import React, { Children } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import Error from 'components/Error';

export default class RequestingData extends React.Component {

  render() {
    const {loading, error, children } = this.props;

    if (loading) {
      return <LoadingIndicator />;
    }
    
    if (error) {
      return <Error>{`Error: ${error}`}</Error>;
    }

    return Children.toArray(children);
  }
}

