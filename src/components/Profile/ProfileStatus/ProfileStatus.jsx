import React, { useEffect, useState } from 'react';
import stl from './ProfileStatus.module.scss';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let onEditMode = () => {
        setEditMode(true);
    }
    let offEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    }
    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status);

    }, [props.status]);

    return (
        <div className={stl.status}>
            <div className={stl.status__container}>
                {editMode === false
                    ?
                    <div onDoubleClick={() => onEditMode()} className={stl.status__text}>
                        Статус: {status}
                    </div>
                    :
                    <div onBlur={() => offEditMode()} className={stl.status__input}>
                        Статус: <input onChange={onChangeStatus} autoFocus={true} value={status}></input>
                    </div>
                }
            </div>
        </div>

    );
}

export default React.memo(ProfileStatus);