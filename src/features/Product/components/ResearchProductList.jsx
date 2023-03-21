import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';

ResearchProductList.propTypes = {
    onSubmit: PropTypes.func,
};

function ResearchProductList({ onSubmit = null }) {

    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (e) => {
        const value = e.target.value
        setSearchTerm(value);

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value,
            }
            onSubmit(formValues);
        }, 300);
    };

    return (
        <Box>
        <form>
            <Button>
                <SearchIcon />
            </Button>
            <input
                type='text'
                placeholder='Search Name...'
                value={searchTerm}
                onChange={handleSearchTermChange}
                style={{
                    paddingRight: '10rem',
                }}
            />
        </form>
        </Box>
    );
}

export default ResearchProductList;