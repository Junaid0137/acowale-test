import Topics from '@/components/Topics';
import React from 'react'
import { getMaxCategory } from './getApi';

async function FData() {
    const sdata = await getMaxCategory('sports');
    const edata = await getMaxCategory('entertainment');
    const tdata = await getMaxCategory('technology');
    const ndata = await getMaxCategory('science');
    return (
        <div>
            <Topics sdata={sdata} edata={edata} tdata={tdata} ndata={ndata} />
        </div>
    )
}

export default FData
