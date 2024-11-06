import React from 'react';
import Pet from './pet';

const PetList = ({pets}) => {
    return (<div className="row">
        {pets.map((pet, index) => (
            <div className="col-md-4 mb-4" key={index}>
                <Pet pet={pet} />
            </div>
        ))}
    </div>);
}
 
export default PetList;