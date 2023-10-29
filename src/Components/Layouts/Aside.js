import '../../Css/Aside.scss'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useState } from 'react';

const Aside = ({ sortProducts }) => {
    const [activeSort, setactiveSort] = useState()

    const handleSortClick = (category) => {
        sortProducts(category)
        setactiveSort(category)
    }
    return (
        <aside className="sort-menu-container" >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Sort by</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='sort-menu'>
                        <button href='#' style={activeSort === 'price' ? { color: 'red' } : {}} onClick={() => handleSortClick('price')}>Price Low</button>
                        <button href='#' style={activeSort === 'category' ? { color: 'red' } : {}} onClick={() => handleSortClick('category')}>Category</button>
                        <button href='#' style={activeSort === 'title' ? { color: 'red' } : {}} onClick={() => handleSortClick('title')}>Name</button>
                    </div>

                </AccordionDetails>
            </Accordion>


        </aside>
    )
}

export default Aside