import react, { useState } from 'react';
import './card.css'
import { useAuth } from '../../Context/AuthContext';
import app from '../../Firebase/firebase';
export default function Card(props) {
    const { currentUser } = useAuth();
    function deleteCardItems(id) {
        app.firestore().collection(currentUser.displayName).doc(id).delete()
            .then(() => {
                alert("successfully deleted! ");
            })
            .catch((error) => { alert("Error removing document:", error) })

    }
    return (
        <div className="container-fluid text-center mb-3">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-1">
                            <h5 className="card-text">{props.id}</h5>
                        </div>
                        <div className="col-lg-10">
                            <p>{props.desc}</p>
                        </div>
                        <div className="col-lg-1">
                            <button type="button" onClick={() => deleteCardItems(props.deleteId)} className="btn btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                        </div>
                    </div>

                </div>
                <div className="card-footer text-muted"></div>
            </div>
        </div >
    );
}