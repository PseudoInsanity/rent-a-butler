import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';


const ButlerCardExpand = ( { expanded, rating }) => {

    return (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography>Rating:</Typography>
            <Rating name="read-only" mb={2} readOnly value={rating}></Rating>
        </CardContent>
        </Collapse>
    )
}

export default ButlerCardExpand;