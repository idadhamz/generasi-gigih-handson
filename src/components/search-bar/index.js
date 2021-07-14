import React from 'react';
import './index.css';

import FormInput from '../form-input'
import Button from '../button'

const index = () => {
    return (
        <form>
            <FormInput type="text" id="search" className="search" autoComplete="off" />
            <Button type="submit" value="Search" className="submit" />
        </form>
    )
}

export default index