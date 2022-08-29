import React from 'react';

import { ethereum } from './icons/ethereum';
import { iconCard } from './icons/iconCard';
import { menuIcon } from './icons/menuIcon';
import { Send } from './icons/send';

const iconTypes = {
  ic_ethereum: {
    component: ethereum,
    alt: 'Ethereum',
  },
  ic_iconCard: {
    component: iconCard,
    alt: 'Icon card',
  },
  ic_menu: {
    component: menuIcon,
    alt: 'Menu',
  },
  ic_send: {
    component: Send,
    alt: 'Send',
  },
};
type IconNames = keyof typeof iconTypes;

type Props = {
  name: IconNames;
  className?: string;
};

const IconComponent: React.FC<Props> = ({ name, ...props }) => {
  const Icon = iconTypes[name] ? iconTypes[name] : iconTypes.ic_send;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Icon.component {...props} alt={Icon?.alt} />;
};

export default IconComponent;
