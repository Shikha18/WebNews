import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';

const Api = () => {

    const [obj, setObj] = useState('');

    const getData = () => {
        const API_KEY =  `f6d07a99d1ae4c7a90810e3ce5792e3a`;
        const url = `https://newsapi.org/v2/everything?q=apple&from=2023-03-21&to=2023-03-21&sortBy=popularity&apiKey=${API_KEY}`
        axios.get(url, { mode: "cors" }).then(res => {
            setObj(res.data.articles);
        }).catch((error) => {
            console.log("Error", error);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={style.container}>
            {
                Array.isArray(obj) ? obj?.map(item => (
                    <div>
                        <div>
                            <img src={item.urlToImage} />
                        </div>
                        <div>
                            <h4>{item.title}</h4>
                            <h5>Written by: {item.author}</h5>
                            <p>{item.content}</p>
                            <p>{item.description}</p>
                            <p>Published At: {item.publishedAt}</p>
                            {/* Can achieve this by react-router also */}
                            <a href={item.url} target="_blank">Click here for Full news</a>

                        </div>
                    </div>
                )) : []
            }
        </div>
    )
}

export default Api;
