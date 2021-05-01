import React from 'react'
import NewElementButton from '../../components/Button/NewTicketButton'
import TicketsZeitverlauf from '../../components/Charts/TicketsZeitverlauf';

function Statistics() {
    return (
        <div>
            Statistiken
            <TicketsZeitverlauf/>
            <NewElementButton/>
        </div>
    )
}

export default Statistics
