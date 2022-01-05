import React from "react";
import classNames from "classnames";
import './styles.css';

const fractions = {
  '.1': '⅛',
  '.2': '¼',
  '.3': '⅓',
  '.5': '½',
  '.6': '⅔',
  '.7': '¾',
}

export const Quantity = ({qty}) => {
      let quantity = qty;
      const fractionRegex = qty.match(/.\d/gm);
      if (fractionRegex) {
        const fractionIndex = qty.indexOf(fractionRegex);

        quantity = qty.slice(0,fractionIndex) + fractions[fractionRegex];
      }

      return (<span className={classNames('mr2', {
            ['extraSpace']: quantity.length > 1,
          })}>
        {quantity}
      </span>)
}
