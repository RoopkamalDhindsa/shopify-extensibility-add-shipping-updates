import {
  reactExtension,
  Text,
  useShippingOptionTarget,
} from '@shopify/ui-extensions-react/checkout';

import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

export default reactExtension(
  'purchase.checkout.shipping-option-item.details.render',
  () => <Extension />,
);

function Extension() {
  const {shippingOptionTarget, isTargetSelected} =
    useShippingOptionTarget();
  const title = shippingOptionTarget.title;
  const estTime = moment().tz('America/New_York').format('YYYY-MM-DD HH:mm:ss');
  const estTimeHour = moment().tz('America/New_York').hour();
  const estTimeDay = moment().tz('America/New_York').day();
  const estTimeMinute = moment().tz('America/New_York').minutes();
  var messageDisplay = '';

  if ((estTimeHour === 13 && estTimeMinute > 30) || (estTimeHour > 13)) {
    if (estTimeDay === 5 || estTimeDay === 6 || estTimeDay === 7) {
      messageDisplay= 'Orders placed after 1:30 PM EST Friday will ship out on Monday.';
    } else {
      messageDisplay= 'Orders placed after 1:30 PM EST will ship out tomorrow.';
    }
  }
  
  if(title == 'Next Day' && messageDisplay != ''){
    return (<Text>{messageDisplay}</Text>);
  } else{
    return (null);
  }
}
