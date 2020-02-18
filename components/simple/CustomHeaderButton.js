import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/colors'

const CustomHeaderButton = props => {
    console.log(Ionicons)
    return(
        <HeaderButton
            {...props}
            IconComponent={Ionicons} 
            iconSize={23}
            color={Colors.background} 
        />
    );
}

export default CustomHeaderButton; 
