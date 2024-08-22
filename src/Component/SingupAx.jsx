import React, { useEffect } from "react";
import './Dash.css'
import { useFormik } from "formik";
import axios from "axios";

const SignUpForm = () => {
    const [data, setData] = React.useState([]);

    const myformik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: async (values, { setSubmitting }) => {
            if (!values.name || !values.email || !values.password) {
                alert("Please fill in all fields.");
                return;
            }

            try {
                const res = await axios.post("http://localhost:7000/Empolyees", values);
                setData([...data, res.data]);
                console.log(res.data);
                alert("Sign-up successful!");
                window.location.reload();
            } catch (err) {
                console.error(err);
                alert("Sign-up failed. Please try again.");
            }
        },
    });

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:7000/Empolyees");
            setData(res.data);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="sin">
                <form onSubmit={myformik.handleSubmit}>
                    <div className="">
                        <label className="text-light">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={myformik.handleChange}
                            value={myformik.values.name}
                        />
                    </div>
                    <div className="">
                        <label className="text-light">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={myformik.handleChange}
                            value={myformik.values.email}
                            className="form-control"
                        />
                    </div>
                    <div className="">
                        <label className="text-light">New Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter the password"
                            onChange={myformik.handleChange}
                            value={myformik.values.password}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary mt-5" type="submit">Sign-up</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUpForm;
