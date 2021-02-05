import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Github } from "@styled-icons/bootstrap/Github";
import PortfolioPic from './ProjectImages/PortfolioPic.png';

const CodeLink = styled(LinkR)`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: black;
  text-decoration: none;
  padding-left: 3px;
  margin-top: 5px;
`;

const GithubIcon = styled(Github)`
  padding: 5px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    marginBottom: '0',
    marginTop: '3',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function PortfolioCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={PortfolioPic}
        title="Personal portfolio"
      />
      <CardContent>
        <Typography className={classes.title} variant="h6" component="h2">
            Personal portfolio website
        </Typography>
      </CardContent>
      <CardActions disableSpacing="true">
        <CodeLink onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.github.com";
                }}>
        <GithubIcon height="16px" width="16px"></GithubIcon> View code
        <IconButton aria-label="view code">
        </IconButton>
        </CodeLink>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Built with:</Typography>
          <Typography paragraph>
            React, 
            Material-UI, 
            Styled-components, 
            React-scroll,         
            EmailJS
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
