import React from 'react';
import stl from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode() {
        this.setState({
            editMode: true
        })
    }
    offEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status);
    }
    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }


    render() {
        return (
            <div className={stl.status}>
                <div className={stl.status__container}>
                    {this.state.editMode === false
                        ?
                        <div onDoubleClick={() => this.onEditMode()} className={stl.status__text}>
                            Статус:
                            {this.state.status}
                        </div>
                        :
                        <div onBlur={() => this.offEditMode()} className={stl.status__input}>
                            Статус:
                            <input onChange={this.onChangeStatus} autoFocus={true} value={this.state.status}></input>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default ProfileStatus;