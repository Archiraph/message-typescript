import React from 'react';
import { MessagesInt } from '../model';

type Props = {
    mess: MessagesInt;
    messData: MessagesInt[];
    setMessData: React.Dispatch<React.SetStateAction<MessagesInt[]>>
}

const message = ({ mess, messData, setMessData }: Props) => {

    const dateFormater = (date: number) => {
        return new Date(date).toLocaleDateString("fr-FR", {day: "numeric", month: "long"})
    }

    const handleDelete = () => {
        setMessData(messData.filter((el) => el.id !== mess.id))
    }

    return (
        <div className="message-container">
            <p>{mess.message}</p>
            <h5>{dateFormater(mess.date)}</h5>
            <span id='delete' onClick={() => handleDelete()}>&#10008;</span>
        </div>
    );
};

export default message;