import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function HtmlTooltipComp(props) {
  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9'
    }
  }))(Tooltip);

  return (
    <HtmlTooltip
      title={
        <React.Fragment>
          <Typography color="inherit">{props.name}</Typography>
          <b>Total Tested: </b> {props.totalTested}
          <br />
          <b>Positive Results: </b> {props.totalPositive}
        </React.Fragment>
      }
    >
      {props.children}
    </HtmlTooltip>
  );
}

export default HtmlTooltipComp;
