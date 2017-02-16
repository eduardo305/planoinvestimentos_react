import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';

const TopBar = () => {
    return (
        <Header fixed={false}
            float={false}
            size='xlarge'
            splash={false}>
            <Title>
                Sample Title
            </Title>
            <Box flex={true}
                justify='end'
                direction='row'
                responsive={false}>
                <Search inline={true}
                    fill={true}
                    size='medium'
                    placeHolder='Search'
                    dropAlign={{"right": "right"}} />
            </Box>
        </Header>
    );
}

export default TopBar;