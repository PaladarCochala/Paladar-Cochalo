import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  /*{
    title: 'Restaurantes',
    path: '/restaurantes',
    icon: <IoIcons.IoMdRestaurant />,
    cName: 'nav-text'
  },*/
  {
    title: 'Administrar Restaurantes',
    path: '/panel-administrador/restaurantes',
    icon: <IoIcons.IoIosKeypad />,
    cName: 'nav-text'
  },
  /*{
    title: 'Registrar Restaurante',
    path: '/panel-administrador/crear-restaurante',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },*/
  {
    title: 'Reportes',
    path: '/reportes',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Acerca de Nosotros',
    path: '/about-us',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];