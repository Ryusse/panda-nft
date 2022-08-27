import React from 'react';

import { iconCard } from './icons/iconCard';
import { Send } from './icons/send';

const iconTypes = {
  ic_iconCard: {
    component: iconCard,
    alt: 'Icon card',
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
  return <Icon.component {...props} alt={Icon?.alt} />;
};

export default IconComponent;
