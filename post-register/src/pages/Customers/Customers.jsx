import { useEffect, useState } from "react";
import * as s from "./styles";

function Customers() {
    const [customers, setCustomers] = useState([]);

    const url = "http://localhost:8080/api/customers";

    useEffect(() => {
        fetch(url)
            .then((response) => {
                response.json()
                    .then((customerBody) => {
                        setCustomers(customerBody);
                    })
            })
    }, [])



    return (
        <>
            <div css={s.table}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>전화번호</th>
                            <th>이메일</th>
                            <th>주소</th>
                            <th>가입일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => (
                                <tr>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.phone}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.joinedAt}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Customers;