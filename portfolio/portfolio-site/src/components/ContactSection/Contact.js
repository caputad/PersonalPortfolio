import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  ContactContainer,
  ContactContent,
  ContactH1,
  FormTextField,
  FormWrapper,
  SubmitButton,
  ContactIconsWrap,
  LinkedinLink,
  EmailLink,
  GithubLink,
} from "./ContactElements";
import { LinkedIn, Mail, Ghub } from "../IconComponents/Icons.js";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from "emailjs-com";

const LinkTooltip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 12,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  typography: {
    //padding: theme.spacing(2),
    padding: 6,
  },
  margin: {
    margin: theme.spacing(1),
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_5fqp7xi', 'template_yzc6aa6', e.target, 'user_t0qa5jEzcNa6IIT0MnydO')
      .then((result) => {
          console.log(result.text);
          alert("E-mail sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("E-mail hasn't been sent due to an error. Try again");
      });
      e.target.reset()
  }

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let content = {
    English: {
      header: "Let's work together",
      mailTitle: `Click to copy e-mail address to clipboard`,
      copiedMsg: "E-mail address copied to clipboard!",
      name: "Name",
      mail: "E-mail",
      subject: "Subject",
      message: "Message",
      submit: "Send",
    },
    Czech: {
      header: "Kontaktujte mně",
      mailTitle: `Klikněte pro zkopírování e-mailové adresy`,
      copiedMsg: "E-mailová adresa zkopírována!",
      name: "Jméno",
      mail: "E-mail",
      subject: "Předmět",
      message: "Zpráva",
      submit: "Odeslat",
    },
  };
  
  props.language === "English"
  ? (content = content.English)
  : (content = content.Czech);

  return (
    <ContactContainer>
        <ScrollAnimation animateIn='animate__flipInX' delay="20">
          <ContactH1>{content.header}</ContactH1>
        </ScrollAnimation>
        <ContactContent>
        <ScrollAnimation animateIn='animate__fadeIn' delay="20">
        <form onSubmit={sendEmail}>
      <FormWrapper >
                <TextField className={classes.margin} id="outlined-basic" label={content.name} variant="outlined" name="name" required></TextField> 
                <TextField className={classes.margin} id="outlined-basic" label={content.mail} variant="outlined" name="email" required></TextField> 
                <TextField className={classes.margin} id="outlined-basic" label={content.subject} variant="outlined" name="subject"></TextField> 
                <TextField className={classes.margin} id="outlined-textarea" label={content.message} variant="outlined" multiline name="message" required></TextField>
                <SubmitButton type="submit">{content.submit}</SubmitButton>
      </FormWrapper>
        </form>
      </ScrollAnimation>      
        <ScrollAnimation animateIn='animate__fadeIn' delay="20">
        <ContactIconsWrap id="contact">
          <LinkTooltip title="LinkedIn">
            <LinkedinLink>            
              <LinkedIn
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.linkedin.com/in/daniel-caputa/";
                }}
              />
            </LinkedinLink>
          </LinkTooltip>
          <LinkTooltip title={content.mailTitle}>
            <EmailLink>
              <span
                onClick={() =>
                  navigator.clipboard.writeText("daniel.caputa@email.cz")
                }
              >
                <Mail onClick={handleClick} />
              </span>
            </EmailLink>
          </LinkTooltip>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              {content.copiedMsg}
            </Typography>
          </Popover>

          <LinkTooltip title="Github">
            <GithubLink>
              <Ghub
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://www.github.com";
                }}
              />
            </GithubLink>
          </LinkTooltip>
        </ContactIconsWrap>       
        </ScrollAnimation>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

