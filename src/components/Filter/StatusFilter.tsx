import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import  {isClosedContext} from '../../util/FilterContext'
import React , {useContext} from 'react'

function StatusFilter() {

    // Necessary consts
    const [isClosed, setIsClosed] = useContext(isClosedContext);
    const handleStatusSwitch = () => {
        setIsClosed(!isClosed);
        console.log(isClosed);
    }

    // Returning Filter component
    return (
            <FormGroup>
                <FormControlLabel 
                label={isClosed ? "offene Tickets" : "Geschlossene Tickets"} 
                control={
                    <Switch
                     checked={isClosed}
                    onChange={handleStatusSwitch}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />}
                />
            </FormGroup>
    )
}

export default StatusFilter
                        