import React from 'react';

// COMPONENTS //
import Table from '../components/Table';

export const Profile = (props) => {

    const profileObject = props.data?.profile;

    const rowMapping = [
        {
            label: "First name",
            value: profileObject?.firstName
        },
        {
            label: "Last name",
            value: profileObject?.lastName
        },
        {
            label: "Phone",
            value: profileObject?.phone
        },
        {
            label: "Email",
            value: profileObject?.email
        },
        {
            label: "Bio",
            value: profileObject?.bio
        }
    ]

    if(props.data){
        return (
            <section data-testid={'profileView'}>
                 <h2>Profile</h2>
                 <div className={'flexRow'}>
                     <img className={'avatar'} src={profileObject.avatarImage} alt={profileObject.firstName + ' ' + profileObject.lastName} title={profileObject.firstName + ' ' + profileObject.lastName} />
                     <Table rowMapping={rowMapping} />
                 </div>
            </section>
        )
    } else {
        return null;
    }
    
}

export default Profile;