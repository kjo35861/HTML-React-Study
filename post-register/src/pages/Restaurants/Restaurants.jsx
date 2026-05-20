import { useQuery } from "@tanstack/react-query";
import * as s from "./styles";
import { useEffect, useState } from "react";

function Restaurants() {
    // const restaurantsQuery = useQuery({
    //     queryKey: ["restaurants"],
    //     queryFn: async () => {
    //         const url = "http://localhost:8080/api/restaurants"
    //         const response = await fetch(url, {
    //             method: "GET",
    //         });
    //         const jsonData = await response.json();
    //         return jsonData;
    //     }
    // });

    // const restaurants = restaurantsQuery.data;
    // const isLoading = restaurantsQuery.isLoading;

    // console.log(restaurants);
    // console.log(isLoading);

    const emptyInputValues = {
        name: "",
        category: "",
        address: "",
        rating: "",
    }

    const [restaurants, setRestaurants] = useState([]);
    const [inputValues, setInputValues] = useState(emptyInputValues);
    const [refetch, setRefetch] = useState(true);
    const url = "http://localhost:8080/api/restaurants";

    const handleInputOnChange = (e) => {
        setInputValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleRegisterOnClick = () => {
        const requestBody = JSON.stringify(inputValues);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestBody,
        })
        .then((response) => {
            response.json()
            .then((responseBody) => {
                alert(responseBody.message);
                setRefetch(true);
            })
        });
    }

    useEffect(() => {
        fetch(url)
            .then((response) => {
                console.log(response);
                response.json()
                    .then((restaurantBody) => {
                        console.log(restaurantBody);
                        setRestaurants(restaurantBody)
                        setRefetch(false);
                    })
            })
    }, [refetch])


    return (
        <>
            <div css={s.table}>
                <div>
                    <input type="text" name="name" placeholder="가계명" value={inputValues.name} onChange={handleInputOnChange} />
                    <input type="text" name="category" placeholder="카테고리" value={inputValues.category} onChange={handleInputOnChange} />
                    <input type="text" name="address" placeholder="주소" value={inputValues.address} onChange={handleInputOnChange} />
                    <input type="text" name="rating" placeholder="평점" value={inputValues.rating} onChange={handleInputOnChange} />
                    <button onClick={handleRegisterOnClick}>등록</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>가계이름</th>
                            <th>카테고리</th>
                            <th>주소</th>
                            <th>평점</th>
                            <th>오픈일</th>
                            <th>최소주문가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            restaurants.map(restaurant => (
                                <tr>
                                    <td>{restaurant.id}</td>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.category}</td>
                                    <td>{restaurant.address}</td>
                                    <td>{restaurant.rating}</td>
                                    <td>{restaurant.createdAt}</td>
                                    <td>{restaurant.minOrderAmount}원</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Restaurants;