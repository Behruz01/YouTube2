import React from 'react';

const ChannelCategory = ({avatar , name}) => {
    return (
        <div className='channel__category flex items-center py-2 gap-4 pl-4'>
            <img src={avatar} alt="" />
            <p className='text-sm  font-medium'>{name}</p>
        </div>
    );
}

export default ChannelCategory;
