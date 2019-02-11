import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InfoIcon from '@material-ui/icons/Info';
import withWidth from '@material-ui/core/withWidth';
import map from 'lodash/map';
import { formatMoney } from 'formatters';
import { GridList, InfoDetailsButton } from './styled';

const List = (props) => {
  const { phones, width } = props;

  return (
    <GridList cellHeight="auto" cols={width === 'xs' ? 1 : 2}>
      {map(phones, phone => (
        <GridListTile key={phone.img}>
          <img className="phone-image" src={phone.img} alt={phone.title}/>
          <GridListTileBar
            title={phone.title}
            subtitle={
              <React.Fragment>
                <span>{phone.description}</span>
                <div>Price: {formatMoney(phone.price)}</div>
              </React.Fragment>
            }
            actionIcon={
              <InfoDetailsButton component={Link} to={`/phones/${phone.id}`}>
                <InfoIcon />
              </InfoDetailsButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
}

List.propTypes = {
  phones: PropTypes.array,
  width: PropTypes.string,
};

export default compose(
  withRouter,
  withWidth(),
)(List)
