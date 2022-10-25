import React from 'react';
import CardSide from '../CardSide/CardSide';
import LeftSideNave from '../LeftSideNav/LeftSideNave';

const HomeMAin = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div>
                <LeftSideNave></LeftSideNave>
            </div>
            <div className='col-span-2'>
                <CardSide></CardSide>
            </div>
        </div>
    );
};

export default HomeMAin;