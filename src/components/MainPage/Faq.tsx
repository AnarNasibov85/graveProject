import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import React from 'react'
import { FaPlus, FaSquareFull } from 'react-icons/fa'

function Faq() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
    <div className='flex items-center gap-2 bg-white w-16 px-2 rounded-md'><FaSquareFull color='red' size={8} /> FAQ</div>
    <div className='flex gap-32'>
        <div>
            <h1 className='text-4xl font-bold'>You Asked.<br/>
            We Answered</h1>
            <p className='text-gray'>But if we didn't, just reach out to us and we'll be happy to answer  your questions.</p>
          <Button  variant="contained" className='normal-case font-sans rounded-lg bg-mainColor py-3 px-7 w-32'>Call Us</Button>

        </div>
        <div className='flex flex-col gap-3'>
        <Accordion expanded={expanded === 'panel1'} className='p-3 rounded-md' onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<FaPlus />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ color: 'text.secondary', marginRight:"30px" }}>
            01
          </Typography>
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} className='p-3 rounded-md' onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<FaPlus />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ color: 'text.secondary',marginRight:"30px" }}>
            02
          </Typography>
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Users
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} className='p-3 rounded-md' onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<FaPlus />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ color: 'text.secondary',marginRight:"30px" }}>
           03
          </Typography>
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} className='p-3 rounded-md' onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<FaPlus />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
             <Typography component="span" sx={{ color: 'text.secondary', marginRight:"30px" }}>
           04
          </Typography>
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    </div>
    
    </>
  )
}

export default Faq