import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import map from 'lodash/map';
import { formatMoney } from 'formatters';
import { Card } from './styled';

class Details extends React.Component {

  render() {
    const { item } = this.props;
    return (
      <Card>
        <CardHeader
          title={item.title}
          subheader={`Price: ${formatMoney(item.price)}`}
        />
        <CardMedia
          className="card-media"
          image={item.img}
          title={item.title}
        />
        <CardContent>
          <Typography paragraph component="p" style={{fontWeight: 600}}>
            {item.description}
          </Typography>
          <Typography paragraph style={{fontWeight: 600}} >Highlights:</Typography>
            {map(item.characteristics, (characteristic, index) => {
              return (
                <Typography paragraph key={index} >
                  {characteristic}
                </Typography>
              );
            })}
        </CardContent>
      </Card>
    );
  }
}

Details.propTypes = {
  item: PropTypes.object,
};

export default Details;
