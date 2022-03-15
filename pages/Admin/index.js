import React, { useState } from "react";
import { toast } from 'react-toastify';
import styles from '../../styles/Admin/index.module.scss';
import client from "../../apollo-client";
import { loginMutation } from "../../Api/AdminUser.api";

const Admin = () => {

    const [user, setUser] = useState({ identifier: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const variables = {
            input: {
                identifier: user.identifier,
                password: user.password
            }
        }

        const { data, errors, loading } = await client.mutate({ mutation: loginMutation, variables, fetchPolicy: "no-cache", errorPolicy: "all" });

        if (errors) {
            errors.map((err) => {
                toast.error(err.message, { position: "top-right" });
            })
        }

    }


    return (
        <div className={styles.indexBg}>
            <div className="container h-100" >

                <div className="row h-100  justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-6 col-12">
                        <div className={`p-4 border rounded ${styles.formCls}`}>
                            <form className="clearfix" onSubmit={async (e) => await handleSubmit(e)}>
                                <div className="mb-3 text-center">
                                    <h5>Admin Panel Girişi</h5>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" style={{ fontWeight: "bold" }} className="form-label">E-Posta Adresi</label>
                                    <input type="email" value={user.identifier} onChange={(e) => setUser((user) => ({ ...user, identifier: e.target.value }))} className="form-control" id="email" name="email" aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">E-Posta Adresinizi Giriniz...</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" style={{ fontWeight: "bold" }} className="form-label">Şifreniz</label>
                                    <input type="password" id="password" value={user.password} onChange={(e) => setUser((user) => ({ ...user, password: e.target.value }))} className="form-control" name="password" required />
                                </div>
                                <button type="submit" className="btn btn-primary float-end">Giriş</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}
export default Admin;