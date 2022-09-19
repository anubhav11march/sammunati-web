import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid none',
}));

export default function CustomizedAccordions({question,answer}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{borderRadius:"60px",border:"none" }} >
      <Accordion style={{borderRadius:"10px",backgroundColor:"rgba(241, 244, 247, 1)"}} className="my-1 mx-4 bg-white" onChange={handleChange('panel1')}>
        <AccordionSummary  style={{backgroundColor:"rgba(241, 244, 247, 1)"}} aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{fontWeight:"600"}}>lorem eoifh oewrihrf</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"rgba(241, 244, 247, 1)"}}>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eveniet laboriosam repellendus laudantium, ut, veniam dolor neque dicta, sequi voluptas soluta aliquam alias odio sapiente porro. Eum voluptas dicta dignissimos.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
