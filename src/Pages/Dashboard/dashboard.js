import react, { useState, useEffect } from 'react';
import Header from '../../Components/Header/header'
import Card from '../../Components/Card/card'
import './dashboard.css'
import app from '../../Firebase/firebase';
import { useForm } from "react-hook-form"
import { useAuth } from '../../Context/AuthContext';
export default function Dashboard() {
    const [cardData, setCardData] = useState([]);
    const [dataLength, setdataLength] = useState();
    const { currentUser } = useAuth();
    const [id, setid] = useState();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data, e) => {

        app.firestore().collection(currentUser.displayName).doc(currentUser.id).set({
            desc: data.desc,
            id: id
        });
        e.target.reset();

    }

    useEffect(() => {
        const fetchData = async () => {
            const dataAray = []
            const db = app.firestore();
            const data = await db.collection(currentUser.displayName).get()
            data.docs.map(doc => {
                dataAray.push({ data: doc.data(), id: doc.id })
            })
            // console.log(dataAray);
            setCardData(dataAray)
            setdataLength(Object.keys(dataAray).length)
            setid(dataLength + 1);
        }
        fetchData()
    })


    return (
        <div>
            <Header />
            <div className="input-box mt-5 mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="desc" ref={register}></textarea>
                        <label>Share your thought....</label>
                    </div>
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                        <div className="btn-group me-2" role="group" aria-label="Second group">
                            <button type="reset" className="btn btn-danger">Clear</button>
                        </div>
                    </div>
                </form>
            </div>
            {
                cardData.map((data, index) => {
                    return (

                        <Card desc={data.data.desc} id={data.data.id} key={index} deleteId={data.id} />
                    );
                })
            }

        </div>
    );
}