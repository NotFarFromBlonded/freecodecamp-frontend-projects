import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            { /*props.randomisedQuote ?
                (
                    <Typography>
                        <p >{props.randomisedQuote.quote}</p> 
                            <p style = {{textAlign: "right"}}>- {props.randomisedQuote.author}</p>
                    </Typography>
                ) : null
            */}
            <Typography id = "text">
                <p >{props.randomisedQuote.quote}</p> 
                    <p id = "author" style = {{textAlign: "right"}}>- {props.randomisedQuote.author}</p>
            </Typography>
        </CardContent>
        <CardActions>
            <Button id = "new-quote" right="0%" size = "small" onClick = {props.newQuoteIndex}>New Quote</Button>
            <IconButton
                id = 'tweet-code'
                target='_blank'
                href={`https://twitter.com/intent/tweet?text${props.randomisedQuote.quote}`}
            >
                <FontAwesomeIcon icon = {faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
    </Card>
);
export default QuoteMachine;